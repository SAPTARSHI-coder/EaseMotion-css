# Launch Sequence

A hero-focused launch utility that automatically reveals headline, subtitle, CTAs, screenshots, and supporting badges in a polished order without manual delay classes.

## What this does

`.ease-launch-sequence` detects common hero section elements and orchestrates a production-ready entrance sequence for them.

It exposes three variants:

- `ease-launch-sequence` — balanced pacing for feature sections.
- `ease-launch-sequence-fast` — fast startup landing timing.
- `ease-launch-sequence-cinematic` — dramatic storytelling pacing.

## Usage

### Standard

```html
<section class="ease-launch-sequence hero-panel">
  <h1>Build faster with animation-first CSS.</h1>
  <p>Create landing pages with smart motion and no delay helpers.</p>
  <div class="hero-actions">
    <a class="ease-btn" href="#">Get Started</a>
    <a class="ease-btn ease-btn-secondary" href="#">View Templates</a>
  </div>
  <img src="hero-screen.svg" alt="Product screenshot" />
  <div class="trust-badges">
    <span class="badge">Trusted by 15K teams</span>
    <span class="badge">Built for launch</span>
  </div>
</section>
```

### Fast variant

```html
<section class="ease-launch-sequence-fast hero-panel">
  <!-- same structure, faster reveal timing -->
</section>
```

### Cinematic variant

```html
<section class="ease-launch-sequence-cinematic hero-panel">
  <!-- same structure, slower, more dramatic timing -->
</section>
```

## How it works

The utility applies automatic sequencing based on element roles:

1. Headline (`h1`, `h2`)
2. Subtitle (`p`)
3. CTA buttons (`button`, `.ease-btn`, `a`)
4. Screenshots (`img`, `picture`)
5. Trust badges / supporting content (`.trust-badges`, `.badge`, `.card`, `.ease-card`)

This means developers only need to add the wrapper class and write normal hero markup.

## Why it fits EaseMotion CSS

- Declarative animation with one utility class
- Human-readable class names and intent
- Works with existing hero markup without extra delay helpers
- Includes accessible reduced-motion support

## Examples

### SaaS landing page example

```html
<section class="ease-launch-sequence hero-panel">
  <h1>Launch landing pages that feel alive.</h1>
  <p>Fast, polished hero animations powered by CSS-only sequencing.</p>
  <div class="hero-actions">
    <a class="ease-btn" href="#">Start free</a>
    <a class="ease-btn ease-btn-secondary" href="#">See how</a>
  </div>
  <img src="hero-screenshot.png" alt="Dashboard screenshot" />
  <div class="trust-badges">
    <span class="badge">Enterprise ready</span>
    <span class="badge">Loved by designers</span>
  </div>
</section>
```

### Startup homepage example

```html
<section class="ease-launch-sequence-fast hero-panel">
  <h1>Move faster than your competition.</h1>
  <p>Animated hero content that lands with speed and clarity.</p>
  <div class="hero-actions">
    <a class="ease-btn" href="#">Try free</a>
  </div>
  <img src="hero-screenshot.png" alt="App preview" />
  <div class="trust-badges">
    <span class="badge">Built for startups</span>
  </div>
</section>
```

### Product launch example

```html
<section class="ease-launch-sequence-cinematic hero-panel">
  <h1>Introduce your next big idea.</h1>
  <p>Slow, cinematic pacing for storytelling hero sections.</p>
  <div class="hero-actions">
    <a class="ease-btn" href="#">See launch</a>
  </div>
  <img src="hero-screenshot.png" alt="Product showcase" />
  <div class="trust-badges">
    <span class="badge">Award-winning design</span>
    <span class="badge">Premium adoption</span>
  </div>
</section>
```

## Accessibility notes

- `prefers-reduced-motion: reduce` disables sequencing and shows content immediately.
- The utility does not hide or delay content for users who request reduced motion.
- Elements are visible by default in reduced-motion environments.
