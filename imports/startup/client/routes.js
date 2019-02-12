// set up all routes in the app
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import to load these templates
import '../../ui/layouts/account/accountLayout';
import '../../ui/layouts/app/appLayout.js';
import '../../ui/layouts/unAuthenticated/unAuthenticatedLayout';

// import '../../ui/pages/root-redirector.js';
// import '../../ui/pages/lists-show-page.js';
import '../../ui/pages/app-not-found.html';

// Below here are the route definitions
// Home Page
FlowRouter.route( '/', {
    name: 'home',
    async action() {
        if ( Meteor.userId() ) {
            FlowRouter.go( '/app/dashboard' );
        } else {
            FlowRouter.go( '/app/about' );
        }
    },
} );

// Top level App Routes
FlowRouter.route( '/app/terms-of-service', {
    name: 'app-terms-of-service',
    action() {
        BlazeLayout.render( 'unAuthenticatedLayout', { main: 'termsOfService' } );
    },
} );

FlowRouter.route( '/app/privacy-statement', {
    name: 'app-privacy-statement',
    action() {
        BlazeLayout.render( 'unAuthenticatedLayout', { main: 'privacyStatement' } );
    },
} );

FlowRouter.route( '/app/about', {
    name: 'app-about',
    action() {
        BlazeLayout.render( 'unAuthenticatedLayout', { main: 'about' } );
    },
} );

FlowRouter.route( '/app/whats-new', {
    name: 'app-whats-new',
    action() {
        BlazeLayout.render( 'unAuthenticatedLayout', { main: 'whatsNew' } );
    },
} );

FlowRouter.route( '/app/help', {
    name: 'app-help',
    action() {
        BlazeLayout.render( 'unAuthenticatedLayout', { main: 'help' } );
    },
} );

FlowRouter.route( '/app/search', {
    name: 'app-search',
    action() {
        BlazeLayout.render( 'appLayout', { main: 'appSearch' } );
    },
} );

FlowRouter.route( '/app/dashboard', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'app-dashboard',
    action() {
        BlazeLayout.render( 'appLayout', { main: 'items' } );
    },
} );

// Account routes
FlowRouter.route( '/account/overview', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'account-overview',
    action() {
        BlazeLayout.render( 'accountLayout', { main: 'accountOverview' } );
    },
} );

FlowRouter.route( '/account/info', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'account-info',
    action() {
        BlazeLayout.render( 'accountLayout', { main: 'accountInfo' } );
    },
} );

FlowRouter.route( '/account/settings', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'account-settings',
    action() {
        BlazeLayout.render( 'accountLayout', { main: 'accountSettings' } );
    },
} );

FlowRouter.route( '/account/privacy', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'account-privacy',
    action() {
        BlazeLayout.render( 'accountLayout', { main: 'accountPrivacy' } );
    },
} );

FlowRouter.route( '/account/notifications', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'account-notifications',
    action() {
        BlazeLayout.render( 'accountLayout', { main: 'accountNotifications' } );
    },
} );

FlowRouter.notFound = {
    action: () => {
        BlazeLayout.render( 'notFound' );
    },
};
