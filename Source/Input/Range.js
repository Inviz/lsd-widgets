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
- LSD/LSD.Mixin.Focus

provides: [LSD.Widget.Input.Range]
 
...
*/

LSD.Widget.define('Input.Range', {
  Extends: LSD.Trait.Slider,
  
  options: {
    tag: 'input',
    shortcuts: {
      next: 'increment',
      previous: 'decrement'
    },
    layout: {
      children: Array.fast('::thumb')
    },
    has: {
      one: {
        thumb: {
          selector: 'thumb',
          layout: 'input-range-thumb'
        }
      }
    },
    writable: true
  },
  
  initialize: function() {
    this.parent.apply(this, arguments);
    this.addPseudo(this.options.mode);
  },

  onSet: function() {
    this.focus();
  }
});

LSD.Widget.define('Input.Range.Thumb', {
  Extends: LSD.Widget.Button,
    
  options: {
    tag: 'thumb'
  }
});