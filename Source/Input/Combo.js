/*
---
 
script: Combo.js
 
description: A selectbox with free-form input field. Or an input with autocompletion, if you please.
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Select
- LSD.Widget.Input
- LSD/LSD.Trait.Input

provides: [LSD.Widget.Input.Combo]
 
...
*/

LSD.Widget.Input.Combo = new Class({
  Extends: LSD.Widget.Select,
  
  Implements: LSD.Trait.Input,
  
  options: {
    tag: 'input'
  }
});