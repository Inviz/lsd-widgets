/*
---
 
script: Body.js
 
description: Lightweight document body wrapper
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires: 
  - LSD/LSD.Document.Resizable
  - LSD/LSD.Widget
  - LSD/LSD.Module.Expectations
  
provides:
  - LSD.Widget.Body

...
*/

LSD.Widget.Body = new Class({
  Includes: [LSD.Document.Resizable, LSD.Module.Expectations]
});