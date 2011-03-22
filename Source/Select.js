/*
---
 
script: Select.js
 
description: Basic selectbox
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD/LSD.Widget.Paint
- LSD.Widget.Button
- LSD.Widget.Container
- LSD/LSD.Trait.Menu
- LSD/LSD.Trait.List
- LSD/LSD.Trait.Item
- LSD/LSD.Trait.Choice
- LSD/LSD.Trait.Value
- LSD/LSD.Mixin.Focus
- LSD/LSD.Trait.Accessibility
- LSD/LSD.Trait.Proxies

provides: [LSD.Widget.Select, LSD.Widget.Select.Button, LSD.Widget.Select.Option]
 
...
*/

LSD.Widget.Select = new Class({
  
  Includes: [
    LSD.Widget.Paint,
    LSD.Trait.Menu.Stateful,
    LSD.Trait.List,
    LSD.Trait.Choice,
    LSD.Trait.Value,
    LSD.Trait.Accessibility,
    LSD.Trait.Proxies
  ],
  
  options: {
    tag: 'select',
    layout: {
      item: '^option',
      children: {
        '^button': {}
      }
    },
    events: {
      element: {
        click: 'expand'
      },
      self: {
        set: function(item) {
          this.setValue(item.getValue());
          this.collapse();
        },
        collapse: 'forgetChosenItem'
      },
      _items: {
        element: {
          'mouseover:on(option)': function() {
            if (!this.chosen) this.listWidget.selectItem(this, true)
          },
          'click:on(option)': function(e) {
            if (!this.selected) {
              this.listWidget.selectItem(this);
              e.stop()
            } else this.listWidget.collapse();
            this.forget()
          }
        }
      }
    },
    shortcuts: {
      'ok': 'selectChosenItem'
    },
    menu: {
      position: 'focus',
      width: 'adapt'
    },
    writable: true
  }
});

LSD.Widget.Select.Button = new Class({
  Extends: LSD.Widget.Button
});

LSD.Widget.Select.Option = new Class({
  Includes: [
    LSD.Widget.Paint,
    LSD.Trait.Value,
    LSD.Trait.Item.Stateful
  ],
  
  States: {
    chosen: ['choose', 'forget']
  },
  
  options: {
    tag: 'option'
  },
  
  setContent: function() {
    return (this.value = this.parent.apply(this, arguments));
  }
});