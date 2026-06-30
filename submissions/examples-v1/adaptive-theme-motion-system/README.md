# Adaptive Theme Motion System

### 1. What does this do?

This is an interactive dashboard demonstrating a responsive, accessibility-aware, and theme-dependent motion system. It showcases how animation parameters (such as duration, timing-function, and translation travel distance) can adapt dynamically to Dark, Light, and Vestibular-Safe modes, as well as Mobile, Tablet, and Desktop display form-factors.

### 2. How is it used?

Open `demo.html` directly in any modern web browser to access the dashboard:

- **Theme Toggles**: Switch between Dark Mode (deep, glowing ambient transitions), Light Mode (fast, high-contrast structural translations), and Safe Mode (which enforces static/vestibular-safe layouts).
- **Responsive Simulator**: Select Mobile, Tablet, or Desktop simulation. Watch the travel offsets and speeds adjust automatically (e.g. Mobile scales down translation to avoid screen rattle on small touch screens).
- **Visualizer Mockups**: Interact with the preview UI components (mock notifications, flex grids, list elements) to test hover and transition timings.
- **Code Template Panel**: Copy the generated CSS custom variables and media query structures directly into your project.

### 3. Why is it useful?

It addresses a common design gap: treating all screens and user preferences as having the exact same animation properties. By introducing responsive motion scaling (adjusting travel offsets depending on device width) and accessibility integrations (disabling or fading animations for vestibular conditions), it models clean, production-ready frontend practices dogfooding EaseMotion CSS tokens.
