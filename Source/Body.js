/*
---
 
script: Body.js
 
description: Lightweight document body wrapper
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:  
  - LSD/LSD.Widget
  
provides:
  - LSD.Widget.Body

...
*/

LSD.Widget.Body = new Class({
  options: {
    tag: 'body',
    root: true,
    events: {
      self: {
        nodeInserted: function(node) {
          node.root = this;
          node.fireEvent('setRoot', this);
        },
        nodeRemoved: function(node) {
          if (node.root == this) {
            node.fireEvent('unsetRoot', this);
            delete node.root;
          }
        }
      }
    }
  }
});