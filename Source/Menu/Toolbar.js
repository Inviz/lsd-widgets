/*
---
 
script: Toolbar.js
 
description: Menu widget to be used as a drop down
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Menu
  - LSD.Widget.Button
  - LSD/LSD.Mixin.Focus
  - LSD/LSD.Trait.List

provides:
  - LSD.Widget.Menu.Toolbar

 
...
*/
LSD.Widget.Menu.Toolbar = new Class({
  Includes: [
    LSD.Widget.Menu,
    LSD.Trait.List,
    LSD.Trait.Accessibility
  ],
  
  options: {
    attributes: {
      type: 'toolbar'
    }
  }
});