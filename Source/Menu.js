/*
---
 
script: Menu.js
 
description: Menu widget base class
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget
  - LSD/LSD.Mixin.Focus
  - LSD/LSD.Mixin.List
  

provides: 
  - LSD.Widget.Menu
 
...
*/

LSD.Widget.Menu = new Class({
  options: {
    tag: 'menu',
    inline: null,
    pseudps: Array.fast('list')
  }
});

LSD.Widget.Menu.Command = new Class({
  options: {
    tag: 'command',
    inline: null,
    pseudos: Array.fast('item')
  }
});