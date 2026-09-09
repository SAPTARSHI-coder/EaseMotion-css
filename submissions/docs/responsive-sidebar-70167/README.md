# Responsive Sidebar

**1. What does this do?**
Provides a clean, responsive sidebar component that stays fixed on desktop and acts as an animated slide-in drawer on mobile devices.

**2. How is it used?**
Use the `.sidebar` class on your `<aside>` container, wrapped in a `.layout` flex container. Use the active classes in combination with JavaScript to toggle the sidebar on mobile viewports.

```html
<div class="layout">
  <button class="sidebar-toggle">☰ Menu</button>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <!-- nav items -->
    </nav>
  </aside>
  <main class="main-content">
    <!-- main content -->
  </main>
</div>
```

**3. Why is it useful?**
This component fits EaseMotion's philosophy by using clean, performant CSS transitions (`transform` and `opacity`) to create a smooth, buttery responsive experience without heavy JavaScript libraries, ensuring high performance across devices.
