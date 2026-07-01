# Magnetic Text Reveal

## What it does

Creates a magnetic slide effect where hovering over text causes the original text to slide out while a secondary message slides in from the opposite direction. Perfect for call-to-action buttons, navigation links, and interactive headings.

## How to use it

Add the class to any text element:

<h2 class="ease-magnetic-text">Hover Me →</h2>

## Variants

- ease-magnetic-text-left - Reveal slides in from right side
- ease-magnetic-text-fast - 0.2s transition (default is 0.4s)
- ease-magnetic-text-slow - 0.7s transition
- ease-magnetic-text-purple - Purple themed reveal text
- ease-magnetic-text-pink - Pink themed reveal text
- ease-magnetic-text-cyan - Cyan themed reveal text
- ease-magnetic-text-btn - Button version with gradient background
- ease-magnetic-text-custom - Custom reveal text using data-reveal attribute

## Custom Reveal Text

<span class="ease-magnetic-text-custom" data-reveal="Your message here">Hover over me</span>

## Accessibility

Respects prefers-reduced-motion by disabling the slide animation while still showing the reveal text.

## Why it fits EaseMotion CSS

- Pure CSS, zero JavaScript
- Smooth magnetic cubic-bezier easing
- Multiple color and speed variants
- Works on any text element (h1, h2, span, button)
- Customizable reveal messages