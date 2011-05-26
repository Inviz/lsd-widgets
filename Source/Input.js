/*
---
 
script: Input.js
 
description: A base class for all kinds of form controls
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget
  - LSD/LSD.Trait.Input
  - LSD/LSD.Mixin.Focus

provides: 
  - LSD.Widget.Input
 
...
*/

LSD.Widget.Input = new Class({
  Extends: LSD.Trait.Input,
  
  options: {
    tag: 'input',
    attributes: {
      type: 'text'
    },
    focusable: false,
    submittable: true,
    events: {
      _input: {
        focus: function() {
          this.input.focus();
        },
        blur: function() {
          this.input.blur();
        }
      }
    },
    states: Array.fast('focused')
  },
  
  retain: function() {
    this.focus(false);
    return false;
  },
  
  applyValue: function(item) {
    this.input.set('value', item);
  },

  getRawValue: function() {
    return ('value' in this.attributes) && this.element.get('value');
  },

  focus: function() {
    this.element.focus();
  }

});
