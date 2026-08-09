# CSS Radio Station Tuner


An advanced, high-performance UI component built completely with pure CSS, tailored specifically for retro analog panels, audio gear showcases, and modern tech portfolios. Features an animated frequency slider needle sweeping across a calibrated scale.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS keyframe timelines and custom properties.
- **Retro Frequency Dial:** Features a calibrated analog frequency ruler paired with a glowing slider needle (`@keyframes em-dial-sweep`) mimicking vintage radio frequency modulation.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(20px)`), glowing amber highlights, and a digital frequency readout.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA landmarks and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override that centers the needle for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #f59e0b;            /* Needle & readout accent color */
    --em-speed: 6s;                   /* Dial sweep duration */
}

A retro radio frequency tuner dial built entirely with CSS, featuring a glowing interface, horizontal scrolling functionality, and a fixed needle indicator.

## What does this do?

It provides a pure CSS implementation of an analog radio frequency tuner dial with a scroll-snapping horizontal frequency band.

## How is it used?

```html
<div class="radio-tuner" role="region" aria-label="Radio Tuner">
    <div class="tuner-window">
        <div class="tuner-glass"></div>
        <div class="tuner-needle"></div>
        <div class="tuner-scroll-area" tabindex="0" aria-label="Scroll to tune">
            <div class="tuner-frequencies">
                <div class="freq-band"></div>
                <div class="freq-marks">
                    <div class="mark long"><span>88</span></div>
                    <div class="mark short"></div>
                    <div class="mark medium"></div>
                    <div class="mark short"></div>
                    <div class="mark long"><span>92</span></div>
                    <!-- Add more marks as needed -->
                </div>
            </div>
        </div>
    </div>
    <div class="tuner-label">FM TUNING</div>
</div>
```

## Why is this useful?

This component expands the library's collection of ready-to-use CSS animations and UI components, helping front-end developers implement this pattern without relying on JavaScript libraries. It utilizes pure CSS scroll-snapping and a horizontal scroll area to simulate tuning a physical radio dial.

