# CSS 3D-Flip Carousel (Cyberpunk Neon)

A pure CSS, hardware-accelerated 3D flip carousel featuring a vibrant cyberpunk neon aesthetic. Built entirely without JavaScript, relying on the radio-button hack and CSS 3D transforms for smooth, interactive navigation.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript required.
- **3D Hardware Acceleration:** Uses `transform-style: preserve-3d` and `rotateY`/`translateZ` for buttery-smooth animations.
- **Cyberpunk Aesthetic:** Glowing neon borders, dark glassmorphism backdrops, and gradient text.
- **Responsive:** Adapts `translateZ` values on smaller screens to prevent overflow and maintain proportion.
- **Accessible:** Includes `prefers-reduced-motion` support to disable animations for sensitive users.

## 💻 Usage

```html
<main class="ease-carousel-wrapper">
    <!-- Radio Inputs (Hidden) -->
    <input type="radio" name="ease-carousel" id="slide-1" checked>
    <input type="radio" name="ease-carousel" id="slide-2">
    <input type="radio" name="ease-carousel" id="slide-3">

    <!-- 3D Scene -->
    <div class="ease-carousel-scene">
        <article class="ease-carousel-card ease-card--1">
            <h2>Slide 1</h2>
            <p>Content goes here.</p>
        </article>
        <!-- Add more cards (ease-card--2, ease-card--3) -->
    </div>

    <!-- Navigation -->
    <nav class="ease-carousel-nav">
        <label for="slide-1" class="ease-nav-dot"></label>
        <label for="slide-2" class="ease-nav-dot"></label>
        <label for="slide-3" class="ease-nav-dot"></label>
    </nav>
</main>
```

## 🎨 Customization

You can easily theme the carousel by modifying the CSS variables provided in the `:root`:

```css
:root {
    --ease-neon-cyan: #00f3ff;
    --ease-neon-magenta: #ff00ea;
    --ease-neon-purple: #9d00ff;
    --ease-dark-bg: #090a0f;
    --ease-panel-bg: rgba(9, 10, 15, 0.85);
}
```
