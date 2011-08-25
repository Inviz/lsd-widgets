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
    pseudos: Array.object('form', 'fieldset', 'command', 'submittable')
  },

  getRequestURL: function() {
    return this.attributes.action || location.pathname;
  }
});
