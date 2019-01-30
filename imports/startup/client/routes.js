// set up all routes in the app

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
// import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import to load these templates
import '../../ui/layouts/app/appLayout.js';
import '../../ui/layouts/dashboard/dashboardLayout.js';
// import '../../ui/pages/root-redirector.js';
// import '../../ui/pages/lists-show-page.js';
import '../../ui/pages/app-not-found.html';

// Import to override accounts templates
import '../../ui/components/accounts/accounts-templates.js';

// Below here are the route definitions
// Home Page
FlowRouter.route( '/', {
    name: 'home',
    action() {
        BlazeLayout.render( 'appLayout', { main: 'about' } );
    },
} );

FlowRouter.route( '/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render( 'appLayout', { main: 'dashboard' } );
    },
} );
