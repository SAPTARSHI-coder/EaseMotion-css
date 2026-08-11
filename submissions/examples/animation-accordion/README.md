# Animated Accordion Component

A CSS-powered accordion component featuring smooth fold/unfold transitions and animated chevron rotation.

## Features

* Smooth accordion expansion
* Chevron icon rotation
* Pure CSS implementation
* Uses semantic HTML `<details>` and `<summary>`
* Responsive design
* Accessible by default
* Reduced-motion support

## Usage

```html
<details class="ease-accordion">
  <summary>
    Question
    <span class="chevron">⌄</span>
  </summary>

  <div class="accordion-content">
    <p>Answer content.</p>
  </div>
</details>
```

## Why It Fits EaseMotion CSS

Accordions are one of the most common UI patterns in documentation, help centers, onboarding flows, and landing pages.

This example demonstrates how EaseMotion CSS can provide elegant interaction patterns with simple, human-readable classes and modern CSS techniques.

## Accessibility

Supports:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

* Accordion transitions are disabled
* Chevron animations are disabled
* Content remains fully accessible

## Demo

Open:

```text
demo.html
```

directly in a browser.

No build tools or JavaScript required.
