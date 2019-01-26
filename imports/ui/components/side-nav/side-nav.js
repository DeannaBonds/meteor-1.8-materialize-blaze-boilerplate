
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import './side-nav.html';
import './side-nav.css';

Template.sideNav.events( {
    'click .login-toggle': () => {
        Session.set( 'nav-toggle', 'open' );
    },
    'click .logout': () => {
        Meteor.logout();
    },
} );
