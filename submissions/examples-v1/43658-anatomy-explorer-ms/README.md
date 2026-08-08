# Component Anatomy Explorer

Resolves #43658.

### What does this do?
Provides an interactive "hotspot" UI that allows users to hover over parts of a complex component (like a card or button) to reveal the specific EaseMotion classes used to build it.

### How is it used?
Wrap your target component in `.ease-anatomy-stage`. Place `.ease-hotspot` markers with adjacent `.ease-tooltip` elements positioned relative to the target elements. CSS handles the hover reveal and pulsing animations.

### Why is it useful?
Visual learners benefit greatly from seeing exactly how utility/semantic classes compose a larger UI element. This anatomy explorer makes documentation interactive and exploratory.
