import { Template } from 'meteor/templating';
import './at_form.html';

Template['override-atForm'].replaces( 'atForm' );
