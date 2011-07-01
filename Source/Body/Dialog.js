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
    pseudos: Array.fast('fieldset', 'submittable', 'command'),
    
    clone: true,
    interpolate: function(string) {
      this.options.interpolate = LSD.Interpolation.from(this.attributes, this, this.dataset)
    },
    events: {
      _dialog: {
        element: {
          'click:relay(.cancel)': 'cancel'
        },
        self: {
          submit: function() {
            this.hide();
          },
          cancel: 'hide'
        }
      }
    },
    has: {
      one: {
        form: {
          selector: 'form',
          as: 'invoker'
        }
      }
    }
  },
  
  hidden: true
});