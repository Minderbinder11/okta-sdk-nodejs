/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/**
 * @class User
 */
class User {
  constructor(resourceJson, client) {
    Object.assign(this, resourceJson);
    this.client = client;
  }

  getGroups(queryParameters) {
    return this.client.listUserGroups(this.id, queryParameters);
  }
  activate(postBody, queryParameters) {
    return this.client.activateUser(this.id, postBody, queryParameters);
  }

  delete() {
    return this.client.http.http(this._links.self.href, {
      method: 'delete'
    });
  }
}

module.exports = User;