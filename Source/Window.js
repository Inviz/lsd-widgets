/*
---
 
script: Window.js
 
description: Window for fun and profit
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD/LSD.Widget.Paint
- LSD/LSD.Trait.Animation
 
provides: [LSD.Widget.Window]
 
...
*/

LSD.Widget.Window = new Class({
  
  Includes: [
    LSD.Widget.Paint,
    LSD.Trait.Animation
  ],
  
  States: {
    'closed': ['close', 'open'],
    'collapsed': ['collapse', 'expand'],
    'minified': ['minify', 'enlarge', 'mutate']
  },
  
  options: {
    tag: 'window'
  }
  
});