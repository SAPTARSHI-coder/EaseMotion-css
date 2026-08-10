# Expanding Search Bar

A minimal search icon that expands smoothly into a full text input field when hovered or focused.

## Preview

Open `demo.html` in your browser and hover over or click on the search icon to see the expansion effect.

## Implementation Details

- **No JavaScript:** The interaction is powered entirely by the `:hover` and `:focus-within` pseudo-classes.
- **CSS Transitions:** Uses a `cubic-bezier` timing function to transition the container's width, giving it a slightly springy feel. The text input's opacity fades in as the container expands.
- **Pure CSS Icon:** The magnifying glass icon is built without external assets, using a `border-radius` circle and a rotated `::after` pseudo-element for the handle.
