import { Template } from 'meteor/templating';
import './at_input.html';

Template['override-atInput'].replaces( 'atInput' );
Template['override-atTextInput'].replaces( 'atTextInput' );
Template['override-atCheckboxInput'].replaces( 'atCheckboxInput' );
Template['override-atSelectInput'].replaces( 'atSelectInput' );
Template['override-atRadioInput'].replaces( 'atRadioInput' );
Template['override-atHiddenInput'].replaces( 'atHiddenInput' );

Template.atSelectInput.onRendered( function () {
    // eslint-disable-next-line no-undef
    M.FormSelect.init( $( `#at-field-${this.data._id}` ).get( 0 ) );
} );
