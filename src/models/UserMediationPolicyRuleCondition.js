/**
 *  THIS FILE IS AUTO GENERATED - SEE CONTRIBUTOR DOCUMENTATION
 */

/**
 * @class UserMediationPolicyRuleCondition
 */
class UserMediationPolicyRuleCondition {
  constructor(resourceJson, client) {
    Object.assign(this, resourceJson);
    this.client = client;
  }


  delete() {
    return this.client.http.delete(this._links.self.href);
  }
}

module.exports = UserMediationPolicyRuleCondition;