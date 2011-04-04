/*
---
 
script: Window.js
 
description: Window for fun and profit
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD/LSD.Widget
 
provides: [LSD.Widget.Window]
 
...
*/

LSD.Widget.Window = new Class({
  Extemds: LSD.Widget,
  
  options: {
    tag: 'window',
    states: {
      closed: {
        enabler: 'close',
        disabler: 'open'
      },
      collapsed: {
        enabler: 'collapse',
        disabler: 'expand'
      },
      minified: {
        enabler: 'minify',
        disabler: 'enlarge',
        toggler: 'mutate'
      }
    }
  }
  
});