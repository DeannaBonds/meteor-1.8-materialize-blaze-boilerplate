import { Template } from 'meteor/templating';
import './at_title.html';

Template['override-atTitle'].replaces( 'atTitle' );
