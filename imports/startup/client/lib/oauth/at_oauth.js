import { Template } from 'meteor/templating';
import './at_oauth.html';

Template['override-atOauth'].replaces( 'atOauth' );
