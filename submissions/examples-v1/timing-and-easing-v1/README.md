#  Timing and Easing: A Visual Guide

Welcome to the visual reference guide for EaseMotion CSS! 

Great animation is what transforms standard web development into an exceptional UI/UX experience.Here is a breakdown of how and when to use our `ease-duration-*` and `ease-delay-*` utility classes to craft a polished user interface.

##  Durations (`ease-duration-*`)
How long should an animation actually take? Here is the breakdown:

* **`ease-duration-fast`**: Snappy and immediate. Throw this on micro-interactions like button hovers, toggles, or tooltips. It keeps your app feeling incredibly responsive so users never feel like they're waiting around.
* **`ease-duration-medium`**: Your bread-and-butter default. It's perfect for standard UI transitions like opening dropdown menus or expanding accordions. It just feels natural—not too rushed, but not sluggish either.
* **`ease-duration-slow`**: Save this for the big, dramatic moments. Think large layout changes, modals sliding into view, or page transitions. 

##  Delays (`ease-delay-*`)
Sometimes, the best thing an animation can do is wait a split second before starting. We've included delay options ranging from `75ms` all the way up to `700ms`. 

**When to use delays:**
* **The "Waterfall" Effect:** If multiple elements enter the screen at once, try staggering them (e.g., 100ms, 200ms, 300ms). It creates a cascading effect that naturally guides the user's eye down the page.
* **Hiding Accidental Hovers:** Put a tiny delay (like 75ms) on hover states or loading spinners. This stops them from flashing on the screen if a user accidentally swipes their mouse across an element.
* **Building Visual Hierarchy:** Delaying a subtitle so it appears just a fraction of a second *after* your main headline is a great trick to establish focus. 

##  See it in Action
Want to see how these actually look on a timeline? Open up `demo.html` in your browser. Hover over the tracks to trigger the animations and visually compare how the different classes affect the timeline!