# Elastic Testimonial Card

A premium testimonial card featuring modern Neumorphic Soft UI styling and a pure CSS elastic transition engine.

## 1. What does this do?
This component provides a neumorphic testimonial card that animate elastically (over-shooting and bouncing back) on hover, click, and focus states, with additional micro-interactions on the nested rating stars and avatar elements.

## 2. How is it used?
Link to both the core `easemotion.css` library and `style.css`, then construct the HTML with the following pattern:

```html
<article class="ease-testimonial-card-ag" tabindex="0">
  <div class="ease-testimonial-header-ag">
    <!-- Star Inset Container -->
    <div class="ease-testimonial-stars-ag" role="img" aria-label="5 out of 5 stars">
      <span class="ease-star-ag filled">★</span>
      <span class="ease-star-ag filled">★</span>
      <span class="ease-star-ag filled">★</span>
      <span class="ease-star-ag filled">★</span>
      <span class="ease-star-ag filled">★</span>
    </div>
    <!-- Floating Quote Mark -->
    <span class="ease-testimonial-quote-mark-ag">“</span>
  </div>

  <!-- Testimonial Quote -->
  <p class="ease-testimonial-quote-ag">
    "This is a physics-based elastic testimonial component!"
  </p>

  <!-- Author Profile -->
  <div class="ease-testimonial-author-ag">
    <div class="ease-avatar-well-ag">
      <img class="ease-avatar-ag" src="avatar.jpg" alt="Author Face">
    </div>
    <div class="ease-testimonial-meta-ag">
      <h2 class="ease-testimonial-name-ag">Author Name</h2>
      <p class="ease-testimonial-role-ag">Job Title, Company</p>
    </div>
  </div>
</article>
```

### Options & Variants:
- **Inset Variant (`.ease-testimonial-card-ag--inset`)**: Starts indented/pressed by default, then pops out to a raised state on hover.
- **Accent Border Variant (`.ease-testimonial-card-ag--accent`)**: Adds a top accent border gradient that elastically expands and drops on hover.
- **Glassmorphic Hybrid Variant (`.ease-testimonial-card-ag--glass`)**: Integrates semi-transparent frosted glass textures (`backdrop-filter`) with neumorphic shadow boundaries.

---

## 3. Why is it useful?
Testimonial showcases are standard across modern landing pages, SaaS dashboards, and marketing portals. By styling them in Neumorphism and using EaseMotion's physics-inspired bounce variables (`--ease-ease-bounce`), this component provides a highly responsive, accessible, and tactile card variant that works completely without JavaScript (pure CSS), aligning with the EaseMotion core philosophy of lightweight, high-performance UI transitions.
