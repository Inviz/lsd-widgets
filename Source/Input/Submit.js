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
    pseudos: Array.object('form-associated', 'command', 'submitter')
  }
});

LSD.Widget.Input.Submit = new Class({
  Implements: LSD.Widget.Button.Submit, 
  
  options: {
    tag: 'input'
  }
})