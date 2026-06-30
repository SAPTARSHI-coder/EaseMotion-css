# Accordion with Icon

A smooth-animating, accessible accordion component built with pure CSS and HTML `<details>`/`<summary>` elements. It features support for leading icons and a clean interactive caret.

## 1. What does this do?

Provides a collapsible content container (accordion) that supports leading icons in the header. It uses a CSS grid-based animation technique to achieve smooth height transitions without knowing the exact content height.

## 2. How is it used?

The component follows a semantic HTML structure:

```html
<details class="accordion-item">
  <summary class="accordion-header">
    <div class="accordion-header-content">
      <!-- Leading Icon -->
      <svg class="accordion-icon">...</svg>
      <span>Title</span>
    </div>
    <!-- Caret Icon -->
    <svg class="accordion-caret">...</svg>
  </summary>
  <div class="accordion-wrapper">
    <div class="accordion-content">
      <div class="accordion-body">Content goes here...</div>
    </div>
  </div>
</details>
```

## 3. Why is it useful?

Accordions are essential for managing large amounts of content in a limited space. Adding icon support improves visual hierarchy and helps users quickly identify the category or purpose of each section. The pure CSS implementation ensures zero dependencies and high performance.

### Alignment with EaseMotion CSS

- **Token Driven:** Uses CSS variables for easy theming.
- **Pure CSS:** No JavaScript required for the core functionality.
- **Accessible:** Leverages native browser elements for keyboard navigation and screen readers.
- **Glassmorphism Friendly:** Easily adaptable to the framework's existing glass tokens.
