# Fade In Slider - Pure CSS Portfolio Showcase

I am fixing this issue under ECSoC26.

1. **What does this do?**  
   It renders a modular, copy-paste ready CSS component for a **Fade In Slider** inspired by **Portfolio** design patterns, featuring 4 image slides, smooth text fade ins, navigation dot indicators, and left/right arrows.

2. **How is it used?**  
   Copy the HTML structure from [demo.html](./demo.html) containing radio inputs and link the stylesheet from [style.css](./style.css).
   
3. **Why is it useful?**  
   It delivers zero-JavaScript keyboard accessible checked states, active dot indicators, and layered zoom transformations.

---

## 🚀 Features

- **Pure CSS Controls**: Powered entirely by checkbox radio selectors and CSS sibling combinations.
- **Cinematic Fade-In**: Slides and textual captions enter with progressive timeline delays.
- **Auto Parallax Zoom**: Background imagery scales dynamically during active slide transitions.

---

## 📦 Usage

To import the slider container into your project page, copy the HTML structure below:

```html
<div class="slider-wrapper">
  <!-- Radio Triggers -->
  <input type="radio" name="slider" id="slide1" checked class="slider-radio-input">
  <input type="radio" name="slider" id="slide2" class="slider-radio-input">

  <div class="slides-container">
    <!-- Slide 1 -->
    <div class="portfolio-slide slide1">
      <div class="slide-background" style="background-image: url('image.jpg');"></div>
      <div class="slide-caption">
        <span class="slide-tag">Category</span>
        <h2 class="slide-title">Slide Title</h2>
        <p class="slide-description">Slide description...</p>
        <a href="#" class="slide-btn">Action Link</a>
      </div>
    </div>
  </div>

  <div class="slider-dot-indicators">
    <label for="slide1" class="dot-indicator dot1"></label>
    <label for="slide2" class="dot-indicator dot2"></label>
  </div>
</div>
```

---

## 🎨 Design Configurations

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--primary-accent` | `#6366f1` | Color indicator for dot active status and buttons. |
| `--slider-height` | `480px` | Total height bounds for the slider scene. |
| `--card-bg` | `#111827` | Content wrapper background color. |
| `--card-border` | `#1f2937` | Outline container borders. |
