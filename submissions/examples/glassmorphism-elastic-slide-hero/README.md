# CSS Elastic-Slide Hero Section (Glassmorphism UI)

A stunning, pure CSS interactive hero slider designed for Glassmorphism UI Layouts. It features animated background orbs and a highly dynamic, rubber-band "Elastic-Slide" transition for both the marketing copy and the visual mockups.

## Features
- Pure CSS and HTML (No JavaScript required for state management or slider logic).
- **Glassmorphism Aesthetic**: Deep backgrounds contrasted with floating `.bg-orb` elements. The orbs are heavily blurred (`filter: blur(80px)`) and animated using a slow `float` keyframe to create a dynamic, ambient depth.
- The slider visual panels (`.glass-card`) utilize `backdrop-filter: blur(16px)` to create a premium frosted-glass effect that allows the moving orbs to bleed through.
- **The Elastic-Slide Effect**: State is managed via the hidden radio-button hack (`input[type="radio"]:checked`). 
- When a slide is selected via the dot controls, the `.slider-track` translates on the X-axis (`translateX(-33.33%)`, etc.). 
- The magic happens in the `transition` timing function. By using a custom `cubic-bezier(0.34, 1.56, 0.64, 1)`, the track vastly overshoots its target position before snapping back, creating a rubber-band/elastic bounce effect exclusively using CSS math.
- The marketing text (`.slide-text`) also syncs with this state change, utilizing absolute stacking and the same elastic cubic-bezier to create a bouncy fade-in-up entrance that perfectly mirrors the visual track's momentum.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the ambient orb float animations are frozen, and the aggressive elastic cubic-bezier is stripped, replacing the bouncy slide with a safe, simple, linear transition.

## Usage
Open `demo.html` in your browser. You will see a modern landing page hero section with ambient floating background colors. Click the pagination dots below the marketing text. Watch as the massive glass mockup card slides to the next panel, bouncing elastically past its target before settling. Notice how the text synchronously bounces upward into view.

## Files
- `demo.html`: The HTML structure, detailing the complex layout required to synchronize the text stack and the visual slider track via a single set of hidden radio buttons.
- `style.css`: The styling, background orb animations, frosted-glass mockups, and the custom `cubic-bezier` transition driving the elastic slide mechanics.
