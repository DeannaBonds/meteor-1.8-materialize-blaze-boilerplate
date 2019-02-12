# Meteor 1.8 MaterializeCSS Blaze Starter App

Starter APp project for Meteor 1.8, Blaze, ESLint, Sass, Meteortoys, Flow Router, using latest Meteor style guide.

**This is a work in progress (_check back often_)** 

## Starter App
I upgraded the status of this from boilerplate to starter app.
I have included:
* Meteor Accounts packaged with my reskinning in a Materialize look
* Full Meteor Accounts support, including accounts section of the app for full account actions.
* Items sample app page with materialize forms and my simpleschema errors to materialize error messages on each field
* Responsive sidenav.
* App broken into unauthorized, account, and app sections

![alt text][change-password]

[change-password]: https://github.com/DeannaBonds/meteor-1.8-materialize-blaze-boilerplate/raw/master/images/change-password.png "Change Password"
## Yet to be done.
* Add Toast to M2M
* Add Roles
* Add Admin mode and user manager

## Notes:
* In the imports/ui/components, the meteor import statements do not support loading Sass files into the component.  CSS files can be used.  If Sass is desired or needed for the component, there is a styles/components folder to add the component style.  Always insure that the new component is added to the _all-components.scss file.

* Autoform has not been maintained and currently doesn't work correctly.  I may in the future update autoform, but for now I will code the forms the old fashion way.

* Meteor Accounts Materialize didn't work for the more modern Meteor code.  I rewrote it and it is included in this repo (for now).  I will probably break that out into a npm package of its own.  I love the results of how the signon screens look.

* I created a bridge between errors thrown from the simpleSchema validation and the materialize forms.

## Links:
 * [Materialize](https://materializecss.com)
