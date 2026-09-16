# Item Add to Cart

A product card component with an animated "Add to Cart" button that transitions through loading and success states.

## Overview

Each product card displays an image, name, description, and price. The "Add to Cart" button cycles through three states: default, loading (animated dots), and success (checkmark). The cart badge in the header bounces to indicate a new item was added.

## Features

| Feature | Description |
|---|---|
| State transitions | Button smoothly morphs between default, loading, and success states |
| Loading animation | Three dots bounce with staggered delays |
| Success checkmark | Checkmark icon fades in with a scale transition |
| Cart badge bounce | Badge count animates with a bounce keyframe on each addition |
| Multiple products | Three distinct product cards with independent state management |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--iac-duration` | `0.35s` | Transition duration for button state changes |
| `--iac-btn-bg` | `#4f46e5` | Button background color (default state) |
| `--iac-btn-color` | `#ffffff` | Button text color |
| `--iac-success-bg` | `#10b981` | Button background color (success state) |
| `--iac-cart-badge-color` | `#ef4444` | Cart badge background color |
| `--iac-radius` | `0.75rem` | Product card border radius |

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="product-card">
  <h2>Premium Widget</h2>
  <p class="product-price">$19.99</p>
  <button class="add-btn" data-product="Premium Widget">
    <span class="btn-text">Add to Cart</span>
    <span class="loading-dots"><span></span><span></span><span></span></span>
    <span class="success-icon">&#x2713;</span>
  </button>
</div>

<script>
  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.add("state-loading");
      setTimeout(() => {
        this.classList.replace("state-loading", "state-success");
      }, 900);
    });
  });
</script>
```

Toggle `.state-loading` and `.state-success` on the button class list to cycle through the states. The button disables during animation and re-enables after the success state completes.
