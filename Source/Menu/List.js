/*
---
 
script: List.js
 
description: Menu widget to be used as a list of item
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Menu
- LSD/LSD.Mixin.List
- LSD/LSD.Mixin.Focusable

provides:
- LSD.Widget.Menu.List
- LSD.Widget.Menu.List.Item
 
...
*/

LSD.Widget.Menu.List = new Class({
  Extends: LSD.Widget.Menu,
  
  options: {
    pseudos: Array.fast('list'),
    attributes: {
      type: 'list'
    },
    has: {
      many: {
        items: {
          source: 'menu-list-option',
          mutation: '> button, > li, > command, > option',
          relay: {
            mousedown: function(item) {
              this.list.selectItem(item)
            }
          }
        }
      }
    }
  }
});
    
LSD.Widget.Menu.List.Option = new Class({
  Extends: LSD.Widget,
  
  options: {
    tag: 'option'
  }
});