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

LSD.Widget.define('Menu.Toolbar', {
  Extends: LSD.Widget.Menu,
  
  Implements: LSD.Trait.List,
  
  options: {
    attributes: {
      type: 'toolbar'
    }
  }
});