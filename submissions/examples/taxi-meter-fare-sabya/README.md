# Taxi Meter Fare

**What does this do?**
It is a CSS-only animated component that simulates a classic taxi meter with mechanical rolling fare digits and a blinking "HIRED" indicator lamp.

**How is it used?**
Wrap your meter structure inside the `ease-taxi-meter-fare-sabya` shell. The rolling digit animation is achieved using a vertically translating flex column inside a hidden overflow container, driven by CSS `@keyframes` and the `steps()` timing function.

**Why is it useful?**
It provides a highly recognizable, real-world motion metaphor (a rolling mechanical counter) that expands EaseMotion's library of UI controls without requiring any JavaScript.