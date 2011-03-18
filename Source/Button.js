/*
---
 
script: Button.js
 
description: A button widget. You click it, it fires the event
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget.Paint
  - LSD/LSD.Mixin.Touchable

provides: 
  - LSD.Widget.Button
 
...
*/

LSD.Widget.Button = new Class({

  Extends: LSD.Widget.Paint,

  options: {
    tag: 'button',
    label: '',
    pseudos: FastArray.compact('touchable')
  },
  
  setContent: function(content) {
    this.setState('text');
    return this.parent.apply(this, arguments);
  }

});
