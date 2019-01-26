import { Template } from 'meteor/templating';
// import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { $ } from 'meteor/jquery';

import './loginModal.html';
import './loginModal.css';
import './override-atPwdFormBtn';

Template.loginModal.onCreated( function() {
    this.modalOpen = new ReactiveVar( false );
} );

Template.loginModal.helpers( {
    loginModalClass( ) {
        if ( Template.instance().modalOpen.get() ) {
            return 'open';
        }
        return '';
    },
    openLoginModal( ) {
        Template.instance().modalOpen.set( true );
    },
} );

Template.loginModal.events( {
    'click .close-login': ( event, templateInstance ) => {
        $( '.login-modal' ).removeClass( 'open' );
        templateInstance.modalOpen.set( false );
    }
} );
