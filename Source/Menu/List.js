/*
---
 
script: List.js
 
description: Menu widget to be used as a list of item
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Menu
- LSD/LSD.Trait.List
- LSD/LSD.Mixin.Focus
- LSD/LSD.Trait.Accessibility
- LSD/LSD.Trait.Proxies

provides:
- LSD.Widget.Menu.List
- LSD.Widget.Menu.List.Item
 
...
*/

LSD.Widget.Menu.List = new Class({
  Extends: LSD.Widget.Menu,
  
  Implements: LSD.Trait.List,
  
  options: {
    attributes: {
      type: 'list'
    },
    mutations: {
      '> button, > li, > command, > option': 'menu-list-option'
    },
    has: {
      many: {
        items: {
          layout: 'menu-list-item'
        }
      }
    },
    events: {
      self: {
        dominject: 'makeItems'
      },
      element: {
        'mousedown:on(option)': function() {
          this.listWidget.selectItem(this)
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