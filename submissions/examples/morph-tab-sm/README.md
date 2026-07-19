# Morph Tab

A pure CSS cyberpunk tab component for dashboards, command centers, and creative
portfolio sections. Native radio inputs hold the active state while the active
indicator morphs between tabs without JavaScript.

Resolves Issue: #42602

## Features

- Pure CSS implementation with no JavaScript.
- Uses `ease-*` class names plus `ease-morph-*` keyframes, variables, and
  selectors.
- Native form controls power the selected state.
- Keyboard-friendly labels and focus-visible styling.
- Responsive tab and panel layout for small screens.
- Reduced-motion support that removes indicator and panel transitions.

## Usage

```html
<input
  class="ease-morph-radio"
  type="radio"
  name="ease-morph-tabs"
  id="ease-tab-design"
  checked
/>
<label
  class="ease-morph-tab ease-morph-tab-design"
  role="tab"
  for="ease-tab-design"
>
  Design
</label>
```

The active panel and indicator are controlled with sibling selectors:

```css
#ease-tab-design:checked ~ .ease-morph-panels .ease-morph-panel-design {
  opacity: 1;
  transform: translateY(0) scale(1);
}
```

## Files

- `demo.html` - self-contained live demo with three tab states.
- `style.css` - cyberpunk theme, morphing indicator, panel transitions, and
  responsive/reduced-motion rules.
- `README.md` - usage and accessibility notes.

## Accessibility

The demo uses native radio inputs so keyboard users can move through options
without JavaScript. Labels expose clear names, visible focus rings are included,
and decorative motion is disabled when users request reduced motion.
