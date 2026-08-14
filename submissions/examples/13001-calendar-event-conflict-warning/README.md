# Calendar Event Conflict Warning

This submission addresses GSSOC issue **#13001** by implementing a pure HTML and CSS calendar schedule mockup that dynamically highlights event conflicts (overlapping slots), provides selection focus outlines, and displays detailed warnings when a conflict is selected/focused.

## Features

- **Event States**:
  - **Normal**: Safe, non-overlapping blue calendar events.
  - **Selected**: Highlighted with a high-contrast accent ring.
  - **Conflicting**: Displayed with thick dotted red borders, an warning icon, and a diagonal warning line pattern to guarantee readability without color alone.
- **Pure HTML/CSS Interactions**:
  - Hidden form inputs (`radio` buttons) track selection state, enabling CSS-only warning box reveals when a conflicting event is selected.
  - Keyboard focusable (`tabindex="0"` on wrapper/label elements) with high-contrast indicator loops.
- **Label Clarity & Anti-Clipping**:
  - Grid-aligned columns allow horizontal offset of overlapping elements, keeping labels readable and fully visible on narrow/mobile viewports.
- **Accessibility & Reduced Motion**:
  - Strict high-contrast styling and explicit textual warning messages (no color alone dependency).
  - Clean styling reset under `prefers-reduced-motion` to bypass transition delays and scale transformations.
