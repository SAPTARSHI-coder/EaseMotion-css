# macOS Style Magnification Dock (CSS-Only)

A seamless, hardware-accelerated fluid magnification navigation menu mimicking the iconic macOS dock layout.

## How It Works
Instead of heavy JavaScript window listeners or distance formula bounding-box tracking, this utility leverages modern relational layout states:
* Uses CSS **Adjacent Sibling Combinators (`+`)** to scale immediate elements moving downstream.
* Uses relational pseudo-class **`:has()` selectors** to look backward up the DOM tree and scale upstream preceding elements safely.
* Avoids dynamic layout margins, completely eliminating mouse-tracking layout reflow loops (jitter).

## Component Schema

| Class Target | Implementation Layer | Function |
| :--- | :--- | :--- |
| `.ease-dock-container` | Structure Wrapper | Handles contextual positioning inside target viewports. |
| `.ease-dock` | Parent Node | Acts as the track container; adjusts item gaps dynamically on element focus. |
| `.dock-item` | Target Node | Independent component layer that transforms size from a locked base origin. |