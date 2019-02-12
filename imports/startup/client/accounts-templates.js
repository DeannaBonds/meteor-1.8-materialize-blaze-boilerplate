import { AccountsTemplates } from 'meteor/useraccounts:core';
import { FlowRouter } from 'meteor/kadira:flow-router';


AccountsTemplates.configure( {
    defaultLayout: 'unAuthenticatedLayout',
    defaultLayoutRegions: {},
    defaultContentRegion: 'main',

    privacyUrl: '/app/privacy',
    termsUrl: '/app/terms-of-use',
    focusFirstInput: true,
    enablePasswordChange: true,
    showForgotPasswordLink: true,
    showAddRemoveServices: true,
    negativeFeedback: true,
    enforceEmailVerification: false,
    homeRoutePath: '/',
    onSubmitHook: ( error ) => {
        if ( !error ) {
            FlowRouter.go( '/' );
            // close window
            // eslint-disable-next-line no-undef
            // M.Modal.getInstance( $( '#loginModal' ).get( 0 ) ).close();
        }
    },
    onLogoutHook: () => {
        FlowRouter.go( '/account/sign-in' );
    },
} );

AccountsTemplates.configureRoute( 'signIn', {
    path: 'account/sign-in',
    layoutTemplate: 'unAuthenticatedLayout',
    redirect: '/app/dashboard',
} );

AccountsTemplates.configureRoute( 'signUp', {
    path: 'account/sign-up',
    layoutTemplate: 'unAuthenticatedLayout',
    redirect: '/app/dashboard',
} );

AccountsTemplates.configureRoute( 'changePwd', {
    path: '/account/change-password',
    layoutTemplate: 'accountLayout',
} );
AccountsTemplates.configureRoute( 'forgotPwd' );
AccountsTemplates.configureRoute( 'resetPwd' );
AccountsTemplates.configureRoute( 'resendVerificationEmail' );
