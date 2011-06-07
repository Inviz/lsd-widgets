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
          selector: ':form-associated',
          expectation: function() {
            var id = this.attributes['for'];
            if (id) return {id: id, combinator: ' ', tag: '*'};
          },
          target: function() {
            return this.attributes['for'] ? 'root' : null;
          },
          collection: 'labels',
          states: {
            get: {
              invalid: 'invalid'
            }
          }
        }
      }
    },
    pseudos: Array.fast('form-associated', 'clickable', 'command'),
    states: Array.fast('invalid'),
    chain: {
      focusControl: function() {
        if (this.control) return {
          target: this.control,
          action: 'focus'
        };
      }
    },
    events: {
      self: {
        click: 'focusControl'
      }
    }
  }
});