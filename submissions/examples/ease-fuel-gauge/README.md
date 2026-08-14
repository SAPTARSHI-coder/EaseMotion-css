# ⛽ Fuel Gauge – Fills Up Like a Gas Tank

An interactive fuel gauge component that simulates filling and draining a gas tank with smooth animations, real-time feedback, and playful interactions. Built with vanilla HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic gas tank visualization** – 3D-style tank with fuel fill, surface wave, and decorative elements
- **Interactive controls** – Fill Up, Empty, Half, and Random buttons for instant fuel adjustments
- **Drag-to-adjust slider** – Smoothly control fuel level with a custom slider
- **Smooth animations** – Spring-like transitions with bounce effects for a satisfying feel
- **Status feedback** – Real-time contextual messages based on fuel level (empty, low, full, etc.)
- **Fuel history** – Visual history bar showing the last 20 fuel level changes
- **Keyboard shortcuts** – F (Fill), E (Empty), H (Half), R (Random)
- **Double-click interaction** – Double-click the tank to fill up
- **Responsive design** – Adapts seamlessly to mobile, tablet, and desktop
- **Color-coded feedback** – Fuel color transitions from green to yellow to red as level changes

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the fuel gauge:
   - Click the **Fill Up** button to watch the tank fill with a fun step-by-step animation
   - Click **Empty** to drain the tank
   - Click **Half** to set fuel to 50%
   - Click **Random** for a surprise fuel level
   - Drag the **slider** to manually adjust fuel level
   - **Double-click** the tank body to fill up
   - Use **keyboard shortcuts**: `F` (Fill), `E` (Empty), `H` (Half), `R` (Random)
3. Watch the status bar for real-time feedback and the history bar for recent fuel changes.

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, tank design, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Fuel state** – Internal `currentFuel` variable tracks the fuel level (0–100%)
- **Animations** – Uses `requestAnimationFrame` with easing curves for smooth transitions
- **Fill animation** – Multi-step process simulating real fuel pumping
- **Surface wave** – A subtle wave effect on the fuel surface that moves based on fuel level
- **History tracking** – Stores the last 20 fuel changes and displays them as colored dots
- **Color mapping** – Fuel color shifts from green (high) to yellow (medium) to red (low)
- **Status system** – Dynamic messages based on fuel percentage thresholds

## 🎨 Customization

You can easily customize the fuel gauge:

| Parameter | Description | Default |
|-----------|-------------|---------|
| Tank size | Width/height in CSS | 180px × 280px |
| Fuel colors | Gradient in `.fuel-fill` | Yellow-orange-red gradient |
| Animation speed | Duration in `animateToFuel()` | 800ms |
| History length | Number of history items stored | 20 |
| Status thresholds | Fuel level ranges for messages | 0%, 25%, 50%, 75%, 100% |

### Color Customization

Modify the fuel fill gradient in `style.css`:

```css
.fuel-fill {
  background: linear-gradient(180deg, 
    #f9d976 0%,   /* top - light yellow */
    #f39c4b 20%,  /* orange */
    #e87a3a 50%,  /* dark orange */
    #d45a2a 75%,  /* red-orange */
    #b84a1a 100%  /* bottom - deep red */
  );
}