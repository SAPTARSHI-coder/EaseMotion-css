# Fade In Maintenance Page — Travel App Design

A pure CSS maintenance page layout featuring an elegant travel-themed illustration (a floating hot air balloon among drifting clouds) and sequential staggered fade-in content reveals. Designed to match modern travel apps and vacation booking systems with warm sunset gradients and clean corporate spacing.

## What does this do?
When the page loads, the component fades in with smooth, staggered reveal transitions:
1. **Container Card**: Fades in and scales up to standard viewport size.
2. **Illustration (first)**: Fades in and slides up, with continuous floating and drifting loops.
3. **Title (second)**: Fades in and slides up.
4. **Message (third)**: Fades in and slides up.
5. **Action Button (fourth)**: Fades in and slides up with a gentle shadow.

---

## How is it used?

### 1. Link the Stylesheet
Link `style.css` in your project header:
```html
<link rel="stylesheet" href="style.css">
```

### 2. Markup Blueprint

```html
<div class="ease-maintenance-page" aria-label="Scheduled Maintenance Page">
  <div class="ease-maintenance__container">
    
    <!-- Travel SVG Illustration -->
    <div class="ease-maintenance__illustration">
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <!-- Drifting Clouds -->
        <path class="ease-maint-cloud-left" d="..." />
        <path class="ease-maint-cloud-right" d="..." />
        <!-- Floating Hot Air Balloon -->
        <g class="ease-maint-balloon">
          <!-- Hot air balloon SVG components -->
        </g>
      </svg>
    </div>
    
    <!-- Title -->
    <h1 class="ease-maintenance__title">Refueling the Engines</h1>
    
    <!-- Message details -->
    <p class="ease-maintenance__message">
      Apex Travel is undergoing brief scheduled maintenance to prepare your next destinations. Our systems will be back online shortly. Thank you for your patience!
    </p>
    
    <!-- Action CTA -->
    <a href="#" class="ease-maintenance__action">Check Flight Status</a>
    
  </div>
</div>
```

---

## Why is it useful?
- **Welcoming User Experience**: Avoids standard, cold "503 Error" pages by using warm gradient sky tones and a friendly vector illustration.
- **Micro-Animations Included**: Pure CSS floating animations on the hot air balloon (`ease-kf-balloon-float`) and drifting clouds (`ease-kf-cloud-drift`) give the page a subtle, polished dynamic feel.
- **Accessibility & Focus Indicators**:
  - The CTA button includes highly visible `:focus-visible` outline rings.
  - The entire page utilizes semantic HTML containers.
  - Reduced Motion compatible: under `@media (prefers-reduced-motion: reduce)`, all floating loops and translation shifts are disabled, reverting instantly to static opacity reveals.
- **Zero JavaScript**: Runs completely inside the browser's render pipeline, ensuring minimal payload and max performance.

---

## Customization API (CSS Custom Properties)

Custom variables are declared on the parent block `.ease-maintenance-page` and can be overridden:

| Property | Default | Description |
|---|---|---|
| `--ease-maint-duration` | `800ms` | Base animation transition duration |
| `--ease-maint-easing` | `cubic-bezier(0.25, 1, 0.5, 1)` | Transition timing function |
| `--ease-maint-delay` | `150ms` | Step delay time for staggered slide-ins |
| `--ease-maint-radius` | `24px` | Card corner radius |
| `--ease-maint-spacing` | `1.5rem` | Base vertical spacing inside the card |
| `--ease-maint-shadow` | `0 12px 30px ...` | Main card drop shadow |
| `--ease-maint-bg-start` | `#fff1f2` | Sunset sky gradient start color |
| `--ease-maint-bg-end` | `#e0f2fe` | Sunset sky gradient end color |
| `--ease-maint-card-bg` | `#ffffff` / `#1e293b` | Card container background color |
| `--ease-maint-text` | `#0f172a` / `#f8fafc` | Title text color |
| `--ease-maint-text-muted` | `#475569` / `#94a3b8` | Message description text color |
| `--ease-maint-accent` | `#f43f5e` / `#fb7185` | Primary CTA and branding color |
| `--ease-maint-focus-ring` | `#f43f5e` / `#fb7185` | Keyboard tab ring outline color |
