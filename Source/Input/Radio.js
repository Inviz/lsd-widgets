/*
---
 
script: Radio.js
 
description: A radio button, set of connected widgets that steal checkedness from each other
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Input
- LSD/LSD.Widget
- LSD/LSD.Mixin.Touchable
- LSD/LSD.Mixin.Focus

provides: [LSD.Widget.Input.Radio]
 
...
*/

LSD.Widget.define('Input.Radio', {
  options: {
    tag: 'input',
    shortcuts: {
      space: 'click'
    },
    command: {
      type: 'radio'
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