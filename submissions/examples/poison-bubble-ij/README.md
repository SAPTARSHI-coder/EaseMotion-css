# Poison Bubble

1. What does this do? Green toxic bubbles rise erratically from the bottom of the container with staggered animation durations and delays, simulating a poison/toxic status effect. A green skull icon reinforces the poison theme, and a subtle green box-shadow glow surrounds the card.

2. How is it used? Click "Poison" to add `.poisoned` class, which triggers `@keyframes bubble-rise` on 5 bubble elements with different sizes, durations (0.9-1.5s), and delays (0-1.2s) for erratic timing. The skull icon is built with CSS pseudo-elements (eye sockets and teeth).

3. Why is it useful? Poison/toxin status effects are common in game UIs. The erratic bubbling gives a distinctly "toxic" feel compared to regular bubbling, providing clear visual feedback for poison debuffs or hazardous area indicators.
