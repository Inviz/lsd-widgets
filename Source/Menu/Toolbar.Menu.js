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

provides:
  - LSD.Widget.Menu.Toolbar.Menu
  - LSD.Widget.Menu.Toolbar.Menu.Label
 
...
*/
LSD.Widget.Menu.Toolbar.Menu = new Class({
  Includes: [
    LSD.Widget.Button,
    LSD.Trait.Menu,
    LSD.Trait.List,
    LSD.Trait.Accessibility
  ],
  
  options: {
    layout: {
      item: 'menu-context-item'
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

LSD.Widget.Menu.Toolbar.Menu.Command = LSD.Widget.Menu.Context.Command;