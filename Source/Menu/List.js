/*
---
 
script: List.js
 
description: Menu widget to be used as a list of item
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Menu
- LSD/LSD.Trait.Item
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
  Includes: [
    LSD.Widget.Menu,
    LSD.Trait.List,
    LSD.Trait.Accessibility,
    LSD.Trait.Proxies
  ],
  
  options: {
    attributes: {
      type: 'list'
    },
    layout: {
      item: 'menu-list-item'
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
  Includes: [
    LSD.Widget.Paint,
    LSD.Trait.Item.Stateful
  ],
  
  options: {
    tag: 'option',
    layers: {
      fill:  ['stroke'],
      reflection:  [LSD.Layer.Fill.Reflection],
      background: [LSD.Layer.Fill.Background]
    }
  }
});

LSD.Widget.Menu.List.Button = LSD.Widget.Menu.List.Li = LSD.Widget.Menu.List.Command = LSD.Widget.Menu.List.Option;