# CSS-Only Smooth Accordion Reveal

## What does this do?
An accordion/FAQ component built using visually hidden radio/checkbox buttons. It utilizes the modern CSS Grid trick (`grid-template-rows: 0fr` to `1fr`) to create a buttery smooth height transition when an item is toggled.

## How is it used?
```html
<div class="ease-accordion">
    <div class="ease-accordion-item">
        <input type="checkbox" id="faq1" class="ease-accordion-toggle">
        <label for="faq1" class="ease-accordion-header">
            Question Title
            <div class="ease-accordion-icon"></div>
        </label>
        <div class="ease-accordion-content-wrapper">
            <div class="ease-accordion-content">
                <p>Answer content goes here.</p>
            </div>
        </div>
    </div>
</div>
```

## Why does it fit EaseMotion CSS?
Smoothly animating an element's height to `auto` has been a notoriously difficult CSS challenge for years, often requiring JavaScript to calculate pixel heights dynamically. This component solves it elegantly and natively using modern CSS Grid while maintaining 100% accessible HTML semantics (via `<label>` and `<input>`).

## Tech Stack
- HTML
- CSS (No JavaScript)
