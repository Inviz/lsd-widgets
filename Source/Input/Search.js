/*
---
 
script: Search.js
 
description: Search field with a dropdown
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Input
- LSD.Widget.Container
- LSD.Widget.Button
- LSD/LSD.Trait.Menu
- LSD/LSD.Trait.List
- LSD/LSD.Trait.Choice
- LSD/LSD.Trait.Value
- LSD/LSD.Trait.Observer
- LSD/LSD.Trait.Accessibility
- LSD/LSD.Trait.Proxies

provides: [LSD.Widget.Input.Search]
 
...
*/

LSD.Widget.Input.Search = new Class({
  Includes: [
    LSD.Widget.Input,
    LSD.Trait.Expectations,
    LSD.Trait.Proxies,
    LSD.Trait.Menu.Stateful,
    LSD.Trait.List,
    LSD.Trait.Choice,
    LSD.Trait.Value,
    LSD.Trait.Observer.Stateful
  ],
  
  States: {
    'detailed': ['enrich', 'clean'],
    'uniconed': ['uniconize', 'iconize']
  },
  
  options: {
    tag: 'input',
    layout: {
      item: 'input-option',
      children: {
        '>icon': {},
        '>button': {}
      }
    },
    events: {
      _search: {
        icon: {
          click: 'expand'
        },
        button: {
          click: 'clear'
        },
        self: {
          set: 'setIcon',
          focus: 'expand',
          attach: function() {
            if (this.hasItems()) {
              this.enrich();
            } else {
              this.clean();
            }
          }
        }
      }
    },
    menu: {
      position: 'bottom'
    }
  },
  
  setInputSize: function() {
    this.parent.apply(this, arguments);
    if (!this.resorted && this.icon.element.parentNode) {
      this.resorted = true;
      $(this.input).inject(this.icon, 'after')
    }
    if (this.button) this.button.refresh();
    this.input.setStyle('width', this.size.width - this.button.getLayoutWidth(this.button.size.width) - this.icon.getLayoutWidth() - 1)
  },
	
  processValue: function(item) {
    return item.value.title;
  },
  
  clear: function() {
    this.empty();
    this.focus();
  },
  
  applyValue: $lambda(true),
  
  setIcon: function(item) {
    if (item && item.value) item = item.value.icon;
    this.collapse();
    if (!item) {
      this.iconize();
      this.icon.element.setStyle('background-image', '');
    } else {
      this.uniconize();
      this.icon.element.setStyle('background', 'url(' + item + ') no-repeat ' + (this.icon.offset.outside.left + 4) + 'px ' + this.icon.offset.outside.left + 'px');
    }
  }
});

LSD.Widget.Input.Option = LSD.Widget.Input.Search.Option = new Class({
  Extends: LSD.Widget.Container,
    
  States: {
    chosen: ['choose', 'forget']
  },
  
  options: {
    tag: 'option',
    events: {
      element: {
        click: 'select',
        mousemove: 'chooseOnHover'
      }
    }
  },
  
  render: function() {
    this.parent.apply(this, arguments);
    var icon = this.value ? this.value.icon : false;
    if ((this.icon == icon) || !icon) return;
    this.icon = icon;
    this.element.setStyle('background-image', 'url(' + icon + ')');
    this.element.setStyle('background-repeat', 'no-repeat');
    this.element.setStyle('background-position', ((this.offset.outside.left || 0) + 4) + 'px  center');
    this.element.setStyle('padding-left', 15);
  },
  
  select: function() {
    this.listWidget.selectItem.delay(50, this.listWidget, [this]);
  },
  
  chooseOnHover: function() {
    this.listWidget.selectItem(this, true)
  }
});


LSD.Widget.Input.Icon = LSD.Widget.Input.Search.Icon = new Class({
  
  Includes: [
    LSD.Widget.Button
  ],
  
  options: {
    tag: 'icon'
  }
  
});

LSD.Widget.Input.Search.Button = LSD.Widget.Button;