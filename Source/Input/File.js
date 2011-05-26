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
    submittable: true,
    focusable: false,
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
    pseudos: Array.fast('uploading')
  },
  
  canElementHoldValue: function() {
    return false
  },
  
  getRawValue: function() {
    if (this.attributes.blobs) return JSON.decode(this.attributes.blobs)
  }
});