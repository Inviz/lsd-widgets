/*
---
 
script: File.js
 
description: Multi file uploader
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Widget.Input
  - LSD/LSD.Mixin.Uploader
  
provides:
  - LSD.Widget.Input.File
  
...
*/


LSD.Widget.Input.File = new Class({
  options: {
    tag: 'input',
    attributes: {
      type: 'file'
    },
    uploader: {
      path: '/flashes/Swiff.Uploader.swf',
      url: '/blobs.json',
      fieldName: 'blob'
    },
    pseudos: Array.object('uploader', 'focusable', 'form-associated', 'value'),
    layout: Array.object('::list'),
    proxies: {
      files: {
        condition: function(widget) {
          return (widget.tagName == 'file');
        },
        container: function() {
          return this.list;
        }
      }
    },
    has: {
      one: {
        list: {
          source: 'filelist',
          selector: 'filelist'
        }
      }
    }
  },
  
  canElementHoldValue: function() {
    return false
  },
  
  getRawValue: function() {
    if (this.attributes.blobs) return JSON.decode(this.attributes.blobs)
  }
});