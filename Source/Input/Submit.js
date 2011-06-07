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
  - LSD.Widget.Button.Submit
 
...
*/

LSD.Widget.Button.Submit = new Class({
  Implements: LSD.Widget.Button,
  
  options: {
    events: {
      _submission: {
        self: {
          setDocument: function() {
            var tag = this.element.get('tag');
            if (!tag || tag == 'input' || tag == 'button') return;
            this.shim = this.allocate('submit').inject(this.element);
            this.element.addEvent('destroy', this.shim.destroy.bind(this.shim));
          }
        }
      }
    },
    chain: {
      submission: function() {
        var target = this.form || Slick.find(this, '! :submittable');
        if (target) return {action: 'submit', target: target};
      }
    },
    pseudos: Array.fast('form-associated', 'command')
  }
});

LSD.Widget.Input.Submit = new Class({
  Implements: LSD.Widget.Button.Submit, 
  
  options: {
    tag: 'input'
  }
})