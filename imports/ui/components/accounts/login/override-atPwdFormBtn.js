import { Template } from 'meteor/templating';
import './override-atPwdFormBtn.html';

Template['override-atPwdFormBtn'].replaces( 'atPwdFormBtn' );
