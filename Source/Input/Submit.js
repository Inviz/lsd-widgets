/*
---
 
script: Submit.js
 
description: A button that submits form
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Input
  - LSD.Widget.Button

provides: 
  - LSD.Widget.Input.Submit
 
...
*/

LSD.Widget.Input.Submit = new Class({
  Extends: LSD.Widget.Button,
  
  options: {
    events: {
      _submission: {
        click: 'submit',
        dominject: function() {
          var tag = this.element.get('tag');
          if (!tag || tag == 'input' || tag == 'button') return;
          this.shim = this.allocate('submit').inject(this.element);
          this.element.addEvent('destroy', this.shim.destroy.bind(this.shim));
        }
      }
    },
    chain: {
      submission: function() {
        var target = this.form || Slick.find(this, '! :submittable') || (this.document && this.document.submit && this.document);
        if (target) return {action: 'send', target: target};
      }
    },
    pseudos: Array.fast('form-associated')
  }
});
