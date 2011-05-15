/*
---
 
script: Form.js
 
description: A form widgets. Intended to be submitted.
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget
  - LSD/LSD.Trait.Form
  - LSD/LSD.Trait.Fieldset

provides: 
  - LSD.Widget.Form
 
...
*/

LSD.Widget.Form = new Class({
  Implements: [
    LSD.Trait.Fieldset,
    LSD.Trait.Form
  ],
  
  options: {
    tag: 'form',
    events: {
      element: {
        submit: 'submit'
      },
      self: {
        build: function() {
          // novalidate html attribute disables internal form validation 
          // on form submission. Chrome and Safari will block form 
          // submission without any visual clues otherwise.
          if (this.element.get('tag') == 'form') this.element.setProperty('novalidate', true);
        }
      }
    }
  }
});
