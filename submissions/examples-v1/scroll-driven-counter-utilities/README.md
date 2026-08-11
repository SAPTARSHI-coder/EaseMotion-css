# CSS Scroll-Driven Counter Utilities

Relates to feature request **#41336**.

## 1. What does this do?

Introduces utility classes that combine CSS Counters with Scroll-Driven Animations. This allows you to create section numbering, progress indicators, and document milestones that update naturally and animate into view as the user scrolls through content — entirely without JavaScript.

## 2. Why is this useful for EaseMotion CSS?

Long-form documentation, tutorials, and presentations often require visual progress indicators. Native CSS counters combined with modern scroll animations provide a lightweight, performant, JavaScript-free solution that perfectly aligns with EaseMotion CSS's declarative, composable philosophy.

## 3. Utilities Provided

| Class | Description |
|---|---|
| `.ease-counter-scope` | Add to `body` or a wrapper element to initialize the counter (`counter-reset`). |
| `.ease-counter` | Increments the counter, displays it with a leading zero, and animates on scroll entry. |
| `.ease-counter-circle` | Visual variant: displays the number inside a solid colored circle. |
| `.ease-counter-bracket` | Visual variant: displays upper-roman numerals enclosed in brackets (e.g., `[I]`, `[II]`). |

## 4. How is it used?

**HTML** (matching the issue's snippet exactly)
```html
<!-- Initialize the counter on a parent element -->
<body class="ease-counter-scope">

  <section class="ease-counter">
    <h2>Introduction</h2>
  </section>

  <section class="ease-counter">
    <h2>Installation</h2>
  </section>

</body>
```

**CSS** (matching the issue's snippet exactly)
```css
/* Scope the counter */
.ease-counter-scope {
  counter-reset: section;
}

/* Increment and display */
.ease-counter::before {
  counter-increment: section;
  content: counter(section, decimal-leading-zero);
  font-size: 2rem;
  color: #6c63ff;
}

/* Scroll-Driven Animation (enhancement) */
@supports (animation-timeline: view()) {
  .ease-counter {
    animation: slideInFade linear both;
    animation-timeline: view();
    animation-range: entry 10% cover 30%;
  }
}
```

## 5. Advanced Feature: Global Scroll Indicator

Because the `content: counter(section)` value represents the *current* state of the counter up to that point in the document, placing a `position: fixed` element that displays the counter value will automatically show the *highest* counter value reached on the page. See the top-right corner of the demo!

## 6. Browser Support

| Feature | Support |
|---|---|
| **CSS Counters** | All Browsers ✅ |
| **Scroll-Driven Animations** | Chrome 115+, Edge 115+ |

> **Graceful Degradation:** Browsers that don't support `animation-timeline` (like Safari and Firefox) will simply ignore the animation block. The counters will still render perfectly as static numbers.
