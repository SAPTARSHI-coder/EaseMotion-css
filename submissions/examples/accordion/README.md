# Zero-Dependency Accordion Motion Component

A smooth, JavaScript-free accordion component built for EaseMotion CSS. 

## Features
- **Zero JavaScript:** Utilizes native HTML `<details>` and `<summary>` tags for state management and built-in accessibility.
- **Smooth Height Transition:** Uses the modern CSS Grid interpolation trick (`grid-template-rows: 0fr` -> `1fr`) to smoothly animate element height without hacky fixed `max-height` limits.
- **Icon Animation:** Clean CSS-only plus/minus icon toggle that transitions smoothly.

## Usage

```html
<div class="ease-accordion"> 
  <details class="ease-accordion-item" open> 
    <summary class="ease-accordion-trigger"> 
      What is EaseMotion CSS? 
      <span class="ease-accordion-icon"></span> 
    </summary> 
    <div class="ease-accordion-content"> 
      <div class="ease-accordion-body"> 
        EaseMotion CSS is a human-readable, animation-first CSS framework. 
      </div> 
    </div> 
  </details> 
</div>
```

## Why it's useful
It provides a high-quality accordion interface that avoids JavaScript bloat while taking advantage of modern CSS layout engines, perfectly aligning with EaseMotion's "motion-first" philosophy.
