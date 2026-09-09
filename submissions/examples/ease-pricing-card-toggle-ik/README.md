# EaseMotion CSS — SaaS Pricing Card Grid (`ease-pricing-card-toggle-ik`)

Interactive SaaS pricing card component (`ease-pricing-card`) featuring popular plan glowing borders (`plan-popular`), feature checklists, and spring hover elevation.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a SaaS pricing grid component (`ease-pricing-card`) that highlights featured plans with glowing borders (`plan-popular`) and spring lift micro-interactions on hover (`translateY(-6px)`).

---

## 2. How is it used?

Include the pricing grid card structure in your landing page:

```html
<article class="ease-pricing-card plan-popular">
  <span class="popular-badge">Most Popular</span>
  <span class="plan-name">Pro Studio</span>
  <div class="plan-price">$49 <span>/ mo</span></div>
  <button class="plan-btn btn-primary">Upgrade</button>
</article>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS supports conversion-optimized SaaS marketing components. The Pricing Card Grid delivers 60fps GPU compositor lift micro-interactions while respecting `prefers-reduced-motion` settings.
