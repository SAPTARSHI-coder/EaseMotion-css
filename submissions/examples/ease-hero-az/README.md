# Hero Section Component

### What does this do?
Adds `ease-hero-az` — a landing page hero section component with a large headline (using `clamp()` for fluid typography), subtitle, optional badge, and primary/secondary CTA buttons with hover lift.

### How is it used?
The maintainer should copy `style.css` into `components/hero.css` and import it.

```html
<div class="ease-hero-az">
  <a href="#" class="ease-hero-badge-az">&#9733; New Feature</a>
  <h1 class="ease-hero-title-az">Headline with <span class="highlight">accent</span></h1>
  <p class="ease-hero-subtitle-az">Supporting description text.</p>
  <div class="ease-hero-actions-az">
    <button class="ease-hero-btn-az primary">Get Started</button>
    <button class="ease-hero-btn-az secondary">Learn More</button>
  </div>
</div>
```

Variants: `.left` (left-aligned), `.minimal` (smaller title/padding), `.sm` (compact).

### Why is it useful?
1. **Fluid typography** — headline uses `clamp()` for seamless scaling from mobile to desktop
2. **Flexible CTAs** — primary (filled) and secondary (outlined) buttons with hover lift
3. **Optional badge** — pill-shaped link for announcements or version info
