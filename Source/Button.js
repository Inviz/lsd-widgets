/*
---
 
script: Button.js
 
description: A button widget. You click it, it fires the event
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD/LSD.Widget.Paint
- LSD/LSD.Mixin.Touchable

provides: [LSD.Widget.Button]
 
...
*/

LSD.Widget.Button = new Class({

  Extends: LSD.Widget.Paint,

  options: {
    tag: 'button',
    layers: {
      shadow:  ['shadow'],
      stroke: ['stroke'],
      background:  [LSD.Layer.Fill.Background.Offset],
      reflection:  [LSD.Layer.Fill.Reflection.Offset],
      glyphShadow: ['glyph-shadow'],
      glyph: ['glyph']
    },
    
    label: ''
  },
  
  initialize: function() {
    this.parent.apply(this, arguments);
    this.addPseudo('touchable');
  },
  
  setContent: function(content) {
    this.setState('text');
    return this.parent.apply(this, arguments);
  }

});
