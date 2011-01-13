/*
---
 
script: Application.js
 
description: A preset for window application with header and titlebar
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Window
 
provides: 
  - LSD.Widget.Window.Application
 
...
*/

LSD.Widget.Window.Application = new Class({
  Extends: LSD.Widget.Window,
  
  options: {
    actions: {
      draggable: {
        watches: "#title"
      },
      resizable: {
        uses: ["#handle", "#content"]
      }
    },
    events: {
      expected: {
        '#buttons': {
          '#close': {
            click: 'close'
          },
          '#minimize': {
            click: 'collapse'
          },
          '#maximizer': {
            click: 'expand'
          }
        },
        header: {
          '#toggler': {
            click: 'mutate'
          }
        }
      },
      self: {
        close: 'hide'
      }
    }
  }
})