

import './loginModal.html';
import './loginModal.css';

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
