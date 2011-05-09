/*
---
 
script: Body.js
 
description: Lightweight document body wrapper
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:  
  - LSD/LSD.Widget
  - LSD/LSD.Document
  - LSD/LSD.Document.Resizable
  - LSD/LSD.Document.Commands

provides:
  - LSD.Widget.Body

...
*/

LSD.Widget.define('Body', {
  Extends: LSD.Document, 
  
  Implements: [LSD.Document.Resizable, LSD.Document.Commands],
  
  getSelector: false
});