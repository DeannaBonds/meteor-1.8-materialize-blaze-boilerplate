import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './header.html';
import '../accounts/login/loginModal.js';

Template.header.events( {
    'click .login': () => {
        $( '.login-modal' ).addClass( 'open' );
    },
    'click .logout': ( ) => {
        Meteor.logout();
    },
})
