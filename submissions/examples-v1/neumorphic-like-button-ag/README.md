# Neumorphic Like Button Component

## 1. What does this do?

A beautiful, responsive neumorphic toggle button that provides a polished micro-interaction and custom particle burst effect when clicked or activated, styled entirely in pure CSS.

## 2. How is it used?

Place the following HTML markup in your layout and link the component stylesheet:

```html
<div class="neumorphic-like-wrapper">
  <!-- Hidden checkbox input -->
  <input type="checkbox" id="like-toggle" class="like-checkbox" />

  <!-- Neumorphic Label Button -->
  <label for="like-toggle" class="like-btn" aria-label="Like post">
    <div class="heart-icon-wrapper">
      <svg
        class="heart-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        ></path>
      </svg>
    </div>

    <!-- Sparkle particles (burst on check) -->
    <span class="sparkle sp-1" style="--dx: -35px; --dy: -35px;"></span>
    <span class="sparkle sp-2" style="--dx: 35px; --dy: -35px;"></span>
    <span class="sparkle sp-3" style="--dx: -45px; --dy: 10px;"></span>
    <span class="sparkle sp-4" style="--dx: 45px; --dy: 10px;"></span>
    <span class="sparkle sp-5" style="--dx: -20px; --dy: 45px;"></span>
    <span class="sparkle sp-6" style="--dx: 20px; --dy: 45px;"></span>
  </label>
</div>
```

## 3. Why is it useful?

It fits EaseMotion's philosophy of zero-dependency, readable, and highly expressive CSS by providing a common UI element (a like button toggle) without relying on heavy external libraries or runtime Javascript. It natively leverages EaseMotion timing constants and spring-easing configurations to ensure a responsive, highly animated, and accessible interactive element.
