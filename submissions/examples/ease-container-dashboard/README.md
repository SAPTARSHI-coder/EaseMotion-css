# CSS Container Queries Dashboard Widget

Media queries (`@media (min-width: 768px)`) changed the web by allowing elements to respond to the **size of the browser viewport**. 
However, in component-driven architecture (like React, Vue, or modular HTML), media queries are fundamentally flawed. 

Imagine a complex Dashboard Analytics Widget. You might place this exact same widget in three different places on a single screen:
1. Inside a narrow 300px left sidebar.
2. Inside a 500px mid-content slot.
3. Inside a massive 900px main hero slot.

With media queries, the widget has no idea how much space it actually has. It only knows how big the *screen* is. This forces developers to write highly specific CSS overrides based on parent classes (e.g., `.sidebar .widget { ... }`), ruining the reusability of the component.

This advanced submission implements the bleeding-edge **CSS Container Queries (`@container`)** specification to build a completely self-aware, intelligent widget that morphs its own internal layout based *strictly* on the physical dimensions of the slot it is dropped into.

---

## 🧠 How Container Queries Work

Building a smart component involves two steps:

### 1. Define the Container Context
First, you must tell the browser that a specific element should measure its own physical dimensions and broadcast that information to its children.
We do this by applying `container-type: inline-size` to the widget wrapper itself.

```css
.ease-smart-widget {
    container-type: inline-size;
    /* Optional: Give the container a name for targeting specific wrappers */
    container-name: smart-widget;
    
    /* Default Mobile/Narrow Layout */
    display: flex;
    flex-direction: column;
}
```

### 2. Query the Container
Now, instead of using `@media`, we use `@container` within our CSS. The browser will measure the width of `.ease-smart-widget`. If the physical width of that specific DOM node crosses our threshold, it applies the CSS *only to that instance of the widget*.

```css
/* If THIS SPECIFIC WIDGET is placed in a slot wider than 450px */
@container (min-width: 450px) {
    .ease-smart-widget .widget-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

/* If THIS SPECIFIC WIDGET is placed in a massive slot wider than 750px */
@container (min-width: 750px) {
    .ease-smart-widget {
        display: grid;
        grid-template-columns: 250px 1fr;
    }
}
```

---

## 🎨 The Demo Implementation

The included `demo.html` provides a highly robust, production-ready dashboard layout. 
**Look closely at the HTML source code.** 

The exact same HTML markup block (`<div class="ease-smart-widget">...</div>`) is copy-pasted three times into three different slots:
1. `aside.dashboard-sidebar`
2. `main.dashboard-main`
3. `div.slot-half`

Because of Container Queries, you will see three radically different UI layouts on the screen simultaneously:
- **The Sidebar Widget** stacks all elements vertically and hides complex charts.
- **The Mid-Slot Widget** utilizes a 2x2 internal CSS Grid to place stats side-by-side.
- **The Hero Widget** transforms into an intricate masonry layout, pushing the header to a left rail and allowing the chart to expand massively on the right.

If you resize your browser window, you will watch each individual widget independently calculate its own breakpoints and snap between the three layouts based entirely on its own mathematical constraints.

---

## 📈 Performance & Browser Support

- **JavaScript Payload:** `0 KB`. Historically, achieving element-aware breakpoints required heavy `ResizeObserver` polyfills in JavaScript, causing layout thrashing and performance degradation. This CSS-native approach offloads all calculation to the browser engine.
- **Browser Support:** As of late 2023, CSS Container Queries are supported in all major modern browsers (Chrome 105+, Edge 105+, Safari 16+, Firefox 110+).

This submission embodies the EaseMotion philosophy: achieving the highest level of component intelligence and modularity by adopting the absolute cutting-edge of CSS specifications, eliminating the need for heavy JS workarounds.
