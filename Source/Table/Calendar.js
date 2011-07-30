/*
---
 
script: Calendar.js
 
description: A nice simple calendar table
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Table

provides: 
  - LSD.Widget.Table.Calendar
 
...
*/

LSD.Widget.Table.Calendar = new Class({
  Extends: LSD.Widget.Table,
  
  options: {
    date: null,
    format: {
      caption: "%B %Y"
      
    },
    classes: ['calendar'],
    events: {
      _calendar: {
        self: {
          'attach': function() {
            this.setDate(this.options.date);
          }
        },
        element: {
          'touchstart:relay(td:not(.empty))': 'touchDate',
          'touchend': 'untouchDate',
          'touchcancel': 'untouchDate',
          'click:relay(td:not(.empty))': 'selectDate'
        }
      }
    }
  },
  
  setRow: function(days) {
    var row = LSD.Widget.Table.prototype.setRow.apply(this, arguments);
    var number = days[0]
    if ((number <= this.day) && (number + 7 > this.day)) {
      row.className = 'selected';
    } else if (number > this.day) {
      row.className = 'future';
    } else {
      row.className = 'past';
    }
    return row;
  },
  
  selectDate: function(e) {
    var date = this.date ? this.date.clone() : new Date;
    var day = this.getDayFromCell(e.target);
    this.setDate(date.set('date', day));
  },
  
  touchDate: function(e) {
    e.target.className += " touched"
    this.touched = e.target;
  },
  
  untouchDate: function(e) {
    if (!this.touched) return;
    this.touched.className = this.touched.className.replace(/\s*touched\s*/, ' ');
    delete this.touched;
  },
  
  getDayFromCell: function(cell) {
    return parseInt(cell.innerHTML);
  },
  
  getCellByDay: function(day) {
    var index = day + this.firstDay.get('day') - 1;
    var row = this.rows[Math.floor(index / 7)];
    var weekday = index % 7;
    for (var i = 0, j = 0, node, nodes = row.childNodes; node = nodes[i++];)
      if (LSD.toLowerCase(node.tagName) == 'td')
        if (j++ == weekday) return node;
  },
  
  setCell: function(number) {
    var cell = LSD.Widget.Table.prototype.setCell.apply(this, arguments);
    if (cell == number) number = this.getDayFromCell(cell);
    if (number == ' ') {
      cell.className = 'empty';
    } else if (number == this.day) {
      cell.className = 'selected';
      this.selected = cell;
    } else if (number > this.day) {
      cell.className = 'future';
    } else {
      cell.className = 'past';
    }
    return cell;
  },
  
  setDay: function(date) {
    var day = date.getDate();
    this.firstDay = date.clone().set('date', 1);
    var monthSet = !this.month || this.firstDay.compare(this.month);
    console.log(123123123, !this.month || this.firstDay.compare(this.month))
    if (monthSet) this.setMonth(this.firstDay);
    if (monthSet || day != this.day) {
      this.day = day;
      var cell = this.getCellByDay(this.day);
      if (this.selected) this.setCell(this.selected);
      console.log(this.selected, cell)
      this.selected = cell;
      this.setCell(this.selected);
      this.fireEvent('setDay', [day, cell]);
    }
  },
  
  setDate: function(date) {
    if (!date) date = new Date;
    console.log(!this.date || this.date.compare(date), [date, this.date])
    if (this.date && !this.date.compare(date)) return false;
    this.date = date;
    this.fireEvent('set', date);
    this.setDay(date);
  },
  
  setMonth: function(date) {
    delete this.selected;
    this.month = date;
    var table = {
      caption: date.format(this.options.format.caption),
      data: [[]],
      header: Locale.get('Date.days_abbr')
    };
    var data = table.data;
    if (this.options.footer !== false) table.footer = table.header;
    var day = date.get('day');
    var last = date.getLastDayOfMonth();
    for (var i = 0; i < day; i++) data[0].push(' ');
    for (var i = 1; i <= last; i++) {
      var index = Math.floor((i + day - 1) / 7);
      var row = data[index];
      if (!row) row = data[index] = [];
      row.push(i);
    }
    if (row.length < 7) for (var i = 0, j = data.length - 1, k = (7 - ((last + day) % 7)); i < k; i++) data[j].push(' ');
    if (this.built) this.setTable(table);
    else Object.extend(this.options, table);
  }
});