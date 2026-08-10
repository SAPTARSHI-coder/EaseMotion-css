# WiFi Pulse

1. What does this do? A wifi signal icon with concentric arc rings that pulse outward with staggered opacity animation. Three rings scale and fade sequentially, simulating signal transmission. Includes a "searching" variant with amber coloring.

2. How is it used? Add a `.wifi-icon` container with `.wifi-dot` and `.wifi-ring` elements (.r1, .r2, .r3). The rings use `border-top-color` and `border-right-color` on a transparent border to create arc shapes, rotated -45deg. Staggered `animation-delay` creates the cascading pulse.

3. Why is it useful? Wifi/connectivity status is a common UI pattern for network indicators, connection status, and loading states. The pulsing arcs give clear feedback that the device is actively transmitting or searching for a signal.
