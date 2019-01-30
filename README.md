# meteor-1.8-blaze-boilerplate
Boilerplate project for Meteor 8.1, Blaze, ESLint, Sass, Meteortoys, Flow Router, using latest Meteor style guide.

This is a work in progress (check back often)
Yet to be done.
* Add Generic item crud to mongo owned by user
* Add Roles
* Add Admin mode and user manager

Notes:
* In the imports/ui/components, the meteor import statements do not support loading Sass files into the component.  CSS files can be used.  If Sass is desired or needed for the component, there is a styles/components folder to add the component style.  Always insure that the new component is added to the _all-components.scss file.

* Autoform has not been maintained and currently doesn't work correctly.  I may in the future update autoform, but for now I will code the forms the old fashion way.

* Meteor Accounts Materialize didn't work for the more modern Meteor code.  I rewrote it and it is included in this repo (for now).  I will probably break that out into a npm package of its own.  I love the results of how the signon screens look.
