/*
---
 
script: Select.js
 
description: Basic selectbox
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD/LSD.Widget
- LSD.Widget.Button
- LSD/LSD.Trait.Menu
- LSD/LSD.Trait.List
- LSD/LSD.Trait.Choice
- LSD/LSD.Mixin.Focus

provides: [LSD.Widget.Select, LSD.Widget.Select.Button, LSD.Widget.Select.Option]
 
...
*/

LSD.Widget.define('Select', {
  Extends: LSD.Trait.Menu,
  
  Implements: [
    LSD.Trait.List,
    LSD.Trait.Choice
  ],
  
  options: {
    tag: 'select',
    events: {
      _select: {
        element: {
          click: 'expand'
        },
        self: {
          set: function(item) {
            this.setValue(item.getValue());
            this.write(item.getTitle())
            this.collapse();
          },
          collapse: 'forgetChosenItem'
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
    writable: true,
    layout: Array.fast('::button'),
    has: {
      many: {
        items: {
          layout: 'select-option',
          relay: {
            mouseover: function() {
              if (!this.chosen) this.listWidget.selectItem(this, true)
            },
            click: function(event) {
              if (!this.select()) this.listWidget.collapse();
              if (event) event.stop();
              this.forget();
            }
          }
        }
      },
      one: {
        menu: {
          proxy: function(widget) {
            if (!widget.pseudos.item) return;
            if (!this.getSelectedItem() || widget.pseudos.selected) this.selectItem(widget)
            return true;
          }
        },
        button: {
          selector: 'button',
          layout: 'select-button'
        }
      }
    }
  }
});

LSD.Widget.define('Select.Button', {
  Extends: LSD.Widget.Button
});

LSD.Widget.define('Select.Option', {
  options: {
    tag: 'option',
    pseudos: Array.fast('item'),
    states: Array.fast('chosen', 'selected')
  },
  
  getTitle: function() {
    return this.getValue();
  }
});