/*
---
 
script: Date.js
 
description: Date picker
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Input

provides: [LSD.Widget.Input.Date]
 
...
*/

LSD.Widget.Input.Date = new Class({
  Extends: LSD.Trait.Date,
  
  options: {
    attributes: {
      type: 'date'
    },
    layout: {
      '::dialog(input-date)': {
        'if &:expanded': {
          '::decrementor': 'Previous month',
          '::incrementor': 'Next month',
          '::table': true,
          '::closer': 'Close dialog'
        }
      }
    }
  },
  
  initializers: {
    date: function() {
      this.setDate(this.getDate());
    }
  },
  
  setDate: function(date) {
    this.parent.apply(this, arguments);
    if (date) this.element.set('value', this.formatDate(date));
    if (this.dialog) this.dialog.setDate(date);
  }
});