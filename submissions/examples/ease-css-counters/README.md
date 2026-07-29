# CSS Counters Proposal (`ease-css-counters`)

A proposal for `core/utilities.css` adding standard CSS counter utilities for automated list numbering.

## 🚀 Features

- **`.em-counter-reset`**: Initializes a generic `em-counter` on a parent element.
- **`.em-counter-increment`**: Increments the `em-counter` value on child elements and automatically displays it via a `::before` pseudo-element.
- **Zero JS**: Completely handles numbering in pure CSS, removing the need for manual HTML indices or JavaScript mapping.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. 

You can apply the proposed classes to automatically number a list of divs, articles, or sections:

```html
<!-- Initialize the counter on the parent -->
<div class="em-counter-reset">
  
  <!-- Increment the counter on each child -->
  <div class="em-counter-increment">First Item</div>
  <div class="em-counter-increment">Second Item</div>
  <div class="em-counter-increment">Third Item</div>
  
</div>
```

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/utilities.css`.*

## 🔗 Related Issue
Resolves Issue #16836
