# Ease Accordion

A pure CSS, animated accordion component for the EaseMotion library. Built entirely with the checkbox-hack pattern — no JavaScript required.

## Files

- `demo.html` — standalone demo page with 3 expandable accordion items
- `style.css` — the `ease-accordion` component styles and animation

## Usage

Copy this markup structure for each accordion item:

​```html
<div class="ease-accordion">
  <div class="accordion-item">
    <input type="checkbox" id="item-1" class="accordion-toggle" />
    <label for="item-1" class="accordion-header">Your question here</label>
    <div class="accordion-content">
      <p>Your answer content here.</p>
    </div>
  </div>
</div>
​```

Include `style.css` in your page. Each item needs a unique `id`/`for` pair to work independently.

## How it works

- Each panel uses a hidden `<input type="checkbox">` paired with a `<label>` header.
- Clicking the label toggles the checkbox's `:checked` state (no JS listener needed).
- `.accordion-content` animates open/closed using a `max-height` transition.
- The `+` indicator in the header rotates 45° into an `×` shape when expanded, via `::after` and `transform: rotate()`.
- Colors, speed, and accent are controlled via CSS custom properties (`--accordion-accent`, `--accordion-speed`, etc.) for easy re-theming.
- Panels are independent — multiple can be open at the same time.

## Accessibility

- Fully keyboard operable (native checkbox + label behavior).
- `:focus-visible` outline included on the header for keyboard navigation clarity.

## Preview

Open `demo.html` directly in any browser to see it live.