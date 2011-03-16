/*
---
 
script: Menu.js
 
description: Menu widget base class
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget.Paint

provides: 
  - LSD.Widget.Menu
 
...
*/

LSD.Widget.Menu = new Class({
  Extends: LSD.Widget.Paint,
  
  options: {
    tag: 'menu',
    element: {
      tag: 'menu'
    }
  }
});

LSD.Widget.Menu.Command = new Class({
  Extends: LSD.Widget.Paint,
  
  options: {
    tag: 'command',
    element: {
      tag: 'command'
    }
  }
});

!function(Command) {
  Command.Command = Command.Checkbox = Command.Radio = Command;
}(LSD.Widget.Menu.Command);