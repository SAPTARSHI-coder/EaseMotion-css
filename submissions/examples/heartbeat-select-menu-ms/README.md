# Heartbeat Select Menu

Resolves #42375.

### What does this do?
Adds a Heartbeat Select Menu component to EaseMotion CSS. This select dropdown utilizes a hidden checkbox hack (`#select-toggle`) to open and close the options menu. The trigger button features a double-pulse `heartbeat` keyframe animation to subtly draw the user's attention, which stops as soon as the menu is interacted with.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. 

*Note: In a pure CSS environment without JS, updating the selected value text dynamically on click is quite hacky (using `content` swaps based on checked radios). This demo provides the pure CSS interactive dropdown behavior and styling. To update the displayed "Premium Plan" text, minimal JS is generally recommended, but the dropdown itself requires 0 JS.*

### Why is it useful?
Provides an engaging CTA (Call To Action) select menu. The heartbeat animation makes the input field feel alive, which is highly effective in Creative Agency landing pages or pricing tiers to draw the eye towards conversions.
