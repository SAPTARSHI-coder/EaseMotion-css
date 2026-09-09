# Glass-Neumorphic Button

A pure CSS button component that hybridizes two popular UI trends: the frosted transparency of Glassmorphism and the tactile, soft extrusion of Neumorphism.

## Features
- Pure CSS and HTML implementation. No JavaScript required.
- **Component Architecture & Styling Mechanics**: 
  - **Glassmorphism Base**: Uses a semi-transparent `rgba(255, 255, 255, 0.35)` background coupled with `backdrop-filter: blur(12px)` to allow the underlying background elements (like animated color blobs) to bleed through as a frosted blur.
  - **Frosty Edges**: Achieved via an asymmetrical border. The top and left borders are highly opaque white `rgba(255, 255, 255, 0.9)` to simulate a light source reflecting off the top-left edge of the glass, while the bottom and right are less opaque.
  - **Neumorphic Extrusion**: Adds the soft UI extrusion using `box-shadow: 8px 8px 16px rgba(163, 177, 198, 0.8), -8px -8px 16px rgba(255, 255, 255, 0.9)`. The crucial technique here is that these shadows *must* be derived from the solid `body` background color behind the button to sell the illusion that the button is pushed out of the surface itself.
  - **Interactive Press (Inset)**: On `:active` and `:focus-visible`, the button presses inward. The `box-shadow` changes from `outset` to `inset`, and the asymmetrical border is reversed (the bottom-right becomes opaque) to simulate the light source hitting the inner cavity.
- Accessible semantic structure using the native `<button>` element. Supports keyboard navigation (`:focus-visible` outline) and the `prefers-reduced-motion` media query (disables blob animations and button transitions).

## Usage
Open `demo.html` in your browser. Notice how the background color blobs animate behind the button, becoming blurred by the glass filter. Click the button to experience the tactile Neumorphic inset shadow.

## Files
- `demo.html`: The HTML structure containing the background blobs and the button component.
- `style.css`: The styling, variables, hybrid glass-neu mechanics, and interaction states.
