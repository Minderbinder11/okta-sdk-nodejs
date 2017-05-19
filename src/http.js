const fetch = require('isomorphic-fetch');

const OktaApiError = require('./api-error');
const HttpError = require('./http-error');

/**
 * It's like fetch :) plus some extra convenience methods.
 *
 * @class Http
 */
class Http {
  constructor() {
    this.defaultHeaders = {};
  }

  errorFilter(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      return response.text().then((body) => {
        let err;

        // If the response is JSON, assume it's an Okta API error. Otherwise, assume it's some other HTTP error

        try {
          err = new OktaApiError(response.url, response.status, JSON.parse(body));
        } catch (e) {
          err = new HttpError(response.url, response.status, body);
        }
        throw err;
      });
    }
  }

  http(uri, request) {
    request = request || {};
    request.headers = Object.assign(this.defaultHeaders, request.headers);
    return fetch(uri, request).then(this.errorFilter);
  }

  getJson(uri, request) {
    request = request || {};
    request.headers = Object.assign({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }, request);
    return this.http(uri, request).then(res => res.json());
  }

  postJson(uri, request) {
    request = request || {};
    request.method = 'post',
    request.body = JSON.stringify(request.body);
    request.headers = Object.assign({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }, request.headers);
    return this.http(uri, request).then(res => res.json());
  }
}

module.exports = Http;