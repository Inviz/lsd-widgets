/*
---
 
script: Section.js
 
description: SVG-Based content element (like <section> in html5)
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
- LSD/LSD.Widget.Paint

provides: 
  - LSD.Widget.Section
  - LSD.Widget.Header
  - LSD.Widget.Footer
  - LSD.Widget.Nav
 
...
*/

LSD.Widget.Section = new Class({
  Extends: LSD.Widget.Paint,
  
  options: {
    tag: 'section',
    element: {
      tag: 'section'
    }
  }
});

LSD.Widget.Header = new Class({
  Extends: LSD.Widget.Section,
  
  options: {
    tag: 'header',
    element: {
      tag: 'header'
    }
  }
});

LSD.Widget.Footer = new Class({
  Extends: LSD.Widget.Section,

  options: {
    tag: 'footer',
    element: {
      tag: 'footer'
    }
  }
});

LSD.Widget.Nav = new Class({
  Extends: LSD.Widget.Section,

  options: {
    tag: 'nav',
    element: {
      tag: 'nav'
    }
  }
});