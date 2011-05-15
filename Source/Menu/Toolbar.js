/*
---
 
script: Toolbar.js
 
description: Menu widget to be used as a drop down
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Menu
  
provides:
  - LSD.Widget.Menu.Toolbar

 
...
*/

LSD.Widget.Menu.Toolbar = new Class({
  Extends: LSD.Widget.Menu,
  
  options: {
    attributes: {
      type: 'toolbar'
    }
  }
});