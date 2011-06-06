/*
---
 
script: Toolbar.Menu.js
 
description: Dropdown menu in a toolbar
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Menu.Toolbar

provides:
  - LSD.Widget.Menu.Toolbar.Menu
  - LSD.Widget.Menu.Toolbar.Menu.Label
 
...
*/

LSD.Widget.Menu.Toolbar.Menu = new Class({
  Extends: LSD.Widget.Menu,
  
  options: {
    has: {
      many: {
        items: {
          source: 'menu-context-item'
        }
      },
      one: {
        menu: {
          type: 'menu'
        }
      }
    },
    events: {
      self: {
        click: 'expand',
        expand: 'unselectItem'
      }
    },
    menu: {
      position: 'bottom'
    }
  },
  
  render: function() {
    this.parent.apply(this, arguments);
    if (this.attributes.label && this.attributes.label != this.label) {
      this.label = this.attributes.label;
      this.write(this.label)
    }
  },
  
  processValue: function(item) {
    return item.value;
  }
  
});

LSD.Widget.Menu.Toolbar.Menu.Label = new Class({
  Extends: LSD.Widget.Button
});