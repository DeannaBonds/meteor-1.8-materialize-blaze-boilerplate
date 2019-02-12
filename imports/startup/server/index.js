// import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
// This defines all the collections, publications and methods that the application provides
// as an API to the client.
import '../../api/index.js';
// import server startup through a single index entry point
// This defines a starting set of data to be loaded if the app is loaded with an empty db.
import './fixtures.js';
// This file configures the Accounts package to define the UI of the reset password email.
import './reset-password-email.js';
// Set up some rate limiting and other important security settings.
import './security.js';

import './accounts';

import '../../api/models/items/publications';

Meteor.startup( () => {
    // code to run on server at startup
    //   Meteor.users.allow( { update: () => true });
} );
