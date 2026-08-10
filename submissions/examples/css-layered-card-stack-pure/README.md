# CSS Layered Card Stack

A 3D depth illusion created using pure CSS transforms (translate and scale), opacity gradients, and staggered box-shadows. Hovering over the stack smoothly fans the cards out to reveal the hidden layers beneath.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or physics).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI. Importantly, the dark mode heavily amplifies the `box-shadow` alphas, as shadows must be much darker to create the illusion of depth against a dark background.
- **Component Architecture (Documented in Code)**: 
  - **The Initial State (The Illusion of Depth)**: The stack effect is created by absolutely positioning three cards on top of each other. 
    - The top card (`z-index: 3`) sits at `translateY(0)` and `scale(1)`.
    - The middle card (`z-index: 2`) is pushed down (`translateY(16px)`), scaled down slightly (`scale(0.92)`), and given a lower opacity (`0.8`).
    - The bottom card (`z-index: 1`) is pushed further down (`translateY(32px)`), scaled down further (`scale(0.84)`), and given the lowest opacity (`0.5`).
    - This combination of scaling and opacity fading accurately simulates atmospheric perspective (ambient occlusion).
  - **The Hover Trigger (Stable Interaction)**: The hover state is attached to the parent `.card-stack` container, *not* the individual cards. This guarantees that as the cards move during the animation, the user's mouse doesn't accidentally slip off a moving target, which would cause frustrating animation stuttering.
  - **Custom Easing**: The `transform` transition utilizes a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` curve to create a satisfying, weighty "spring" effect as the cards fan out.
- Fully accessible semantic structure. The underlying background cards are hidden from screen readers via `aria-hidden="true"`, as they are purely decorative previews. The top, primary card receives keyboard focus (`tabindex="0"`) and has an explicit `aria-label` describing the content and interaction instructions. Honors the `prefers-reduced-motion` accessibility standard by disabling the physical `transform` movement on hover, instead opting to simply fade the underlying cards to full opacity.

## Usage
Open `demo.html` in your browser. Hover over the stack of cards (or use the `Tab` key to focus the top card) to trigger the fanning animation.

## Files
- `demo.html`: The HTML structure containing the stable `.card-stack` wrapper and the three layered cards.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented 3D transform depth logic.
