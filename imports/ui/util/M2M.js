import { $ } from 'meteor/jquery';
import { Meteor } from 'meteor/meteor';

/**
 * Meteor 2 Material
 */
const M2M = {
    /**
     * callForForm
     * @description Meteor 2 Materialize: Meteor.call(method,args) and map errors to form fields
     * @param String formSelector: css selector for the form
     * @param String method: the Meteor.call method
     * @param {*} callArgs: arguments to the Meteor.call method
     */
    callForForm( formSelector, method, ...callArgs ) {
        const form = $( formSelector )[0];
        if ( !form ) {
            // eslint-disable-next-line no-console
            console.error( `Form element ${formSelector} not found.` );
            return;
        }
        Meteor.call( method, ...callArgs, ( error ) => {
            if ( !error ) {
                // TODO: add optional toast success
                form.reset();
                return;
            }
            const details = JSON.parse( error.details );
            //            console.log( 'details: ', details );
            details.map( ( fieldError ) => {
                const field = $( `[name=${fieldError.name}]` );

                if ( field.get( 0 ) ) {
                    const errorMsg = $( `[name=${fieldError.name}] ~ .helper-text` ).get( 0 );
                    if ( errorMsg ) {
                        const message = M2M.errorToMessage( fieldError );
                        errorMsg.setAttribute( 'data-error', message );
                    }
                    field.addClass( 'invalid' );
                }
                return field;
            } );
            form.reportValidity();
        } );
    },
    errorToMessage( fieldError ) {
        let msg = '';

        switch ( fieldError.type ) {
        case 'required':
            msg = 'Required';
            break;
        case 'minString':
            msg = `Minimum String length: ${fieldError.min}`;
            break;
        case 'maxString':
            msg = `Maximum String length: ${fieldError.max}`;
            break;
        case 'minNumber':
            msg = `Number must be greater than or equal to ${fieldError.min}`;
            break;
        case 'maxNumber':
            msg = `Number must be less than or equal to ${fieldError.max}`;
            break;
        case 'minNumberExclusive':
            msg = `Number must be greater than ${fieldError.min}`;
            break;
        case 'maxNumberExclusive':
            msg = `Number must be less than ${fieldError.max}`;
            break;
        case 'minDate':
            msg = `Date must be after ${fieldError.min}`;
            break;
        case 'maxDate':
            msg = `Date must be before ${fieldError.max}`;
            break;
        case 'badDate':
            msg = 'Bad Date';
            break;
        case 'minCount':
            msg = `Must be more than ${fieldError.minCount} in collection`;
            break;
        case 'maxCount':
            msg = `Must be less than ${fieldError.maxCount} in collection`;
            break;
        case 'noDecimal':
            msg = 'Must be an integer';
            break;
        case 'notAllowed':
            msg = 'Value not allowed';
            break;
        case 'expectedType':
            msg = `Expected data type ${fieldError.dataType}`;
            break;
        case 'regEx':
            msg = 'Failed parsing expression';
            break;
        case 'keyNotInSchema':
            msg = `"${fieldError.name}" not in schema`;
            break;
        default:
            msg = `${fieldError.type}`;
        }
        return msg;
    },
};

export default M2M;
