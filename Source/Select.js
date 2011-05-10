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

LSD.Widget.Select = new Class({
  
  Includes: [
    LSD.Widget,
    LSD.Trait.Menu,
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
          unset: function(item) {
            this.unsetValue(item.getValue());
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
    layout: {
      children: Array.fast('::button')
    },
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

LSD.Widget.Select.Button = new Class({
  Extends: LSD.Widget.Button
});

LSD.Widget.Select.Option = new Class({
  Includes: [
    LSD.Widget,
    LSD.Trait.Value
  ],
  
  options: {
    tag: 'option',
    pseudos: Array.fast('item')
  },
  
  getTitle: function() {
    return this.getValue();
  }
});

LSD.Widget.Select.Option.prototype.addStates('chosen', 'selected');