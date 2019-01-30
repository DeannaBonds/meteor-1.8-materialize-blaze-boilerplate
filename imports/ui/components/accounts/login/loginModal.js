import { $ } from 'meteor/jquery';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './loginModal.html';
import './loginModal.css';

AccountsTemplates.configure( {
    privacyUrl: '/about/privacy',
    termsUrl: '/about/terms-of-use',
    enablePasswordChange: true,
    showForgotPasswordLink: true,
    negativeFeedback: true,
    onSubmitHook: ( error ) => {
        if ( !error ) {
            // close window
            // eslint-disable-next-line no-undef
            M.Modal.getInstance( $( '#loginModal' ).get( 0 ) ).close();
        }
    },
    onLogoutHook: () => {
        FlowRouter.redirect( '/' );
    },
} );


/*
 * Examples of adding fields to the registration form
 *
AccountsTemplates.addField( {
    _id: 'fruit',
    type: 'radio',
    displayName: 'Preferred Fruit',
    select: [
        {
            text: 'Apple',
            value: 'aa',
        }, {
            text: 'Banana',
            value: 'bb',
        }, {
            text: 'Carrot',
            value: 'cc',
        },
    ],
} );

AccountsTemplates.addField( {
    _id: 'gender',
    type: 'select',
    displayName: 'Gender',
    select: [
        {
            text: 'Male',
            value: 'male',
        },
        {
            text: 'Female',
            value: 'female',
        },
    ],
} );

AccountsTemplates.addField( {
    _id: 'mailing_list',
    type: 'checkbox',
    displayName: 'Subscribe me to mailing List',
} );

*/


// Template.loginModal.onCreated( function() {
//     this.modalOpen = new ReactiveVar( false );
// } );

// Template.loginModal.helpers( {
//     loginModalClass( ) {
//         if ( Template.instance().modalOpen.get() ) {
//             return 'open';
//         }
//         return '';
//     },
//     openLoginModal( ) {
//         Template.instance().modalOpen.set( true );
//     },
// } );

// Template.loginModal.events( {
//     'click .close-login': ( event, templateInstance ) => {
//         $( '.login-modal' ).removeClass( 'open' );
//         templateInstance.modalOpen.set( false );
//     }
// } );
