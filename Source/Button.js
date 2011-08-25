/*
---
 
script: Button.js
 
description: A button widget. You click it, it fires the event
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget
  - LSD/LSD.Mixin.Touchable
  - LSD/LSD.Mixin.Command

provides: 
  - LSD.Widget.Button
 
...
*/

LSD.Widget.Button = new Class({  
  options: {
    tag: 'button',
    inline: true,
    pseudos: Array.object('touchable', 'clickable', 'command')
  }
});