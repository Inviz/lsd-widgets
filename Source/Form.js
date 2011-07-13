/*
---
 
script: Form.js
 
description: A form widgets. Intended to be submitted.
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget
  - LSD/LSD.Mixin.Submittable
  - LSD/LSD.Mixin.Fieldset
  - LSD/LSD.Mixin.Command

provides: 
  - LSD.Widget.Form
 
...
*/

LSD.Widget.Form = new Class({
  options: {
    tag: 'form',
    pseudos: Array.object('form', 'fieldset', 'command', 'submittable'),
    events: {
      self: {
        build: function() {
          // novalidate html attribute disables internal form validation 
          // on form submission. Chrome and Safari will block form 
          // submission without any visual clues otherwise.
          if (this.element.get('tag') == 'form') this.element.setProperty('novalidate', true);
        }
      }
    }
  },

  getRequestURL: function() {
    return this.attributes.action || location.pathname;
  }
});
