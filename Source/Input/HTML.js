/*
---
 
script: HTML.js
 
description: Wysiwyg for people
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Input
  - LSD/LSD.Mixin.ContentEditable

provides: 
  - LSD.Widget.Input.HTML
  - LSD.Widget.Input.Html
  
...
*/


LSD.Widget.Input.Html = LSD.Widget.Input.HTML = new Class({
  options: {
    tag: 'input',
    pseudos: Array.fast('form-associated', 'value'),
    attributes: {
      contenteditable: 'editor',
      tabindex: 0
    },
    states: Array.fast('editing'),
    events: {
      self: {
        focus: 'edit',
        edit: function() {
          this.openEditor();
        },
        finish: 'closeEditor'
      }
    }
  },
  
  getValue: function() {
    if (this.editing && this.editor) return this.editor.getData();
    return this.element.get('html');
  },
  
  writeValue: function(value) {
    if (this.editing && this.editor) return this.editor.setData(value);
    return this.element.set('html', value);
  }
  
})