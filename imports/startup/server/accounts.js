import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Meteor.startup( () => {
    // code to run on server at startup

    Accounts.onCreateUser( ( options, user ) => {
        const newUser = { ...user };

        newUser.publicInfo = {
            avatar: '/generic-avatar.png',
            displayName: undefined,
            description: 'Songsmith Extroidinare',
        };

        newUser.privateInfo = {
            pictures: [],
            primaryEmail: undefined,
        };

        if ( user.services.password ) {
            newUser.services.password.mark = true;
            newUser.publicInfo.displayName = options.email;
            newUser.privateInfo.primaryEmail = options.email;
        } else if ( newUser.services.google ) {
            newUser.publicInfo.avatar = user.services.google.picture;
            newUser.privateInfo.pictures.push( user.services.google.picture );
            newUser.privateInfo.primaryEmail = user.services.google.email;
        } else if ( user.services.facebook ) {
            // TODO:
        }

        console.log( 'Create User options: ', options );
        newUser.lastLogin = new Date();
        // We still want the default hook's 'profile' behavior.
        if ( options.profile ) {
            newUser.profile = options.profile;
        }

        // return the new user object at the end!
        return newUser;
    } );
} );


Meteor.publish( 'Meteor.users.info', function( ) {
    // Select only the users that match the array of IDs passed in
    const selector = {
        //      _id: Accounts.userId,
    };

    const options = {
        fields: { publicInfo: 1 },
    };

    return Meteor.users.find( selector, options );
} );

Meteor.publish( 'Meteor.users.mydetails', function( ) {
    // Select only the current user
    const selector = {
        _id: Accounts.userId(),
    };
    console.log( 'publish: ', selector );
    const options = {
        fields: {
            emails: 1,
            publicInfo: 1,
            privateInfo: 1,
            profile: 1,
            'services.google.name': 1,
            'services.facebook.name': 1,
            'services.password.mark': 1,
        },
    };

    return Meteor.users.find( selector, options );
} );
