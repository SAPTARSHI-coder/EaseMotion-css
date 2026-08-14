# CSS Chat Bubble Variants

A collection of pure CSS chat bubble designs including rounded iOS-style, flat corporate, minimal outlined, and oversized emoji variants. Built entirely without JavaScript or external SVGs.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with adjusted bubble colors for optimal contrast.
- **Component Architecture (Documented in Code)**: 
  - **CSS Shapes for Tails**: The most complex variant (the rounded iOS style) creates its smooth, curved tail using a combination of `border-radius` and pseudo-elements. 
    - `::before` is positioned at the bottom corner and colored to match the bubble, creating the bulk of the tail.
    - `::after` is positioned over the `::before` element and colored to match the *background* of the chat interface, carving out a curved negative space to create the final sharp tip.
  - **Flat Triangles**: The flat corporate variant uses a simpler technique, utilizing transparent CSS borders on a `::before` pseudo-element to draw a sharp triangle attached to the top corner of the bubble.
  - **Variant Classes**: The CSS is architected using a base `.bubble` class for shared typography and padding, with specific modifier classes (`.variant-rounded`, `.variant-flat`, `.variant-minimal`) handling the unique tail and border stylings.
- Accessible semantic structure. Uses standard HTML flow and explicit `aria-label` tags for the emoji-only bubbles so screen readers can interpret the icons correctly.

## Usage
Open `demo.html` in your browser to view the different chat bubble styles in a mockup interface. 

## Files
- `demo.html`: The HTML structure containing the various bubble variants and their sent/received states.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented CSS Shapes techniques for drawing the bubble tails.
