# Dashboard Analytics Scale-Hover Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-scale-hover-modal-dashboard-analytics-um/`

A pure CSS animated Modal utilizing a smooth Scale-Hover interaction transition, styled to complement modern data-heavy Dashboard Analytics interface aesthetics.

---

## 1. What does this do?

This component provides a sleek, dark-themed modal designed for "drill-down" data views common in analytics dashboards. The trigger element is styled as a KPI summary widget. State management is handled entirely via the zero-JS CSS checkbox hack (`input[type="checkbox"]` with the `~` sibling selector). The modal features a crisp scale-up entrance animation, while interactive elements (the summary widget, internal metric cards, and export buttons) utilize scale-hover transforms to provide premium tactile feedback.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`. 

### Customizing via CSS Variables
The modal exposes CSS custom properties attached to the `:root` pseudo-class for easy tuning of slate colors, semantic data colors (success/danger), and animations:

```css
:root {
  --ease-dash-bg-um: #1e293b; /* Slate 800 */
  --ease-dash-card-bg-um: #334155; /* Slate 700 */
  --ease-dash-primary-um: #3b82f6; /* Action Blue */
  --ease-dash-timing-um: 0.3s;
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

Analytics dashboards are often heavy with JavaScript processing for charts and data tables. Offloading UI state management (like modals and interactive hover states) to pure CSS ensures that the interface remains snappy and responsive, even when the main thread is busy parsing data. By utilizing hardware-accelerated compositor transitions (`transform`, `opacity`), this modal guarantees 60fps performance and respects `prefers-reduced-motion` settings for accessibility.
