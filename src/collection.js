const querystring = require('querystring');
const parseLinkHeader = require('parse-link-header');

/**
 * Provides an interface to iterate over all objects in a collection that has pagination via Link headers
 */
class Collection {

  /**
   * Creates an instance of Collection.
   * @param {Object <FetchLike>} http A fetch-like http service
   * @param {String} uri E.g. /api/v1/resources
   * @param {Object} queryMap querystring map to create collection with, e.g { 'search': 'profile.firstName sw "FOO"' }
   */
  constructor(http, uri, Ctor) {
    this.currentUri = uri;
    this.http = http;
    this.Ctor = Ctor;
  }

  getPage() {
    return this.http.http(this.currentUri)
      .then(res => {
        const link = res.headers.get('link');
        if (link) {
          const parsed = parseLinkHeader(link);
          if (parsed.next) {
            this.currentUri = parsed.next.url;
            return res.json();
          }
        }
        this.currentUri = undefined;
        return res.json();
      });
  }

  each(iterator) {

    const self = this;

    return new Promise((resolve, reject) => {

      function processPage() {
        // Get the first page
        return self.getPage()
        .then(resources => {
          let resourceIndex = 0;

          // Loop through resources using a Promise
          function sendResource(resource) {
            // Stop iterating these resources, get more
            if (!resource) {
              if (self.currentUri) {
                return processPage();
              }
              resolve();
              return;
            }

            const result = iterator(new self.Ctor(resource));

            // if it's a Promise
            if (result && result.then) {
              return result.then(() => {
                resourceIndex++;
                const nextresource = resources[resourceIndex];
                return sendResource(nextresource);
              });
            }
            else if (result === false) { // if they want to short-circuit
              resolve();
              return;
            }
            else { // if it's synchronous and not short-circuited
              resourceIndex++;
              const nextresource = resources[resourceIndex];
              return sendResource(nextresource);
            }
          }

          const resource = resources[resourceIndex];
          return sendResource(resource);
        });
      }

      return processPage().catch(err => reject(err));
    });
  }
}

module.exports = Collection;