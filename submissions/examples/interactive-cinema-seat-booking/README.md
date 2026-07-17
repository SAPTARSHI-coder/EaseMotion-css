# Interactive Cinema Seat Booking Layout

An interactive and fully responsive Cinema Seat Booking example built with modern HTML5, CSS Grid, custom CSS custom properties (variables), and dynamic transitions. This toolkit combines beautiful UI layouts with micro-interactions, showcasing the capabilities of the EaseMotion CSS library in real-world application components.

## Feature Overview

- **Dark Glassmorphism Interface**: A high-fidelity, translucent booking card container overlaying subtle radial light source gradients.
- **Curved Glowing Screen**: A stylized projection screen with an active neon glow utilizing a pulsing animation loop.
- **Dynamic Seating Matrix**: Clean grid alignment mapping rows A-H with realistic column walkways (2-4-2 split).
- **Multi-State Seat Logic**: Visual tracking of seat availability:
  - **Available**: Soft border style indicating clickability.
  - **Selected**: Accent gradient background with a custom 3D flip animation.
  - **Occupied**: Muted, low opacity, and unclickable status.
  - **VIP Seats**: Dedicated golden glow/border with individual price surcharge logic.
- **Real-Time Price & Ticket Counter**: Instantly updates totals based on movie base prices and VIP surcharges.
- **Booking Summary Drawer**: Slide-up transition panel appearing dynamically upon selecting seats.
- **Success Receipt Modal**: Overlay details showing final ticket receipt with decorative barcode graphics.
- **Fully Responsive**: Fluid scaling down to 320px screen width using CSS `clamp()` and media query break-points.

## Animation Showcase

1. **Staggered Row Fade-in**: Row-by-row delay entrance transitions on page load, created using custom properties calculating row index delays (`animation-delay: calc(var(--row-index) * 0.12s)`).
2. **Screen Glow Pulse**: A keyframe animation pulsing box-shadow depths to simulate light emission from the cinema screen.
3. **Seat 3D Flip**: Clicking a seat flips it on the Y-axis (`rotateY(180deg)`) using a spring-like cubic bezier.
4. **Summary Drawer Slide-up**: Animates the transformation matrix (`translateY(100%)` to `translateY(0)`) to reveal selected ticket summaries.
5. **Micro Hover scale**: Smoothly translates and scales active seats when the user hovers over them.

## File Structure

```
submissions/examples/interactive-cinema-seat-booking/
├── demo.html
├── style.css
└── README.md
```

## How to Use

1. Open `demo.html` in any modern web browser.
2. Select a Movie (e.g. *Dune: Part Two*) and Showtime from the header controls.
3. Click on any **Available** (light border) or **VIP** (golden border) seat to select it.
4. Watch the seat flip and the **Selected Seats** drawer slide up from the bottom showing real-time price updates.
5. Click **Book Ticket(s)** to view the success confirmation modal containing your final receipt and barcode.
6. Click the close icon (`&times;`) or "Enjoy Your Movie!" to reset your choices and return to the main interface.

## Customization

### Changing Base Movie Prices
To change movie pricing or titles, update the `<option>` values inside `demo.html`:
```html
<select id="movie-select">
  <option value="20" data-title="New Movie">New Movie ($20)</option>
</select>
```

### Modifying VIP Surcharges
To modify the surcharge for VIP rows, adjust the JS calculation inside `demo.html`:
```javascript
const surcharge = type === 'vip' ? 5 : 0; // Change 5 to your desired surcharge amount
```

### Color Palette Theme
You can completely customize the neon theme by modifying the CSS variables inside `style.css`:
```css
:root {
  --bg-color: #070913;
  --accent-color: #00f2fe; /* Cyan neon */
  --selected-gradient: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); /* Selected seat color */
}
```

## Alignment with EaseMotion CSS

EaseMotion CSS focuses on premium, interactive, and responsive animation transitions. This cinema toolkit showcases:
- How CSS custom properties can orchestrate complex animations (like row stagger delays).
- Using 3D rotations (`rotateY`) and keyframe transitions to create interactive feedback loops.
- Delivering accessibility support by using semantic markup and high contrast focus outline options.
