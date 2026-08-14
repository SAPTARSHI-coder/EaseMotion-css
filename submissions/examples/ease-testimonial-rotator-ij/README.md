# Testimonial Rotator Demo Component

A pure CSS Testimonial Rotator component featuring cross-slide card transitions, radio button dot navigation, pause-on-hover controls, and star rating animations.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Cross-Slide Transitions**: Elastic card slide keyframe transitions (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Radio Dot Controls**: Interactive slide navigation using hidden radio button inputs and label dot elements.
- **Staggered Star Rating**: Per-star spring scale bounce animations (`--s: index`) when each card becomes active.
- **Pause-On-Hover**: Hovering over card content pauses ongoing transitions for comfortable reading.
- **Responsive & Accessible**: Fully responsive glassmorphism layout with ARIA star rating labels and explicit reduced motion fallbacks.

## 🛠️ Usage

Include `style.css` in your HTML and structure the radio controls and slides:

```html
<link rel="stylesheet" href="submissions/examples/ease-testimonial-rotator-ij/style.css">

<div class="carousel-wrapper">
    <input type="radio" id="slide-1" name="testimonial-slide" class="slide-radio" checked>
    <div class="slides-track">
        <article class="testimonial-card slide-card-1">
            ...
        </article>
    </div>
</div>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--primary-accent` | Vibrant theme color | `#ec4899` |
| `--star-color` | Star rating color | `#fbbf24` |
| `--font-quote` | Serif font for quote marks | `'Playfair Display'` |
| `--ease-spring` | Cubic-bezier spring transition curve | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-testimonial-rotator-ij/`
- **Issue Reference**: `#75680`
- **Files Included**: `demo.html`, `style.css`, `README.md`
