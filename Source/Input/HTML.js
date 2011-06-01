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
    tag: 'htmlarea',
    pseudos: Array.fast('focusable', 'form-associated'),
    attributes: {
      contenteditable: 'editor'
    },
    states: {
      editing: {
        enabler: 'edit',
        disable: 'finish'
      }
    },
    events: {
      element: {
        click: 'edit'
      },
      self: {
        focus: 'edit'
      }
    }
  },
  
  edit: function() {
    this.useEditor(function(editor) {
      console.log('editor ready', editor)
    })
  },
  
  finish: function() {
    
  },
  
  getValue: function() {
    if (this.editor) this.editor.updateElement();
    return this.element.get('value')
  }
  
})