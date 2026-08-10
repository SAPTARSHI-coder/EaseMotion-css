# SCSS Utility: CSS Container Query Wrapper Classes (#28421)

A forward-looking SCSS module for the EaseMotion CSS framework that simplifies the adoption of modern **CSS Container Queries** (`@container`). This allows UI components to adapt their animations and layouts based on the size of their parent container, rather than the global viewport.

## 📦 What's included?

- `_css-container-query-wrapper-classes.scss`: The SCSS partial containing the context generators and `@container` mixin helpers.
- `style.css`: The compiled CSS showing how container queries alter component layouts.
- `demo.html`: A powerful visual demo showing two identical HTML components behaving entirely differently because they are placed in differently-sized parent containers.

## 🛠 Usage via HTML Utility Classes

To use Container Queries, an element must first declare a `container-type`. This utility provides a wrapper class to instantly establish that context without writing new CSS.

```html
<!-- 1. Establish the container context -->
<div class="ease-cq-wrapper">
  
  <!-- 2. Place your responsive component inside -->
  <div class="my-card">
    Content
  </div>

</div>
```

## 🛠 Usage via SCSS Mixins

Instead of writing raw `@container` syntax (which can be verbose, especially with named containers), use the provided mixins to establish contexts and write queries cleanly.

```scss
@import 'css-container-query-wrapper-classes';

.sidebar-wrapper {
  // Compiles to: container-type: inline-size; container-name: sidebar;
  @include ease-container-inline(sidebar);
}

.my-card {
  display: flex;
  flex-direction: column; // Default mobile/narrow layout

  // If the parent container is > 600px wide, switch to horizontal!
  @include ease-cq-min(600px) {
    flex-direction: row;
    
    // You can also change EaseMotion animations based on container size!
    animation-duration: 0.5s; 
  }
}
```

## 🚀 Why this fits EaseMotion

**EaseMotion** is about building modern, responsive, animation-first interfaces. For years, developers have relied on Media Queries (`@media (min-width: X)`), which tie animations and layouts to the *browser window size*. This causes components to break when reused in narrow sidebars on wide screens.

**Container Queries** fix this by allowing a component to style itself based on the *space it actually has*. By providing these clean wrapper classes and mixins, EaseMotion developers can immediately start building hyper-modular, self-contained UI components that animate beautifully whether they are dropped into a full-width hero section or a cramped 300px sidebar.
