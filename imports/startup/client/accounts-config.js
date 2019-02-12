// configure login templates
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config( {
    requestPermissions: {
        facebook: ['email'],
        github: ['user'],
    },
    requestOfflineToken: {
        google: true,
    },
    passwordSignupFields: 'USERNAME_AND_EMAIL',
} );
