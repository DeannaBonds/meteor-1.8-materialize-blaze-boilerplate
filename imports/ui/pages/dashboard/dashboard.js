import { Template } from 'meteor/templating';
import Collections from '../../../api/api.js';


import './dashboard.html';
import './dashboard.css';

Template.dashboard.helpers( {
    formCollection() {
        return Collections.Items;
    },
} );
