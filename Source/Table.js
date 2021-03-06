/*
---
 
script: Table.js
 
description: All-purpose table class
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Widget

provides: 
  - LSD.Widget.Table
 
...
*/

LSD.Widget.Table = new Class({
  options: {
    header: null,
    footer: null,
    caption: null,
    events: {
      _table: {
        self: {
          build: function() {
            var el = this.element;
            this.head = el.tHead;
            this.body = (el.tBodies ? el.tBodies[0] : el.tBody);
            this.foot = el.tFoot;
            this.setTable(this.options);
          }
        }
      }
    },
    tag: 'table',
    pseudos: Array.object('list')
  },
  
  setTable: function(table) {
    if (table != this.options) this.setOptions(table);
    if (table.caption) this.setCaption(table.caption);
    if (table.header) this.setHeader(table.header);
    if (table.data) this.setData(table.data);
    if (table.footer) this.setFooter(table.footer);
  },
  
  setData: function(data) {
    if (!this.body) this.body = new Element('tbody').inject(this.element);
    else this.body.empty()
    this.rows = [];
    for (var i = 0, row; row = data[i++];) {
      row = this.setRow(row)
      this.rows.push(row);
      this.body.appendChild(row);
    }
  },
  
  setRow: function(values) {
    var element = document.createElement('tr');
    for (var i = 0, value; value = values[i++];) element.appendChild(this.setCell(value));
    return element;
  },
  
  setCell: function(value) {
    return this.setCellContent(document.createElement('td'), value);
  },
  
  setCellContent: function(element, value) {
    element.innerHTML = value;
    return element;
  },
  
  setHeaderCell: function(value) {
    return this.setHeaderCellContent(document.createElement('th'), value);
  },
  
  setHeaderCellContent: function(element, value) {
    element.innerHTML = value;
    return element;
  },
  
  setCaption: function(value) {
    if (!this.caption) this.caption = new Element('caption').inject(this.element);
    return this.setCaptionContent(this.caption, value);
  },
  
  setCaptionContent: function(element, value) {
    element.innerHTML = value;
    return element;
  },
  
  setHeader: function(header) {
    if (!this.head) this.head = new Element('thead').inject(this.element);
    else this.head.empty()
    header.each(function(name) {
      this.head.appendChild(this.setHeaderCell(name))
    }, this);
    return this.head;
  },
  
  setFooter: function(footer) {
    if (!this.foot) this.foot = new Element('tfoot').inject(this.element);
    else this.foot.empty()
    footer.each(function(name) {
      this.foot.appendChild(this.setHeaderCell(name))
    }, this);
    return this.foot;
  }
});