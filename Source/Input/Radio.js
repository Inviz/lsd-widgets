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
- LSD/LSD.Mixin.Focusable

provides: [LSD.Widget.Input.Radio]
 
...
*/

LSD.Widget.Input.Radio = new Class({
  options: {
    tag: 'input',
    pseudos: Array.object('focusable', 'clickable', 'radio', 'form-associated', 'value'),
    events: {
      _radio: {
        self: {
          setDocument: function() {
            if (this.attributes.checked || this.pseudos.checked) this.check();
          }
        }
      }
    },
    shortcuts: {
      space: 'click'
    }
  }
});