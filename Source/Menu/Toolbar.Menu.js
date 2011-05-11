/*
---
 
script: Toolbar.Menu.js
 
description: Dropdown menu in a toolbar
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Menu.Toolbar
  - LSD/LSD.Trait.Menu
  - LSD/LSD.Trait.List
  - LSD/LSD.Trait.Accessibility
  - LSD/LSD.Trait.Proxies

provides:
  - LSD.Widget.Menu.Toolbar.Menu
  - LSD.Widget.Menu.Toolbar.Menu.Label
 
...
*/

LSD.Widget.define('Menu.Toolbar.Menu', {
  Extends: LSD.Widget.Button,
  
  Implements: [
    LSD.Trait.Menu,
    LSD.Trait.List
  ],
  
  options: {
    has: {
      many: {
        items: {
          layout: 'menu-context-item'
        }
      }
    },
    events: {
      element: {
        //mousedown: 'retain'
      },
      _items: {
        element: {
          'mousemove:on(command)': function() {
            if (!this.chosen) this.listWidget.selectItem(this)
          },
          'click:on(command)': function() {
            if (!this.selected) this.listWidget.selectItem(this)
            this.listWidget.collapse();
          }
        }
      },
      self: {
        click: 'expand',
        expand: 'unselectItem'
      }
    },
    menu: {
      position: 'bottom'
    }
  },
  
  click: function() {
    this.select();
    return this.parent.apply(this, arguments);
  },
  
  render: function() {
    this.parent.apply(this, arguments);
    if (this.attributes.label && this.attributes.label != this.label) {
      this.label = this.attributes.label;
      this.setContent(this.label)
    }
  },
  
  processValue: function(item) {
    return item.value;
  }
  
});

LSD.Widget.Menu.Toolbar.Menu.Label = new Class({
  Extends: LSD.Widget.Button
});