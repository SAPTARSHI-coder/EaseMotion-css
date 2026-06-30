# ease-gps-locating – GPS Location Pulse

A GPS locator animation: a pin bounces while concentric rings expand outward, simulating a device searching for a GPS fix.

## EaseMotion classes used

- **Layout:** ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-900
- **Typography:** ease-text-white, ease-text-lg
- **Animation:** ease-fade-in, ease-delay-500

## How it works

- Three ring elements scale from 1 to 6 and fade out at staggered intervals, creating a pulsing radar effect.
- The pin element gently bounces up and down.
- Both animations run on a 2-second loop and respect prefers-reduced-motion.

## How to use

1. Copy demo.html and style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
