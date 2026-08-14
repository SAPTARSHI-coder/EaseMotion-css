# Glassmorphic Command Palette Search Modal (EaseMotion CSS)

An interactive glassmorphism command palette search modal component featuring keyboard shortcut tooltips, scale entrance keyframes, and active list item highlights constructed with HTML5 and CSS3.

## 1. What does this do?
This component renders a desktop application quick-search modal (`Cmd+K` style palette). It features glassmorphism backdrop blurs, quick action result groups, keyboard badge shortcuts, and smooth scale entrance keyframe animations (`@keyframes paletteScaleEntrance`).

## 2. How is it used?
Link `style.css` in your HTML application and include the `.command-palette-card` inside `.modal-backdrop` as demonstrated in `demo.html`.

## 3. Why is it useful?
- **Modern SaaS Tooling Interface**: Enhances Web apps with power-user keyboard navigation interfaces (similar to Spotlight, Raycast, and VS Code Command Palette).
- **Pure CSS Performance**: Hardware-accelerated entrance transitions (`transform` and `opacity`) guarantee smooth 60fps performance without external modal frameworks.
- **Accessible & Responsive**: Optimized for high contrast, keyboard readability, and mobile responsiveness.
