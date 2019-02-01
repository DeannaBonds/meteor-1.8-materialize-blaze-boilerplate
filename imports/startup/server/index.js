import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
// This defines all the collections, publications and methods that the application provides
// as an API to the client.
import '../../api/api.js';
// import server startup through a single index entry point
// This defines a starting set of data to be loaded if the app is loaded with an empty db.
import './fixtures.js';
// This file configures the Accounts package to define the UI of the reset password email.
import './reset-password-email.js';
// Set up some rate limiting and other important security settings.
import './security.js';


Meteor.startup( () => {
    // code to run on server at startup
    //   Meteor.users.allow( { update: () => true });

    Accounts.onCreateUser( ( options, user ) => {
        console.log( 'create user: ', user );
        if ( user.services.google ) {
            // eslint-disable-next-line no-param-reassign
            user.picture = user.services.google.picture;
        }
        // console.log( 'login: ', Accounts.user(), picture );
        // Accounts.user().picture = picture;
        // Meteor.users.update( Accounts.userId(), { $set: { picture } } );

        // We still want the default hook's 'profile' behavior.
        if ( options.profile ) {
            // eslint-disable-next-line no-param-reassign
            user.profile = options.profile;
        }

        // Don't forget to return the new user object at the end!
        return user;
    } );
} );

// Meteor.publish( 'users.picture', function( ) {
//     // Select only the users that match the array of IDs passed in
//     const selector = {
//         _id: Accounts.userId(),
//     };

//     // Only return one field, `picture`
//     const options = {
//         fields: { picture: 1 },
//     };

//     return Meteor.users.find( selector, options );
// } );
