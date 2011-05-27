/*
---
 
script: Label.js
 
description: A label for a form field
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget

provides: 
  - LSD.Widget.Label
 
...
*/

LSD.Widget.Label = new Class({
  options: {
    tag: 'label',
    has: {
      one: {
        control: {
          expectation: function() {
            var id = this.attributes['for'];
            if (id) return {id: id, combinator: ' ', tag: '*'};
          },
          target: 'root',
          collection: 'labels',
          states: {
            get: {
              invalid: 'invalid'
            }
          }
        }
      }
    },
    pseudos: Array.fast('form-associated'),
    states: Array.fast('invalid'),
    events: {
      enabled: {
        element: {
          'click': 'click'
        }
      }
    }
  },
  
  click: function(event){
    if (event && event.preventDefault) event.preventDefault();
    if (!this.disabled) {
      this.focusControl();
      if (this.control && this.control.click) this.control.click();
      return this.parent.apply(this, arguments);
    }
  },
  
  focusControl: function(event) {
    if (this.control && this.control.focus) {
      this.control.focus();
      if (event) event.preventDefault();
    }
  }
});