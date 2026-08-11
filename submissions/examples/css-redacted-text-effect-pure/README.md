# CSS Redacted Text Effect

A pure CSS interaction simulating classified documents. Sensitive text is blacked out by default to mimic a heavy marker, and smoothly revealed upon hover or keyboard focus. Built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or CSS class toggling).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI where the redaction marker remains deeply black/dark to maintain the physical metaphor.
- **Component Architecture (Documented in Code)**: 
  - **Color Matching Technique**: The redaction effect is achieved without complex overlays or pseudo-elements. The background of the `.redacted` span is set to the marker color (e.g., black). Crucially, the text `color` is also set to that *exact same* marker color, rendering it invisible.
  - **The Reveal**: On `:hover` or `:focus-visible`, we simply transition the text `color` to a contrasting color (e.g., white), leaving the background black. This creates a smooth fade-in reveal effect over the dark background block.
- Fully accessible semantic structure. The redacted spans use `tabindex="0"` to ensure they are reachable via keyboard navigation. They also utilize `aria-label` to provide context to screen readers ("Redacted text. Hover to reveal."). Honors the `prefers-reduced-motion` accessibility standard by disabling the color fade transition and instantly revealing the text for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover over the blacked-out text blocks, or navigate through them using the `Tab` key, to reveal the hidden classified information.

## Files
- `demo.html`: The HTML structure containing the simulated document layout and the `.redacted` spans.
- `style.css`: The styling, CSS Custom Property theming blocks, and the color-matching transition logic.
