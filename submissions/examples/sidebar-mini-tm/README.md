# Sidebar — Mini Collapsed by Default

## What does this do?
Adds `.ease-sidebar-mini` — a sidebar that starts in the
collapsed state by default.

## How is it used?
Apply the variant alongside `.ease-sidebar-layout`:

    <div class="ease-sidebar-layout ease-sidebar-mini">
      <aside class="ease-sidebar">Collapsed icons</aside>
      <main class="ease-sidebar-main">Main</main>
    </div>

## Why is it useful?
The default `.ease-sidebar-layout` shows the expanded sidebar.
`.ease-sidebar-mini` starts in the collapsed state for pages
where the sidebar is mostly navigation icons. Users can still
toggle the existing `.ease-sidebar-collapsed` class to expand.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser.

## Contribution Notes
- Pure CSS addition
- Composes with the existing collapsed and right variants
