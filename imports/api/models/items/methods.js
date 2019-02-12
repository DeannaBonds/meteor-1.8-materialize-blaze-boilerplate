// methods related to lists
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Items from './items';

Meteor.methods( {
    'items.insert'( item ) {
        check( item, Object );
        check( item.name, String );

        // Make sure the user is logged in before inserting a task
        if ( !Meteor.userId() ) {
            throw new Meteor.Error( 'not-authorized' );
        }

        Items.insert( {
            name: item.name,
            stuff: item.stuff,
            important: item.important,
            tags: [],
            createdAt: new Date(),
            userId: Meteor.userId(),
        } );
    },
    'items.remove'( itemId ) {
        check( itemId, String );

        Items.remove( itemId );
    },
} );
