// definition of the items collection

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Items = new Mongo.Collection( 'items' );
Items.attachSchema( new SimpleSchema( {
    name: {
        type: String,
        label: 'Item Name: ',
    },
    stuff: {
        type: String,
        label: 'Item stuff: ',
    },
    important: {
        type: Boolean,
        label: 'Important: ',
    },
    createdDate: {
        type: Date,
        label: 'Created Date',
        defaultValue: new Date(),
    },
    tags: {
        type: Array,
        label: 'Tags',
    },
    'tags.$': {
        type: String,
        label: 'Tag: ',
    },
    userId: {
        type: String,
        label: 'User ID: ',
        defaultValue: Meteor.userId,
    },
}, { tracker: Tracker } ) );

export default Items;
