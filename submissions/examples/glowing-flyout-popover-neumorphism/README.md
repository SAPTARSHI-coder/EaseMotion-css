
# Glowing Flyout Popover — Neumorphism

A responsive flyout popover component with glowing effects and soft neumorphic styling.

Built using pure HTML and CSS with zero JavaScript dependencies.

## Branch

```text
feat/glowing-flyout-popover-neumorphism
```

## Files

- `demo.html` — Accessible popover demonstration
- `style.css` — Neumorphic styles, animations, and responsive layout

## Features

- Pure HTML and CSS
- Zero JavaScript dependencies
- Neumorphic surface styling
- Glowing hover effects
- Smooth open and close transitions
- Responsive mobile, tablet, and desktop layout
- Native HTML Popover API
- Keyboard-accessible controls
- Visible keyboard focus styles
- prefers-reduced-motion support
- CSS custom properties for design tokens

## Usage

Open `demo.html` in a modern browser that supports
the HTML Popover API.

The trigger button uses the native popover attributes:

```html
<button
  popovertarget="info-popover"
  popovertargetaction="toggle"
>
  Show Details
</button>
```

The popover is connected using:

```html
<div id="info-popover" popover>
  Popover content
</div>
```

## EaseMotion Token Integration

The demo defines fallback custom properties:

```css
--ease-motion-fast
--ease-motion-normal
--ease-motion-slow
--ease-motion-spring
```

Map these to the repository's official EaseMotion
design tokens if equivalent variables already exist.

Avoid duplicating existing tokens.

## Accessibility

- Uses native HTML Popover API controls.
- Uses a semantic button for opening the popover.
- Includes a close button.
- Supports Escape to close the popover.
- Provides visible :focus-visible styles.
- Uses readable text and sufficient contrast.
- Includes prefers-reduced-motion support.
- Uses responsive sizing for smaller screens.

## Browser Compatibility

Test the HTML Popover API and CSS transition
features against the repository's supported browser
matrix.

Confirm support for:

- Chrome
- Edge
- Firefox
- Safari

If older browsers are supported by the project,
provide an appropriate fallback or document the
minimum browser requirement.

## Verification Checklist

Before opening the pull request:

- [ ] Run formatter and linter.
- [ ] Run accessibility checks.
- [ ] Test opening and closing the popover.
- [ ] Test Escape key behavior.
- [ ] Test keyboard focus.
- [ ] Test reduced motion.
- [ ] Test mobile layout.
- [ ] Test tablet layout.
- [ ] Test desktop layout.
- [ ] Verify browser compatibility.
- [ ] Confirm EaseMotion token names.
- [ ] Add screenshots or screen recording.

## Pull Request

### Title

feat: add glowing neumorphic flyout popover

### Summary

Adds a responsive glowing flyout popover with
neumorphic styling using pure CSS and the native
HTML Popover API.

### Changes

- Added accessible popover trigger and close controls.
- Added neumorphic surfaces and soft shadows.
- Added glowing hover effects.
- Added open and close transitions.
- Added responsive layout.
- Added reduced-motion support.
- Added EaseMotion token integration notes.

### Testing

- [ ] Manual browser testing
- [ ] Accessibility testing
- [ ] Reduced-motion testing
- [ ] Responsive layout testing
- [ ] Cross-browser verification

### Screenshots

Add screenshots or a short screen recording
before submitting the pull request.
