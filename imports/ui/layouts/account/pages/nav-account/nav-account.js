import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { $ } from 'meteor/jquery';

import './nav-account.html';

Template.navAccount.events( {
    'click .logout': ( ) => {
        AccountsTemplates.logout();
    },
} );


Template.navAccount.onRendered( function( ) {
    // eslint-disable-next-line no-undef
    this.sidenav = new M.Sidenav( $( '#nav-account' ).get( 0 ) );
    // eslint-disable-next-line no-undef
    M.Tooltip.init( $( '.tooltipped' ) );
} );

Template.navAccount.helpers( {
    user() {
        if ( Meteor.user() ) {
            return Meteor.user();
        }
        return undefined;
    },
} );
