/*
---
 
script: Dialog.js
 
description: A multipurpose yes/no dialog
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Body.Page

provides:
  - LSD.Widget.Body.Dialog

...
*/

LSD.Widget.Body.Dialog = new Class({
  Extends: LSD.Widget.Body.Page,
  
  options: {
    element: {
      tag: 'section'
    },
    classes: Array.fast('dialog'),
    pseudos: Array.fast('form', 'fieldset'),
    events: {
      _dialog: {
        element: {
          'click:relay(.cancel)': 'cancel'
        },
        self: {
          submit: function() {
            this.hide();
            var caller = this.getCaller();
            if (caller && caller.callChain) caller.callChain(this.getData());
          },
          cancel: function() {
            this.hide();
            var caller = this.getCaller();
            if (caller && caller.clearChain) caller.clearChain(this.getData());
          }
        }
      }
    },
    has: {
      one: {
        form: {
          selector: 'form',
          chain: {
            submission: function() {
              return {action: 'send', target: this.root}
            }
          }
        }
      }
    }
  },

  getCaller: function() {
    return this.options.caller && this.options.caller.call(this);
  },
  
  getDataWidget: function() {
    return this.form || this;
  },
  
  hidden: true
});