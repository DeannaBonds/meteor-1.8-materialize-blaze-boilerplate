import { Template } from 'meteor/templating';
import './at_sep.html';

Template['override-atSep'].replaces( 'atSep' );
