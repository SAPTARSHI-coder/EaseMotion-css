# Scale Badge Component

Resolves #42388.

### What does this do?
Adds a Scale Badge component to EaseMotion CSS tailored for Glassmorphism interfaces. The badge features an infinite `ease-in-out` scaling animation (`badge-scale`) along with a radiating pulse ring (`badge-ring`) that draws attention to the badge's status (e.g. "PRO", "LIVE", "NEW").

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. It's intended to be absolutely positioned relative to a parent container (like an avatar or an icon box). The surrounding glass card utilizes `backdrop-filter: blur()`.

### Why is it useful?
Provides an eye-catching micro-animation for important status indicators. When users upgrade to premium or have unread notifications, a scaling badge ensures the status is not missed.
