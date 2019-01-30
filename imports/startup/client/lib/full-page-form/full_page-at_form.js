import { Template } from 'meteor/templating';
import './full_page_at_form.html';

Template['override-fullPageAtForm'].replaces( 'fullPageAtForm' );
