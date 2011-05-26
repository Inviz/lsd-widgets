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
        }
      }
    }
  },
  
  hidden: true
});