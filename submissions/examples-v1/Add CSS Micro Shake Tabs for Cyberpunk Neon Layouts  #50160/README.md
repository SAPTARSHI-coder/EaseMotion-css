# CSS Micro Shake Tabs - Cyberpunk Neon Aesthetic

A highly stylized, pure CSS tab component featuring a tactical "Micro Shake" glitch interaction, designed heavily around a retro-futuristic Cyberpunk Neon aesthetic.

## Features

- **Micro Shake Interaction**: Employs a complex `@keyframes microShake` animation that rapidly translates the tab on the X and Y axes. 
  - **On Hover**: The tabs gently rumble, providing a tactile, high-tech feedback.
  - **On Active**: Clicking a tab triggers a heavier, focused glitch shake as it locks into its solid neon state.
- **Cyberpunk Neon Aesthetic**: 
  - **Glows & Shadows**: Utilizes `box-shadow` and `text-shadow` extensively to create bright, humming neon lights (cyan, hot pink, and warning yellow).
  - **Clipped Angles**: Leverages `clip-path` to cut off the corners of the tab labels, a staple of sci-fi UI design.
  - **CRT Grid**: Features a subtle background grid mimicking terminal monitors.
- **Flicker-In Panels**: The content panels utilize an advanced `@keyframes flickerIn` effect involving `hue-rotate`, `contrast`, and opacity fluctuations to mimic a screen powering on.
- **Pure CSS & Accessible**: Built on the visually-hidden radio button hack. Keyboard navigation natively shifts focus across the tabs, triggering the shake effect and a hot-pink focus ring.

## Custom Properties

Tweak the intensity of the glitch or adjust the neon color palette via the `:root` variables in `style.css`:

```css
:root {
  /* Cyberpunk Palette */
  --neon-cyan: #00f3ff;
  --neon-pink: #ff00a0;
  --neon-yellow: #fce205;
  --bg-dark: #07070a;
  
  /* Micro Shake Physics */
  --shake-duration: 0.25s; /* Speed of the glitch loop */
  --shake-distance: 3px;   /* Pixel distance of the translation */
}
```

## Usage

Open `demo.html` in your web browser. Hover over the `SYS_CORE`, `NET_LINK`, and `DATABANK` tabs to trigger the Micro Shake effect, and click them to observe the CRT flicker panel transition!
