# Animated FAQ Accordion

A modern, lightweight FAQ accordion component built with pure HTML and CSS. It includes smooth expand/collapse animation, animated plus/minus icon, keyboard focus support, and reduced-motion accessibility support.

## Features

- **Pure CSS Accordion**
  - No JavaScript required.
  - Uses the checkbox hack to toggle answers.

- **Smooth Animation**
  - Animated expand/collapse using modern CSS grid rows.
  - Smooth icon rotation from plus to minus.

- **Modern UI**
  - Glassmorphism-style cards.
  - Gradient heading.
  - Soft glow highlight for active FAQ item.

- **Responsive**
  - Works on mobile, tablet, and desktop.

- **Accessibility**
  - Keyboard focus support.
  - Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<article class="faq-item">
  <input type="checkbox" id="faq-item-1" class="faq-toggle" />
  <label for="faq-item-1" class="faq-question">
    <span>Your question here</span>
    <span class="faq-icon"></span>
  </label>

  <div class="faq-answer">
    <div class="faq-answer-inner">
      <p>Your answer here.</p>
    </div>
  </div>
</article>