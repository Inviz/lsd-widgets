/*
---
 
script: Body.js
 
description: Lightweight document body wrapper
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:  
  - LSD/LSD.Widget
  - LSD/LSD.Mixin.Root
  
provides:
  - LSD.Widget.Body

...
*/

LSD.Widget.Body = new Class({
  options: {
    tag: 'body',
    pseudos: Array.object('root')
  }
});