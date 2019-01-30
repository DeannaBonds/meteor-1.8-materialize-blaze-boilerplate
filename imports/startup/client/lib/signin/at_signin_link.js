import { Template } from 'meteor/templating';
import './at_signin_link.html';

Template['override-atSigninLink'].replaces( 'atSigninLink' );
