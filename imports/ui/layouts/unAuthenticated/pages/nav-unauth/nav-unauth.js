import { Template } from 'meteor/templating';

import './nav-unauth.html';


Template.navUnauth.onRendered( function( ) {
    // eslint-disable-next-line no-undef
    this.sidenav = new M.Sidenav( $( '#nav-unauth' ).get( 0 ) );
} );
