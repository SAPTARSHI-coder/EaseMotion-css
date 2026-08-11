# Input Focus Ring Pulse

1. What does this do? An input focus ring that does a single pulse — the box-shadow expands outward then settles back to a normal ring size — drawing attention on focus.

2. How is it used? Add a `.pulse-input` element. On `:focus`, the `focus-pulse` keyframe animation runs once (0.4s ease-out): the box-shadow expands to 6px then settles to 3px.

3. Why is it useful? It provides enhanced focus feedback compared to a static ring — the subtle one-shot pulse draws the user's eye to the focused input without being distracting or continuous.
