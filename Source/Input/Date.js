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
  Extends: LSD.Widget.Input,
  
  Implements: LSD.Trait.Date,
  
  options: {
    attributes: {
      type: 'date'
    },
    events: {
      element: {
        focus: 'expand'
      },
      self: {
        focus: 'expand',
        expand: function() {
          this.callChain();
        }
      }
    },
    chain: {
      prompt: function() {
        return {action: 'dialog', target: 'datepicker'}
      },
      update: function() {
        return { 
          callback: function(date) {
            this.setDate(date);
            this.collapse();
          }
        }
      }
    },
    states: Array.fast('expanded')
  },
  
  initialize: function() {
    this.parent.apply(this, arguments);
    this.setDate(this.getDate());
  },
  
  setDate: function(date) {
    this.parent.apply(this, arguments);
    if (date) this.element.set('value', this.formatDate(date));
    if (this.dialog) this.dialog.setDate(date);
  }
});