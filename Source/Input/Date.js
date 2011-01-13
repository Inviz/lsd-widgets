/*
---
 
script: Date.js
 
description: Date picker
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD.Widget.Input

provides: [LSD.Widget.Input.Date]
 
...
*/

LSD.Widget.Input.Date = new Class({
  Includes: [
    LSD.Trait.Input
  ],
  
  options: {
    attributes: {
      type: 'date'
    }
  }
});