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
      instantStart: true,
      path: '/flashes/Swiff.Uploader.swf',
      url: '/blobs.json',
      timeLimit: 36000,
      queued: false,
      fieldName: 'blob',
      method: 'post',
      multiple: false
    },
    pseudos: Array.fast('uploader', 'focusable', 'form-associated'),
    layout: Array.fast('::list'),
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