/*
---
 
script: Select.js
 
description: Basic selectbox
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD/LSD.Widget
- LSD.Widget.Button
- LSD/LSD.Mixin.List
- LSD/LSD.Mixin.Choice
- LSD/LSD.Mixin.Focusable

provides: [LSD.Widget.Select, LSD.Widget.Select.Button, LSD.Widget.Select.Option]
 
...
*/

LSD.Widget.Select = new Class({
  options: {
    tag: 'select',
    pseudos: Array.fast('list', 'choice', 'focusable', 'form-associated'),
    events: {
      self: {
        set: function(item) {
          this.write(item.getTitle());
          this.collapse();
        }
      }
    },
    layout: Array.fast('::button'),
    has: {
      many: {
        items: {
          source: 'select-option',
          mutation: '> option, > li',
          states: {
            hover: 'chosen'
          },
          pseudos: Array.fast('clickable', 'hoverable', 'command')
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
    pseudos: Array.fast('item')
  },
  
  getTitle: function() {
    return this.element.get('text').trim();
  },
  
  getValue: function() {
    return this.attributes.value || this.element.get('text').trim();
  }
});
