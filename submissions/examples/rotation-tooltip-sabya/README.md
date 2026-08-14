### 1. What does this do?
This snippet implements a pure CSS tooltip that reveals itself using a combined fade-in, scale-up, and rotation animation when the user hovers over the parent element.

### 2. How is it used?
Wrap your trigger element (like a button) and the tooltip text inside a relative `.tooltip-wrapper`. The `.tooltip-content` uses CSS `transform` (scale and rotate) and `opacity` to animate smoothly on hover. No JavaScript is required.

### 3. Why is it useful?
It aligns perfectly with the EaseMotion CSS philosophy by delivering an engaging, physics-based micro-interaction (using a custom cubic-bezier timing function) entirely through CSS, removing the need for heavy JavaScript libraries.