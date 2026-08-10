# Interactive Accordion with Smooth Animation

## Overview
This submission provides a clean, modern **Interactive Accordion Component** featuring smooth content expansion/collapse states, rotating chevron indicators, and custom easing transitions. It is designed to handle FAQs or side-navigation categories cleanly while fitting EaseMotion's animation-first design philosophy.

## Usage
Add the following HTML structure to your project alongside the styling sheet:

```html
<div class="accordion-container">
  <details class="accordion-item">
    <summary class="accordion-header">
      <span>Your Question Here</span>
      <span class="accordion-icon">▼</span>
    </summary>
    <div class="accordion-body">
      <p>Your answer or hidden content text goes here.</p>
    </div>
  </details>
</div>
```
## Why it fits EaseMotion CSS
Animation-First: Brings fluid motion to static layout toggles via smooth rotation and entrance fades.
Human-Readable: Relies on native semantic HTML elements (<details> and <summary>) coupled with simple classes.
Zero Dependencies: Pure HTML and CSS layout requiring no heavy Javascript libraries.