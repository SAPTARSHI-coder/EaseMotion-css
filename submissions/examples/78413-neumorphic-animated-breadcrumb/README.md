# Animated Breadcrumb with Neumorphism Styling

A responsive breadcrumb navigation component featuring a soft neumorphic
visual design, smooth interactions, clear hierarchy, and multiple
responsive variations.

## Features

- Neumorphic breadcrumb navigation
- Smooth hover animation
- Press interaction
- Active/current page styling
- Home icon treatment
- Two additional breadcrumb variants
- Responsive layout
- Semantic `<nav>` and ordered list structure
- `aria-label` and `aria-current` support
- Keyboard-visible focus states
- `prefers-reduced-motion` support
- Pure HTML and Vanilla CSS
- No JavaScript or external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

Update the breadcrumb labels and links to match the page hierarchy of
your application.

Example:

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li>
      <a href="/">Home</a>
    </li>
    <li aria-hidden="true">/</li>
    <li>
      <a href="/projects">Projects</a>
    </li>
    <li aria-hidden="true">/</li>
    <li aria-current="page">
      Current Page
    </li>
  </ol>
</nav>