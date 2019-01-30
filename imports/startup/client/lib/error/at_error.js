import { Template } from 'meteor/templating';
import './at_error.html';

Template['override-atError'].replaces( 'atError' );
