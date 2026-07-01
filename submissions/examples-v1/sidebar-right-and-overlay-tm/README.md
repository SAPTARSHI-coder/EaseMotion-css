# Sidebar — Right and Overlay Variants

## What does this do?
Adds two positioning variants to the sidebar component:
- `.ease-sidebar-right` — sidebar appears on the right edge
- `.ease-sidebar-overlay` — sidebar floats over the main content
  instead of pushing it

## How is it used?
Apply the variant alongside `.ease-sidebar-layout`:

    <div class="ease-sidebar-layout ease-sidebar-right">
      <main class="ease-sidebar-main">Main content</main>
      <aside class="ease-sidebar">Right sidebar</aside>
    </div>

    <div class="ease-sidebar-layout ease-sidebar-overlay">
      <aside class="ease-sidebar">Floating sidebar</aside>
      <main class="ease-sidebar-main">Main content</main>
    </div>

## Why is it useful?
The default sidebar component places the panel on the left and
shares space with the main content. Right-positioned and floating
sidebars are common patterns (filter panels, settings drawers,
chat widgets) and currently require custom CSS.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser to see both variants side by
side.

## Contribution Notes
- Pure CSS addition
- Composes with the existing collapsed variant
