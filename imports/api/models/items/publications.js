// all list-related publications
import { Meteor } from 'meteor/meteor';
import Items from './items';

if ( Meteor.isServer ) {
    Meteor.publish( 'items.owned', function() {
        return Items.find( { userId: this.userId } );
    } );
}
