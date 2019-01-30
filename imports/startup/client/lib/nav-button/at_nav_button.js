import { Template } from 'meteor/templating';
import './at_nav_button.html';

Template['override-atNavButton'].replaces( 'atNavButton' );
