# okta-sdk-nodejs

Node.js API Client for the Okta Platform API

Requires Node.js version 4 or higher.

### Usage

```javascript
const okta = require('okta-sdk-nodejs');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_APICLIENT_ORGURL, // e.g. 'https://dev-1234.oktapreview.com/'
  token: process.env.OKTA_APICLIENT_TOKEN    // Obtained from Developer Dashboard, API section
});

// Log all users in the org

client.listUsers().each(user => {
  console.log(user);
});

// Create a new user with password login credentials in the org

let createdUser;

const newUser = {
  'profile': {
    'firstName': 'Foo',
    'lastName': 'Bar',
    'email': 'foo@example.com',
    'email': 'foo@example.com',
  },
  'credentials': {
    'password' : {
      'value': 'PasswordAbc123'
    }
  }
};

client.createUser(newUser).then((user) => {
  console.log(user);
  createdUser = user;
});

// Create a Group

let createdGroup;

const newGroup = {
  profile: {
    name: 'Admin Users Group'
  }
};
return client.createGroup(newGroup).then((group) => {
  console.log(group);
  createdGroup = group;
});

// Add the user to that group
createdUser.addToGroup(createdGroup.id).then(() => {
  console.log('User has been added to group');
});
```

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).