/*
---
 
script: Menu.js
 
description: Menu widget base class
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget
  - LSD/LSD.Mixin.Focusable
  - LSD/LSD.Mixin.List
  

provides: 
  - LSD.Widget.Menu
 
...
*/

LSD.Widget.Menu = new Class({
  options: {
    tag: 'menu',
    inline: null,
    pseudos: Array.object('list')
  }
});

LSD.Widget.Menu.Command = new Class({
  options: {
    tag: 'command',
    inline: null,
    pseudos: Array.object('item')
  }
});