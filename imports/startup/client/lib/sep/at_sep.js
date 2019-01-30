import { Template } from 'meteor/templating';
import './at_sep.html';
import './at_sep.css';

Template['override-atSep'].replaces( 'atSep' );
