# CSS Group Chat Header

## Description
A highly professional, pure CSS group chat header. It features an overlapping avatar group with an expansion hover animation, a pulsing online status dot, and accessible SVG action buttons. Created for Issue #70263.

## Features
- **Pure CSS:** No JavaScript required for interactions.
- **Accessible:** Includes semantic HTML, `aria-labels`, and `tabindex="0"` for keyboard navigation.
- **Smooth Animation:** CSS keyframes handle the pulsing online dot and hover expansions.
- **Reduced Motion Support:** Respects `prefers-reduced-motion` to immediately display elements without hover scaling or pulsing.

## Usage
Add the header structure to your chat layout container.

```html
<header class="ease-group-chat-header">
    <!-- Back Button -->
    <!-- Group Info (Avatars & Text) -->
    <!-- Action Buttons -->
</header>
```
