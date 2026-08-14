# Responsive Sidebar Component (#79930)

A collapsible, accessibility-compliant responsive navigation sidebar designed for dashboard layouts.

## Usage

Include the structure below in your layout. The sidebar collapses seamlessly on mobile viewports using pure CSS media queries.

```html
<div class="sidebar-wrapper">
  <aside class="responsive-sidebar" id="appSidebar">
    <div class="sidebar-brand">Dashboard</div>
    <nav class="sidebar-nav">
      <a href="#" class="sidebar-link active">Home</a>
      <a href="#" class="sidebar-link">Analytics</a>
      <a href="#" class="sidebar-link">Settings</a>
    </nav>
  </aside>
</div>