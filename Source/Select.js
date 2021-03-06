/*
---
 
script: Select.js
 
description: Basic selectbox
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD/LSD.Widget
- LSD.Widget.Button
- LSD.Widget.Menu.Context
- LSD/LSD.Mixin.List
- LSD/LSD.Mixin.Choice
- LSD/LSD.Mixin.Touchable
- LSD/LSD.Mixin.Focusable

provides: [LSD.Widget.Select, LSD.Widget.Select.Button, LSD.Widget.Select.Option]
 
...
*/

LSD.Widget.Select = new Class({
  options: {
    tag: 'select',
    pseudos: Array.object('list', 'choice', 'focusable', 'value', 'form-associated'),
    events: {
      self: {
        set: function(item) {
          this.write(item.getTitle());
          this.collapse();
        }
      }
    },
    layout: Array.object('::button'),
    has: {
      many: {
        items: {
          source: 'select-option',
          mutation: '> option, > li',
          states: {
            hover: 'chosen'
          },
          pseudos: Array.object('clickable', 'hoverable', 'command')
        }
      },
      one: {
        menu: {
          proxy: function(widget) {
            if (!widget.pseudos.item) return;
            // if (!this.selectedItems[0] || widget.pseudos.selected) widget.select()
            return true;
          }
        },
        button: {
          selector: 'button',
          source: 'select-button'
        }
      }
    }
  }
});

LSD.Widget.Select.Button = LSD.Widget.Button;

LSD.Widget.Select.Option = new Class({
  options: {
    tag: 'option',
    pseudos: Array.object('item', 'textual')
  },
  
  getTitle: function() {
    return this.element.get('text').trim();
  },
  
  getValue: function() {
    return this.attributes.value || this.element.get('text').trim();
  }
});
