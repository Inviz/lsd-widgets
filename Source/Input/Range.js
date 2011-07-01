/*
---
 
script: Range.js
 
description: Range slider input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Input
- LSD.Widget.Button
- LSD/LSD.Widget
- LSD/LSD.Trait.Slider
- LSD/LSD.Mixin.Focusable

provides: [LSD.Widget.Input.Range]
 
...
*/

LSD.Widget.Input.Range = new Class({
  Extends: LSD.Trait.Slider,
  
  options: {
    tag: 'input',
    shortcuts: {
      next: 'increment',
      previous: 'decrement'
    },
    layout: Array.fast('::thumb'),
    has: {
      one: {
        thumb: {
          selector: 'thumb',
          source: 'input-range-thumb'
        }
      }
    },
    pseudos: Array.fast('focusable', 'value', 'form-associated')
  },
  
  initialize: function() {
    this.parent.apply(this, arguments);
    this.addPseudo(this.options.mode);
  },

  onSet: function(value) {
    this.setValue(value);
  }
});

LSD.Widget.Input.Range.Thumb = new Class({
  Extends: LSD.Widget.Button,
    
  options: {
    tag: 'thumb'
  }
});