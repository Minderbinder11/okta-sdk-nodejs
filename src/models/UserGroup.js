/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

var Resource = require('../resource');

/**
 * @class UserGroup
 */
class UserGroup extends Resource{
  constructor(resourceJson, client) {
    super(resourceJson, client);
  }

  listUsers(queryParameters) {
    return this.client.listGroupUsers(this.id, queryParameters);
  }

  delete() {
    return this.client.http.delete(this._links.self.href);
  }
}

module.exports = UserGroup;