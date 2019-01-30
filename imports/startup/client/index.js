// import client startup through a single index entry point
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import './lib/index';

// eslint-disable-next-line no-unused-vars
import Collections from '../../api/api';
import './useraccounts-configuration.js';
import './routes.js';


Meteor.defer( () => {
    // eslint-disable-next-line no-undef
    M.AutoInit();
    SimpleSchema.extendOptions( ['autoform'] );
} );
