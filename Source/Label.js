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
          collection: 'labels',
          states: {
            get: {
              invalid: 'invalid'
            }
          }
        }
      }
    },
    expects: {
      '[for]': function(widget, state) {
        widget[state ? 'addRelation' : 'removeRelation']('control', {
          expectation: function() {
            var id = this.attributes['for'];
            if (id) return {id: id, combinator: '&&', tag: '*'};
          }
        });
      }
    },
    pseudos: Array.object('form-associated', 'clickable', 'command'),
    states: Array.object('invalid'),
    chain: {
      focusControl: function() {
        if (this.control) return {
          target: this.control,
          action: this.control.pseudos.clickable ? 'submit' : 'focus'
        };
      }
    },
    events: {
      self: {
        click: 'focusControl'
      },
      element: {
        click: function(event) {
          if (event) event.preventDefault();
        }
      }
    }
  }
});