# Modal Fade Scale

## Description
A clean modal component that fades in and scales up from a reduced size when opened. The overlay backdrop fades in simultaneously while the modal box smoothly transitions from a scale of `0.9` to `1`, creating a polished, modern reveal effect. Clicking the backdrop or the close button dismisses the modal with the reverse animation.

## Files
- `demo.html`: Contains the page layout, modal overlay (`.mfs-overlay`), modal box (`.mfs-modal`), trigger button, and JavaScript to toggle the `.mfs-open` class.
- `style.css`: Defines CSS custom properties for timing, colors, and scale, then applies transitions on the overlay and modal. The `.mfs-open` class drives the visible state.

## How to use
1. Open `demo.html` in your browser and click "Open Modal" to see the animation.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Use a `.mfs-overlay` as the fixed full-screen backdrop.
   - Inside it, place a `.mfs-modal` containing your content.
   - Add a trigger button and a close button with event listeners.
4. **Customization:**
   - **Timing:** Adjust `--mfs-overlay-duration` and `--mfs-modal-duration` in `:root` to change animation speed.
   - **Scale:** Change `--mfs-scale-from` to alter the starting scale (e.g. `0.85` for a more dramatic pop).
   - **Colors:** Modify `--mfs-overlay-bg` for the backdrop or `--mfs-modal-bg` for the modal surface.
   - **Easing:** The modal uses `cubic-bezier(0.22, 1, 0.36, 1)` — replace it with any easing function.

## Features
- Smooth fade + scale animation on open and close
- Backdrop dismiss — click outside the modal to close
- Fully customizable via CSS custom properties
- Pure CSS transitions powered by a single `.mfs-open` class toggle
- Lightweight and dependency-free

## Use Cases
- Alert and confirmation dialogs
- Login / sign-up forms
- Image or media lightboxes
- General information overlays
- Onboarding or feature announcements
