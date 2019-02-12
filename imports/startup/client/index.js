// import client startup through a single index entry point
import { Meteor } from 'meteor/meteor';
import './lib/index';

// eslint-disable-next-line no-unused-vars
// import Collections from '../../api';
import './accounts-config';
import './routes.js';
import './accounts-templates';

Meteor.defer( () => {
    // eslint-disable-next-line no-undef
    M.AutoInit();
} );
