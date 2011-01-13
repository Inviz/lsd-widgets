/*
---
 
script: Input.js
 
description: A base class for all kinds of form controls
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD/LSD.Widget.Paint
- LSD/LSD.Trait.Input
- LSD/LSD.Mixin.Focus

provides: [LSD.Widget.Input]
 
...
*/
LSD.Widget.Input = new Class({
  States: {
    'focused': ['focus', 'blur']
  },
  
  Includes: [
    LSD.Widget.Paint,
    LSD.Trait.Input
  ],
  
  options: {
    tag: 'input',

    attributes: {
      type: 'text'
    },

    layers: {
      shadow:  ['shadow'],
      stroke: ['stroke'],
      background:  [LSD.Layer.Fill.Background],
      reflection:  [LSD.Layer.Fill.Reflection],
      glyph: ['glyph']
    },
    
    writable: true,
    focusable: false,    
    events: {
      _input: {
        focus: function() {
          this.input.focus();
        },
        blur: function() {
          this.input.blur();
        }
      }
    }
  },
  
  retain: function() {
    this.focus(false);
    return false;
  },
  
  applyValue: function(item) {
    this.input.set('value', item);
  }
});