/*
---
 
script: Context.js
 
description: Menu widget to be used as a drop down
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Menu
  - LSD/LSD.Trait.Item
  - LSD/LSD.Trait.Animation

provides:
  - LSD.Widget.Menu.Context
  - LSD.Widget.Menu.Context.Button
  - LSD.Widget.Menu.Context.Command
  - LSD.Widget.Menu.Context.Command.Command
  - LSD.Widget.Menu.Context.Command.Checkbox
  - LSD.Widget.Menu.Context.Command.Radio
 
...
*/
LSD.Widget.Menu.Context = new Class({
  Includes: [
    LSD.Widget.Menu,
    LSD.Trait.Animation
  ],

  options: {    
    layers: {
      shadow:  ['shadow'],
      stroke:  ['stroke'],
      background:  [LSD.Layer.Fill.Background],
      reflection:  [LSD.Layer.Fill.Reflection],
    },

    attributes: {
      type: 'context'
    },
    
    animation: {
      duration: 200
    }
  }
});

LSD.Widget.Menu.Context.Command = new Class({
  Includes: [
    LSD.Widget.Menu.Command,
    LSD.Trait.Item.Stateful
  ],
  
  options: {
    layers: {
      fill:  ['stroke'],
      reflection:  [LSD.Layer.Fill.Reflection],
      background: [LSD.Layer.Fill.Background],
      glyph: ['glyph']
    }
  }
});

(function(Context) {
  Context.Button = Context.Option = Context.Radio = Context.Checkbox = Context.Command.Command = Context.Command;
})(LSD.Widget.Menu.Context);

    

