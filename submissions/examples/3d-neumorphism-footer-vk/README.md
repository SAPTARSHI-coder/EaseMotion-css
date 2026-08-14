# 3D Neumorphic Footer

A responsive 3D footer built with pure HTML and vanilla CSS, featuring soft neumorphic depth, layered shadows, tactile interactions, and a clean responsive layout.

## Features

- 3D neumorphic visual styling
- Fully responsive across screen sizes
- Pure HTML and vanilla CSS
- No JavaScript required
- No external dependencies
- Soft raised and inset shadow effects
- Interactive hover and pressed states
- Keyboard-accessible focus states
- Dark mode support through CSS media queries
- Reduced-motion support
- Hardware-accelerated transforms

## Usage

Include the stylesheet in your HTML:

    <link rel="stylesheet" href="style.css">

Then add the footer component:

    <footer class="neo-footer">
      <div class="footer-inner">

        <div class="footer-brand">
          <div class="brand-mark" aria-hidden="true">E</div>

          <div>
            <h2>EaseMotion</h2>
            <p>Thoughtful motion, crafted with pure CSS.</p>
          </div>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div class="footer-social">
          <a href="#" aria-label="GitHub">GH</a>
          <a href="#" aria-label="LinkedIn">IN</a>
          <a href="#" aria-label="Twitter">TW</a>
        </div>

      </div>

      <div class="footer-bottom">
        <span>© 2026 EaseMotion CSS</span>
        <span>Built with HTML &amp; CSS</span>
      </div>
    </footer>

## Why It Is Useful

Footers are commonly treated as static page elements, but they can still provide useful visual hierarchy and interaction feedback.

This variation uses neumorphic depth and subtle 3D movement to make navigation and social controls feel tactile while keeping the implementation lightweight and dependency-free.

## Design Details

The component combines:

- Layered outer shadows for raised surfaces
- Inset shadows for pressed states
- Subtle 3D hover movement
- Rounded surfaces for a soft neumorphic appearance
- Responsive grid-to-column layout
- CSS custom properties for easy customization
- Dark-mode-aware color and shadow variables

## Accessibility

Interactive links include visible `:focus-visible` states to support keyboard navigation.

The component also respects the user's `prefers-reduced-motion` preference by reducing transitions and scrolling animation when requested.

## Responsive Behavior

The footer uses a responsive grid layout on larger screens and switches to a single-column layout on smaller screens.

Navigation links adapt to available space, while the footer content remains readable and accessible across different viewport sizes.

## Browser Support

The component uses standard HTML and CSS features and is designed for modern browsers.

## Dependencies

None.

## License

Part of the EaseMotion CSS submissions collection.