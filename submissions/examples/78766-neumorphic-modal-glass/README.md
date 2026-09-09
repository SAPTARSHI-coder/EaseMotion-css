# Neumorphic Modal with Glassmorphism Styling

A responsive modal component combining soft neumorphic depth
with translucent glassmorphism surfaces.

Built with pure HTML and CSS.

## Features

- Responsive modal layout
- Neumorphic shadows
- Glassmorphism backdrop
- Frosted glass modal surface
- Smooth open and close transition
- CSS-only modal interaction
- No JavaScript dependency
- Keyboard-focusable links
- Accessible dialog structure
- Reduced-motion support
- Mobile-friendly layout

## Files

- `demo.html` — modal markup
- `style.css` — complete component styling

## How It Works

The modal uses the CSS `:target` pseudo-class.

Clicking `Open Modal` navigates to:

`#modal`

This makes the modal visible.

Clicking the close button or backdrop navigates back to:

`#`

which hides the modal.

## Customization

The main design variables are defined in `:root` inside
`style.css`.

You can customize:

- Background
- Accent colors
- Shadow intensity
- Border transparency
- Modal radius
- Glass transparency

## Accessibility

The component includes:

- Semantic dialog markup
- `aria-modal`
- `aria-labelledby`
- Descriptive labels
- Visible keyboard focus states
- Reduced-motion support