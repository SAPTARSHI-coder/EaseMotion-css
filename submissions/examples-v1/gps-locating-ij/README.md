# GPS Locating

1. What does this do? A location pin marker that bounces up and down while expanding ring pulses (concentric circles) radiate outward to simulate GPS signal searching. Includes a "locked" variant with green coloring where animation stops.

2. How is it used? Add a `.gps-icon` container with `.pin-body`, `.pin-dot`, `.pin-shadow`, and `.gps-ring` elements (.r1, .r2, .r3). The pin bounce is driven by `@keyframes pin-bounce` and rings expand via `@keyframes ring-expand` with staggered delays.

3. Why is it useful? GPS/location loading states are common in maps, ride-sharing, and delivery apps. The combination of pin bounce and expanding rings gives clear feedback that the device is actively searching for a location fix.
