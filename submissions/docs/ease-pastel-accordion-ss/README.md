# Pastel Collapsible FAQ Accordion - Responsive Breakpoints Layout

## Overview

The **Pastel Collapsible FAQ Accordion** is a modern, light-themed responsive accordion component designed for clean documentation, FAQs, and structured content display. Built with pure CSS grid animations and full WAI-ARIA compliance, it supports dynamic height transitions without relying on hardcoded `max-height` limits or JavaScript height calculations.

## Responsive Breakpoint Layout Matrix

The layout adaptively transforms across screen viewports to ensure optimal readability and touch target sizing.

| Viewport Breakpoint | Layout Structure | Max Width | Padding & Sizing | Spacing & Alignment |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile (`<640px`)** | 1 Column Flex | 100% | Container: `1.5rem 1rem`<br>Trigger: `1rem` | Gap: `1rem`<br>Font: `0.9375rem` |
| **Tablet (`640px - 1023px`)** | 1 Column Flex | 720px (centered) | Container: `2rem 1.5rem`<br>Trigger: `1.25rem 1.5rem` | Gap: `1.25rem`<br>Font: `1rem` |
| **Desktop (`>=1024px`)** | 2 Columns Grid (`.ease-accordion-2col`) | 1100px | Container: `2.5rem`<br>Trigger: `1.25rem 1.5rem` | Gap: `1.25rem`<br>Multi-column grid flow |

## HTML Markup Specification

```html
<main class="ease-accordion-container" aria-labelledby="faq-title">
  <header>
    <h1 id="faq-title">Pastel FAQ Accordion</h1>
  </header>

  <section class="ease-accordion-grid ease-accordion-2col" aria-label="Frequently Asked Questions">
    <article class="ease-faq-item is-open">
      <h3>
        <button type="button" class="ease-faq-trigger" aria-expanded="true" aria-controls="faq-answer-1" id="faq-header-1">
          <span>How does the pure CSS height transition work?</span>
          <span class="ease-faq-icon" aria-hidden="true">▾</span>
        </button>
      </h3>
      <div id="faq-answer-1" class="ease-faq-panel" role="region" aria-labelledby="faq-header-1">
        <div class="ease-faq-content">
          <div class="ease-faq-body">
            Accordion body content goes here...
          </div>
        </div>
      </div>
    </article>
  </section>
</main>
```

## CSS Modifier Classes & Pastel Themes

Customize individual cards by applying variant modifier classes directly to `.ease-faq-item`:

| Modifier Class | Theme Name | Background (`--pastel-bg-item`) | Border (`--pastel-border-item`) | Accent (`--pastel-accent-item`) |
| :--- | :--- | :--- | :--- | :--- |
| *(Default)* | Lavender | `#f5f3ff` | `#ddd6fe` | `#7c3aed` |
| `.ease-pastel-mint` | Soft Mint | `#ecfdf5` | `#a7f3d0` | `#059669` |
| `.ease-pastel-peach` | Soft Peach | `#fff7ed` | `#fed7aa` | `#ea580c` |
| `.ease-pastel-sky` | Soft Azure/Sky | `#f0f9ff` | `#bae6fd` | `#0284c7` |

### Layout Modifiers

- `.ease-accordion-2col`: Applied to `.ease-accordion-grid` to trigger balanced 2-column desktop grid alignment at viewports `>=1024px`.

## Pure CSS Smooth Height Transition Architecture

Traditional accordion height transitions rely on either fixed `max-height` hacks (which distort animation timing) or JavaScript height measurements. 

This component uses **CSS Grid Template Rows interpolation**:

```css
.ease-faq-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.ease-faq-item.is-open .ease-faq-panel {
  grid-template-rows: 1fr;
}

.ease-faq-content {
  overflow: hidden;
}
```

- **Zero JavaScript Geometry Overhead**: Transitions natively from `0fr` (hidden) to `1fr` (auto content height).
- **Compositor Chevron Animation**: Chevron rotates 180 degrees using CSS `transform` (`rotate(180deg)`), ensuring 60fps rendering without layout recalculations.

## Accessibility & WAI-ARIA Compliance (WCAG 2.1 AA)

- **Semantic Heading Hierarchy**: All accordion triggers are housed inside proper `<h3>` elements containing standard `<button type="button">` triggers.
- **State & Region Association**:
  - `aria-expanded="true|false"` dynamically reflects the open/closed state on each trigger button.
  - `aria-controls` links each trigger to the corresponding panel ID (`faq-answer-N`).
  - Panel wrapper uses `role="region"` and `aria-labelledby` referencing the trigger header ID.
- **Color Contrast**: Surface and text contrast pairs exceed the 7:1 ratio (dark slate typography `#0f172a` and `#475569` on pastel surfaces).
- **Keyboard Navigation**: Full support for `Tab` focusing, `Enter`/`Space` toggling, and arrow key roving focus (`ArrowDown` / `ArrowUp`).
- **High-Contrast Fallbacks**: Includes `@media (forced-colors: active)` media query support for OS High Contrast modes (`CanvasText` and `Highlight` system colors).
