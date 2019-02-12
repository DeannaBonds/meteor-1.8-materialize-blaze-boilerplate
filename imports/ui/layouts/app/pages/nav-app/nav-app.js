import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import { $ } from 'meteor/jquery';

import './nav-app.html';
import './nav-app.css';

Template.navApp.events( {
    'click .logout': ( ) => {
        AccountsTemplates.logout();
    },
} );

Template.navApp.onRendered( function( ) {
    // eslint-disable-next-line no-undef
    this.sidenav = new M.Sidenav( $( '#nav-app' ).get( 0 ) );
} );

Template.navApp.onCreated( function() {
    this.subscribe( 'Meteor.users.info' );

//     FlowRouter.triggers.exit( [() => {
//         console.log( 'exit', this.sidenav.close() );
// }] );
} );

Template.navApp.helpers( {
    user() {
        if ( Meteor.user() ) {
            return Meteor.user();
        }
        return undefined;
    },
} );
