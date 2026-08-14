# CSS Waveform Background

A pure CSS animated audio waveform background featuring glowing bars that continuously pulse like an audio visualizer.

## Features

- Pure HTML and CSS
- No JavaScript
- Animated waveform bars
- Smooth pulsing motion
- Glowing audio-inspired visual effect
- Responsive design
- Customizable colors and animation speed
- `prefers-reduced-motion` support

## Usage

Include the stylesheet:

    <link rel="stylesheet" href="style.css">

Then add the waveform markup:

    <div class="waveform" aria-hidden="true">
      <span style="--i:1"></span>
      <span style="--i:2"></span>
      <span style="--i:3"></span>
      <span style="--i:4"></span>
      <span style="--i:5"></span>
      <!-- Continue adding waveform bars -->
    </div>

Place the waveform inside a container with your desired content.

## Customization

Change the waveform color:

    :root {
      --wave: #67e8f9;
    }

Change the glow:

    :root {
      --wave-glow: rgba(103, 232, 249, 0.45);
    }

Change the animation speed:

    .waveform span {
      animation-duration: 1.35s;
    }

## How It Works

Each waveform bar is represented by a `<span>` element.

CSS keyframes continuously scale the bars vertically:

    @keyframes waveform-pulse {
      0% {
        transform: scaleY(0.45);
      }

      50% {
        transform: scaleY(1);
      }

      100% {
        transform: scaleY(0.6);
      }
    }

Different bar heights and animation delays create the appearance of an audio waveform.

No JavaScript or external libraries are required.

## Accessibility

The waveform is decorative, so the waveform container uses:

    aria-hidden="true"

This prevents individual animated bars from being announced by assistive technologies.

The animation also respects the user's reduced-motion preference.

## Reduced Motion

When `prefers-reduced-motion: reduce` is enabled, the waveform animation is disabled and the bars remain static.

## Demo

Open `demo.html` directly in a browser.

No server or JavaScript is required.

## Browser Testing

- Microsoft Edge

## Why It Fits EaseMotion CSS

This example demonstrates how CSS transforms, keyframes, gradients, shadows, and custom properties can create an audio-inspired animated background without JavaScript.

It can be used for music interfaces, audio players, landing pages, dashboards, media applications, and other interactive UI designs.

## Files

- `demo.html` — Demo page
- `style.css` — Waveform styling and animation
- `README.md` — Documentation

## License

This example is part of the EaseMotion CSS project.