/*
---
 
script: Checkbox.js
 
description: Boolean checkbox type of input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Input
- LSD/LSD.Mixin.Touchable
- LSD/LSD.Mixin.Focus
- LSD/LSD.Trait.Accessibility

provides: [LSD.Widget.Input.Checkbox]
 
...
*/
LSD.Widget.Input.Checkbox = new Class({
  Extends: LSD.Widget.Paint,
  
  options: {
    tag: 'input',
    layers: {
      shadow:  ['shadow'],
      stroke: ['stroke'],
      background:  [LSD.Layer.Fill.Background],
      reflection:  [LSD.Layer.Fill.Reflection],
      glyph: ['glyph']
    },
    shortcuts: {
      space: 'toggle'
    },
    command: {
      type: 'checkbox'
    },
    events: {
      enabled: {
        element: {
          click: 'click'
        }
      }
    },
    writable: true
  }
});