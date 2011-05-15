/*
---
 
script: Context.js
 
description: Menu widget to be used as a drop down
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Menu

provides:
  - LSD.Widget.Menu.Context
  - LSD.Widget.Menu.Context.Button
  - LSD.Widget.Menu.Context.Command
  - LSD.Widget.Menu.Context.Command.Command
  - LSD.Widget.Menu.Context.Command.Checkbox
  - LSD.Widget.Menu.Context.Command.Radio
 
...
*/

LSD.Widget.Menu.Context = new Class({
  Extends: LSD.Widget.Menu,

  options: { 
    attributes: {
      type: 'context',
      tabindex: 0
    }
  }
});

LSD.Widget.Menu.Context.Command = new Class({
  Extends: LSD.Widget.Menu.Command
});