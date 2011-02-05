/*
---
 
script: Radio.js
 
description: A radio button, set of connected widgets that steal checkedness from each other
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Input
- LSD/LSD.Widget.Paint
- LSD/LSD.Mixin.Touchable
- LSD/LSD.Mixin.Focus
- LSD/LSD.Trait.Accessibility

provides: [LSD.Widget.Input.Radio]
 
...
*/

LSD.Widget.Input.Radio = new Class({
  Extends: LSD.Widget.Paint,
  
  options: {
    tag: 'input',
    shortcuts: {
      space: 'click'
    },
    command: {
      type: 'radio'
    },
    writable: true
  }
});