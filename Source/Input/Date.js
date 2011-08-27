/*
---
 
script: Date.js
 
description: Date picker
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Input
  - LSD.Widget.Table.Calendar

provides: [LSD.Widget.Input.Date]
 
...
*/

LSD.Widget.Input.Date = new Class({
  Extends: LSD.Widget.Input,
  
  options: {
    attributes: {
      type: 'date'
    },
    pseudos: Array.object('date'),  
    layout: {
      'button.expand': 'Expand',
      'if &:focused': {
        '::dialog:of-kind(input-date)': {
          'button.previous': 'Previous month',
          'button.next': 'Next month',
          'table[type=calendar]': true
        }
      }
    },
    relations: {
      expander: {
        selector: '.expand',
        events: {
          click: 'focus'
        }
      },
      decrementor: {
        selector: '.previous',
        events: {
          click: 'decrement'
        }
      },
      incrementor: {
        selector: '.next',
        events: {
          click: 'increment'
        }
      },
      calendar: {
        selector: 'table',
        events: {
          click: 'increment',
          set: 'setDate'
        }
      }
    },
    events: {
      _date: {
        self: {
          build: function() {
            this.setDate(this.getDate());
          },
          setDate: function(date, source) {
            if (date && !source) this.setValue(this.formatDate(date));
            if (this.calendar) this.calendar.setDate(date);
          },
          change: 'setDate' 
        },
        element: {
          mousedown: 'focus'
        }
      }
    }
  }
});