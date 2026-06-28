# Accordion Component — Issue #14159

## What does this do?
A CSS-only accordion with smooth expand/collapse animation, exclusive mode (only one item open at a time), and dark mode support — no JavaScript required.

## How is it used?
```html
<div class="ease-accordion">
  <div class="ease-accordion-item">
    <input type="radio" name="accordion" class="ease-accordion-trigger" id="item1" checked>
    <label class="ease-accordion-header" for="item1">
      Section title
      <span class="ease-accordion-icon">&#9660;</span>
    </label>
    <div class="ease-accordion-content">
      <div class="ease-accordion-content-inner">
        Hidden content...
      </div>
    </div>
  </div>
</div>
```

## Classes
| Class | Description |
|---|---|
| `.ease-accordion` | Container with border and rounded corners |
| `.ease-accordion-item` | Individual section with bottom border |
| `.ease-accordion-trigger` | Hidden radio input — `:checked` toggles content |
| `.ease-accordion-header` | Clickable label; shows title and arrow icon |
| `.ease-accordion-icon` | Arrow indicator; rotates 180° on open |
| `.ease-accordion-content` | Collapsible wrapper; `max-height: 0` → 500px, `opacity: 0` → 1 |
| `.ease-accordion-content-inner` | Inner padded content area |

## Behavior
- **Exclusive:** Only one item open at a time (radio `name` attribute)
- **Default open:** Add `checked` attribute to the trigger input
- **Animation:** `max-height` and `opacity` transition over 400ms / 300ms with `cubic-bezier` easing
- **Keyboard:** Native label/radio interaction; Tab between headers, Space to toggle
- **Dark mode:** CSS variables adapt via `[data-theme="light"]`

## Why is it useful for EaseMotion CSS?
Accordions are essential for FAQ sections, documentation navigation, settings panels, and content organization. This provides a zero-JS accessible implementation.
