/*
---
 
script: Dialog.js
 
description: A multipurpose yes/no dialog
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Body.Page
  - LSD/LSD.Mixin.Fieldset
  - LSD/LSD.Mixin.Submittable
  - LSD/LSD.Mixin.Command
  - LSD/LSD.Mixin.Invokable

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
    classes: Array.object('dialog'),
    pseudos: Array.object('fieldset', 'submittable', 'invokable', 'command', 'focusable'),
    clone: true,
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
        },
        setRole: function() {
          var kind = this.attributes.kind;
          if (!kind) return;
          var element = Slick.find(document.body, 'dialog#' + kind);
          if (element) return {origin: element};
        }
      }
    },
    has: {
      one: {
        form: {
          selector: 'form',
          as: 'invoker',
          pseudos: Array.object('invokable')
        }
      }
    }
  },
  
  getParentElement: function() {
    return document.body;
  },
  
  hidden: true
});