/*
---
 
script: Button.js
 
description: A button widget. You click it, it fires the event
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget
  - LSD/LSD.Mixin.Touchable

provides: 
  - LSD.Widget.Button
 
...
*/

LSD.Widget.Button = new Class({  
  options: {
    tag: 'button',
    inline: true,
    pseudos: Array.fast('touchable'),
    events: {
      _button: {
        element: {
          click: 'click'
        }
      }
    }
  },
  
  write: function(content) {
    this.setState('text');
    return this.parent.apply(this, arguments);
  },
  
  click: function(event) {
    if (event && event.preventDefault) event.preventDefault();
    if (!this.disabled) return this.parent.apply(this, arguments);
  }

});