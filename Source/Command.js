/*
---
 
script: Command.js
 
description: Command node creates accessible command
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Node
  - LSD/LSD.Widget
  - LSD/LSD.Module.Command
  - LSD/LSD.Module.DOM
  
provides:
  - LSD.Widget.Command
  - LSD.Widget.Command.Command
  - LSD.Widget.Command.Checkbox
  - LSD.Widget.Command.Radio
 
...
*/

LSD.Widget.Command = new Class({
  Includes: [
    LSD.Node,
    LSD.Module.DOM,
    LSD.Module.Command
  ]
});

(function(Command) {
  Command.Command = Command.Checkbox = Command.Radio = Command;
})(LSD.Widget.Command);