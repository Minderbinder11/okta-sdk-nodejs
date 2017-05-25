/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/**
 * @class UserGroup
 */
class UserGroup {
  constructor(resourceJson, client) {
    Object.assign(this, resourceJson);
    this.client = client;
  }

  listUsers(queryParameters) {
    return this.client.listGroupUsers(this.id, queryParameters);
  }

  delete() {
    return this.client.http.delete(this._links.self.href);
  }
}

module.exports = UserGroup;