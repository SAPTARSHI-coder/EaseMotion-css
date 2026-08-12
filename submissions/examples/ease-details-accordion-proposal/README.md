# Native Details/Summary Accordion (`ease-details-accordion-proposal`)

This proposal introduces a fully interactive accordion component using native HTML5 tags, targeted for integration into `components/accordion.css`.

## 📌 Feature Overview

Historically, accordions required heavy JavaScript libraries to handle click events, state toggling, and height calculations for animations.

This implementation uses the native `<details>` and `<summary>` HTML elements. The browser handles the open/closed state automatically. By applying a modern CSS grid hack (`grid-template-rows: 0fr` to `1fr`), we can smoothly animate the content expansion using pure CSS, resulting in a perfectly accessible, highly performant, zero-JavaScript accordion.

Included classes:
- `.ease-accordion` (Applied to the `<details>` wrapper)
- `.ease-accordion-header` (Applied to the `<summary>` element)
- `.ease-accordion-icon` (Custom animated plus/minus icon)
- `.ease-accordion-content` (Inner wrapper for smooth animation)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

Structure your HTML using the standard details/summary tags with the Ease classes:

```html
<details class="ease-accordion" name="faq-group">
  <summary class="ease-accordion-header">
    Click to expand
    <span class="ease-accordion-icon"></span>
  </summary>
  <div class="ease-accordion-content">
    <p>Hidden content revealed smoothly!</p>
  </div>
</details>
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-details-accordion-proposal/` directory to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate this to the core components stylesheet.*

## 🔗 Related Issue
Closes Issue #15547
