/*
---
 
script: Menu.js
 
description: Menu widget base class
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget

provides: 
  - LSD.Widget.Menu
 
...
*/

LSD.Widget.define('Menu', {
  options: {
    tag: 'menu',
    inline: null
  }
});

LSD.Widget.define('Menu.Command', {
  options: {
    tag: 'command',
    inline: null,
    pseudos: Array.fast('item')
  }
});