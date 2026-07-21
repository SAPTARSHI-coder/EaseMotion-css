# CSS Fade-In Popover for SaaS Showcase Layouts

A modern, responsive **pure CSS fade-in popover** designed for SaaS pricing cards, upgrade prompts, and feature showcases.

## Features

- Pure HTML & CSS
- Smooth fade + scale animation
- CSS Custom Properties for easy customization
- Keyboard accessible (`:focus-within`)
- Responsive layout
- No JavaScript required

## Files

```
demo.html
style.css
README.md
```

## Customization

The following CSS variables can be modified inside `:root`:

```css
--popover-bg
--popover-text
--primary
--primary-hover
--popover-width
--fade-duration
--fade-easing
--popover-scale
--popover-offset
```

## Accessibility

- Keyboard friendly
- Semantic HTML
- Uses `aria-describedby`
- Uses `role="dialog"` for the popover content

## Preview

The demo displays a SaaS pricing card with an **Upgrade to Pro** button. Hovering or focusing on the button reveals a smooth fade-in popover highlighting premium features and a call-to-action.

## Browser Support

Works in all modern browsers supporting:

- CSS Variables
- Flexbox
- CSS Transitions
- `:focus-within`

## License

Part of the EaseMotion CSS examples collection.
