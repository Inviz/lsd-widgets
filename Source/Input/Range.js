/*
---
 
script: Range.js
 
description: Range slider input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Input
- LSD.Widget.Button
- LSD/LSD.Widget.Paint
- LSD/LSD.Trait.Slider
- LSD/LSD.Mixin.Focus
- LSD/LSD.Trait.Accessibility

provides: [LSD.Widget.Input.Range]
 
...
*/

LSD.Widget.Input.Range = new Class({
  Includes: [
    LSD.Widget.Paint,
    LSD.Trait.Slider,
    LSD.Trait.Accessibility
  ],
  
  options: {
    tag: 'input',
    shortcuts: {
      next: 'increment',
      previous: 'decrement'
    },
    layout: {
      children: {
        '>thumb[shape=arrow]#thumb': {}
      }
    },
    writable: true
  },
  
  initialize: function() {
    //delete this.options.events.focus.element.mousedown;
    this.parent.apply(this, arguments);
    this.addPseudo(this.options.mode);
  },

  onSet: function() {
    this.focus();
  }
});

LSD.Widget.Input.Range.Thumb = new Class({
  Extends: LSD.Widget.Button,
    
  options: {
    tag: 'thumb'
  }
});