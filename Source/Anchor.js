/*
---
 
script: Anchor.js
 
description: A link that does requests and actions
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget
  - LSD/LSD.Module.Accessories
  - LSD/LSD.Module.Layout
  - LSD/LSD.Module.Behavior
  - LSD/LSD.Module.Expectations
  - LSD/LSD.Mixin.Dialog
  - LSD/LSD.Mixin.Request

provides: 
  - LSD.Widget.Anchor
 
...
*/

LSD.Widget.Anchor = new Class({
  Implements: [
    LSD.Module.Accessories,
    LSD.Module.Behavior,
    LSD.Module.Layout,
    LSD.Module.Expectations,
    LSD.Mixin.Request,
    LSD.Mixin.Dialog
  ],
  
  options: {
    request: {
      type: 'form'
    },
    render: false,
    events: {
      self: {
        click: function(e) {
          e.preventDefault();
        }
      }
    }
  },

  initialize: LSD.Module.Options.initialize

});

LSD.Widget.Anchor.prototype.addStates('disabled', 'built', 'attached');