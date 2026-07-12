# Ease Accordion Single Expand

A highly polished, semantic, and pure-CSS single-expand accordion layout utilizing native `<details>` and `<summary>` components. When a new accordion panel is toggled, any active open panel implicitly retracts itself.

## Features
- **No JavaScript Dependencies:** Built purely with structural HTML attributes and performant modern layouts.
- **Smart Animation Pattern:** Utilizes the CSS Grid height-interpolation design pattern (`grid-template-rows: 0fr -> 1fr`) to scale variable content cleanly without fixed dimensional boundaries.
- **Micro-interactions:** Interactive header indicators that morph smoothly from a plus shape (`+`) into a minus shape (`-`) on toggle.

## Acceptance Criteria Met
- [x] **Smooth CSS transition:** Employs hardware-friendly grid interpolations paired with `cubic-bezier` timing.
- [x] **Interactive trigger:** Hooks clean cursor active elements natively through HTML user clicks.
- [x] **Customizable via CSS variables:** Configuration architecture is driven by adjustable root variables.
- [x] **Responsive design:** Wraps text paragraphs elegantly and adjusts layout spacing across variable viewport constraints.

## Configuration API (CSS Variables)

| CSS Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--accordion-bg` | Background body fill for elements. | `#ffffff` |
| `--accordion-radius` | Global corner radius metrics. | `8px` |
| `--transition-duration`| Speed controls for slide-down modules. | `0.35s` |
| `--icon-accent` | Color code assigned to elements when expanded. | `#2563eb` |

## Usage
Simply structure your items within the unified target folder. Ensure matching `name="..."` tags are consistently specified to leverage native exclusion rules across siblings:
```html
<details class="accordion-item" name="faq">
    <summary class="accordion-header">Header text</summary>
    <div class="accordion-content">
        <div class="content-inner">Your text content here.</div>
    </div>
</details>