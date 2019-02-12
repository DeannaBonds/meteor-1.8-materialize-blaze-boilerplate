import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import M2M from '../../../../util/M2M';
import Collections from '../../../../../api';

import './items.html';
import './items.css';


Template.items.onCreated( function() {
    this.itemsHandle = this.subscribe( 'items.owned', 'dashboard' );
} );

Template.items.helpers( {
    items() {
        return Collections.Items.find( {} );
    },
} );

Template.items.events( {
    'submit .new-item'( event ) {
        event.preventDefault();
        const { target } = event;
        const name = target.name.value;
        const stuff = target.stuff.value;
        const important = target.important.checked;
        const item = { name, stuff, important };

        M2M.callForForm( '.new-item', 'items.insert', item );
    },
} );

Template.item.events( {
    'click .delete'() {
        Meteor.call( 'items.remove', this._id );
    },
} );
