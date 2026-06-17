# Mobile Horizontal Scroll Fix

## 1. What does this do?
This fix resolves horizontal viewport scrolling on mobile and tablet devices across the documentation pages by adjusting table overflow layouts, correcting backward grid breakpoints, adding responsive search input bounds, and refactoring the mobile header action buttons.

## 2. How is it used?
The custom rules are applied automatically via `docs.css` updates.
*   Tables display horizontally scrollable content inside their bounds without breaking the document width:
    ```html
    <table class="docs-table">
      ...
    </table>
    ```
*   Header navigation and theme-toggles are grouped into a `.header-actions` block:
    ```html
    <div class="header-actions">
      <button id="theme-toggle">...</button>
      <button id="sidebarToggle">...</button>
    </div>
    ```

## 3. Why is it useful?
It ensures that the official EaseMotion CSS documentation website is fully usable, legible, and responsive on all devices (mobile, tablet, and desktop), aligning with EaseMotion CSS's focus on modern, polished, and human-friendly design standards.
