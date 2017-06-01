/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

var Resource = require('../resource');

/**
 * @class EmbeddedObject
 */
class EmbeddedObject extends Resource{
  constructor(resourceJson, client) {
    super(resourceJson, client);
  }


  delete() {
    return this.client.http.delete(this._links.self.href);
  }
}

module.exports = EmbeddedObject;