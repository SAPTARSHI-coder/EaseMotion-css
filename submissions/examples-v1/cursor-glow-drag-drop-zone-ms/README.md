# Cursor Glow Drag Drop Zone

Resolves #42398.

### What does this do?
Adds a Cursor Glow Drag Drop Zone component to EaseMotion CSS tailored for Creative Agency interfaces. It uses a pure CSS radial gradient paired with `ease-pulse` that fades in on hover to simulate a glowing light source following the cursor inside the drop area.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. It works perfectly on dark backgrounds. The invisible `<input type="file">` handles native file drops perfectly over the entire zone.

### Why is it useful?
Provides an aesthetic glowing highlight effect without needing JavaScript to track mouse `clientX`/`clientY` coordinates. This keeps the component extremely lightweight while still delivering a premium, creative feel.
