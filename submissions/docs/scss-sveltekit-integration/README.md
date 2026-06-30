# SCSS Integration Guide for SvelteKit Projects

This guide explains how to integrate EaseMotion CSS with SCSS in a
SvelteKit project — covering installation, variable mapping, mixin
usage, component scoping, global styles, and build optimisation.

---

## Prerequisites

- Node.js 18+
- An existing SvelteKit project (`npm create svelte@latest`)
- Basic familiarity with SCSS and Svelte component syntax

---

## 1. Install Dependencies

```bash
npm install -D sass
npm install easemotion-css
```

SvelteKit uses Vite under the hood. Once `sass` is installed, any
`<style lang="scss">` block in a `.svelte` file is compiled automatically.

---

## 2. Project Structure

src/

├── lib/

│ └── styles/

│ ├── \_variables.scss

│ ├── \_mixins.scss

│ ├── \_utilities.scss

│ └── global.scss

├── components/

│ ├── HeroSection.svelte

│ └── Card.svelte

├── routes/

│ ├── +layout.svelte

│ └── +page.svelte

## └── app.html

## 3. Global SCSS Setup

### src/lib/styles/\_variables.scss

```scss
// Duration tokens
$ease-duration-fast: 150ms;
$ease-duration-base: 300ms;
$ease-duration-slow: 600ms;
$ease-duration-xslow: 1000ms;

// Easing tokens
$ease-in-out-smooth: cubic-bezier(0.4, 0, 0.2, 1);
$ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
$ease-snap: cubic-bezier(0.25, 0.46, 0.45, 0.94);

// Motion scale
$ease-slide-distance: 24px;
$ease-skew-angle: 3deg;

// Colour tokens
$ease-primary: #6366f1;
$ease-primary-dark: #4f46e5;
$ease-surface: #1e293b;
$ease-border: rgba(255, 255, 255, 0.08);
$ease-text: #e2e8f0;
$ease-muted: #64748b;
```

### src/lib/styles/\_mixins.scss

```scss
@use "variables" as v;

// Generic animation mixin
@mixin ease-animate(
  $name,
  $duration: v.$ease-duration-base,
  $easing: v.$ease-in-out-smooth,
  $delay: 0ms,
  $fill: both
) {
  animation: #{$name} $duration $easing $delay $fill;
}

// Fade up entrance
@mixin ease-fade-up($duration: v.$ease-duration-base, $delay: 0ms) {
  opacity: 0;
  transform: translateY(v.$ease-slide-distance);
  @include ease-animate(ease-fade-up-kf, $duration, v.$ease-spring, $delay);

  @keyframes ease-fade-up-kf {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

// Fade in
@mixin ease-fade-in($duration: v.$ease-duration-base, $delay: 0ms) {
  opacity: 0;
  @include ease-animate(
    ease-fade-in-kf,
    $duration,
    v.$ease-in-out-smooth,
    $delay
  );

  @keyframes ease-fade-in-kf {
    to {
      opacity: 1;
    }
  }
}

// Stagger nth-child animations
@mixin ease-stagger($base-delay: 100ms, $count: 6) {
  @for $i from 1 through $count {
    &:nth-child(#{$i}) {
      animation-delay: #{($i - 1) * $base-delay};
    }
  }
}

// Hover lift
@mixin ease-hover-lift(
  $distance: 6px,
  $shadow: 0 20px 40px rgba(0, 0, 0, 0.3)
) {
  transition:
    transform v.$ease-duration-base v.$ease-snap,
    box-shadow v.$ease-duration-base v.$ease-snap;
  &:hover {
    transform: translateY(-#{$distance});
    box-shadow: $shadow;
  }
}

// Scale on hover
@mixin ease-hover-scale($scale: 1.04) {
  transition: transform v.$ease-duration-base v.$ease-snap;
  &:hover {
    transform: scale($scale);
  }
}

// Wrap in prefers-reduced-motion
@mixin ease-safe-motion {
  @media (prefers-reduced-motion: no-preference) {
    @content;
  }
}
```

### src/lib/styles/global.scss

```scss
@use "variables" as v;
@use "mixins" as m;

// EaseMotion CSS core
@use "easemotion-css/core" as *;

// Map SCSS tokens to CSS custom properties
:root {
  --ease-duration-fast: #{v.$ease-duration-fast};
  --ease-duration-base: #{v.$ease-duration-base};
  --ease-duration-slow: #{v.$ease-duration-slow};
  --ease-primary: #{v.$ease-primary};
  --ease-surface: #{v.$ease-surface};
  --ease-text: #{v.$ease-text};
  --ease-muted: #{v.$ease-muted};
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, sans-serif;
  background: #0d0d14;
  color: v.$ease-text;
}

// Global reduced-motion override
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

---

## 4. Load Global SCSS in SvelteKit Layout

### src/routes/+layout.svelte

```svelte
<script>
  // Import global styles — available on every page
  import '$lib/styles/global.scss';
</script>

<slot />
```

Importing via `$lib/styles/global.scss` in the root layout makes
styles available application-wide without scoping issues.

---

## 5. SCSS in Svelte Components

SvelteKit scopes `<style>` blocks to the component by default.
Use `lang="scss"` to enable SCSS, and `:global()` for selectors
that need to reach outside the component.

### src/components/Card.svelte

```svelte
<script>
  export let title  = '';
  export let body   = '';
  export let delay  = 0;
</script>

<div class="card" style="--delay: {delay}ms">
  <h3>{title}</h3>
  <p>{body}</p>
</div>

<style lang="scss">
  @use '$lib/styles/variables' as v;
  @use '$lib/styles/mixins'    as m;

  .card {
    background:    v.$ease-surface;
    border:        1px solid v.$ease-border;
    border-radius: 12px;
    padding:       1.5rem;

    @include m.ease-safe-motion {
      @include m.ease-fade-up($delay: var(--delay, 0ms));
    }

    @include m.ease-hover-lift;

    h3 {
      font-size:     1.1rem;
      font-weight:   700;
      color:         v.$ease-text;
      margin-bottom: 0.4rem;
    }

    p {
      font-size:   0.88rem;
      color:       v.$ease-muted;
      line-height: 1.6;
    }
  }
</style>
```

### src/components/HeroSection.svelte

```svelte
<section class="hero">
  <h1>Build Faster with EaseMotion</h1>
  <p>SCSS-powered animations for SvelteKit projects.</p>
  <a class="cta" href="/start">Get Started</a>
</section>

<style lang="scss">
  @use '$lib/styles/variables' as v;
  @use '$lib/styles/mixins'    as m;

  .hero {
    text-align: center;
    padding:    6rem 2rem;

    // Stagger all direct children
    > * {
      @include m.ease-safe-motion {
        @include m.ease-fade-up;
      }
    }
    @include m.ease-stagger(120ms, 3);
  }

  h1 {
    font-size:     clamp(2rem, 5vw, 4rem);
    font-weight:   900;
    color:         v.$ease-text;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  p {
    color:         v.$ease-muted;
    font-size:     1.1rem;
    margin-bottom: 2rem;
  }

  .cta {
    display:        inline-block;
    background:     v.$ease-primary;
    color:          #fff;
    padding:        0.85rem 2rem;
    border-radius:  8px;
    font-weight:    700;
    text-decoration: none;

    @include m.ease-hover-scale(1.04);
  }
</style>
```

### Using Components in a Page

```svelte
<!-- src/routes/+page.svelte -->
<script>
  import HeroSection from '$lib/components/HeroSection.svelte';
  import Card        from '$lib/components/Card.svelte';

  const cards = [
    { title: 'Fast',       body: 'Sub-16ms animations on every device.',    delay: 0   },
    { title: 'Accessible', body: 'Respects prefers-reduced-motion always.', delay: 100 },
    { title: 'Modular',    body: 'Import only the mixins you need.',         delay: 200 },
  ];
</script>

<HeroSection />

<section class="card-grid">
  {#each cards as card}
    <Card title={card.title} body={card.body} delay={card.delay} />
  {/each}
</section>

<style lang="scss">
  @use '$lib/styles/variables' as v;

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap:     1rem;
    padding: 0 2rem 4rem;
    max-width: 900px;
    margin:  0 auto;
  }
</style>
```

---

## 6. Vite Config — Auto-Import Variables

To avoid writing `@use '$lib/styles/variables' as v;` in every
component, configure `additionalData` in `vite.config.js`:

```js
// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'src/lib/styles/variables' as v;
          @use 'src/lib/styles/mixins'    as m;
        `,
      },
    },
  },
});
```

After this change you can use `v.$ease-primary` and
`@include m.ease-fade-up` in any component without the `@use` lines.

---

## 7. SvelteKit-Specific Patterns

### Scoped vs Global Styles

```svelte
<style lang="scss">
  /* Scoped — only affects this component */
  .card { background: v.$ease-surface; }

  /* Global — reaches outside the component */
  :global(.ease-fade-up) {
    opacity: 0;
    transform: translateY(24px);
  }
</style>
```

### Svelte Transitions + EaseMotion SCSS

```svelte
<script>
  import { fade, fly } from 'svelte/transition';
</script>

<!-- Combine Svelte transitions with EaseMotion SCSS classes -->
<div
  in:fly={{ y: 24, duration: 300, easing: t => t }}
  class="card"
>
  Content here
</div>
```

### Reactive Animations with Svelte Stores

```svelte
<script>
  import { writable } from 'svelte/store';
  const scrollDir = writable('none');

  if (typeof window !== 'undefined') {
    let lastY = 0;
    window.addEventListener('scroll', () => {
      $scrollDir = window.scrollY > lastY ? 'down' : 'up';
      lastY = window.scrollY;
    }, { passive: true });
  }
</script>

<div class="skew-box" class:skew-down={$scrollDir === 'down'}
                       class:skew-up={$scrollDir === 'up'}>
  Scroll-aware content
</div>

<style lang="scss">
  @use '$lib/styles/variables' as v;

  .skew-box {
    transition: transform v.$ease-duration-base v.$ease-snap;
  }
  .skew-down { transform: skewY(-3deg); }
  .skew-up   { transform: skewY(3deg);  }
</style>
```

---

## 8. Build and Preview

```bash
npm run dev        # Dev server with HMR SCSS compilation
npm run build      # Production build — Vite tree-shakes unused CSS
npm run preview    # Preview production build locally
```

SvelteKit + Vite automatically:

- Compiles SCSS to CSS per component
- Scopes component styles with a unique class
- Tree-shakes unused CSS in production
- Generates critical CSS per route

---

## 9. Common Issues and Fixes

| Issue                                           | Cause                     | Fix                                |
| ----------------------------------------------- | ------------------------- | ---------------------------------- |
| Cannot find module sass                         | Sass not installed        | npm install -D sass                |
| @use path not found                             | Wrong $lib alias          | Use $lib/styles/filename           |
| Styles not scoped                               | Using :global incorrectly | Remove :global unless intentional  |
| additionalData double @use error                | Manual @use still present | Remove @use from components        |
| Animation flickers on SSR                       | Hydration mismatch        | Wrap in onMount or use svelte:head |
| Svelte transition conflicts with SCSS animation | Both applying transforms  | Use one or the other per element   |

---

## 10. Quick Reference

```scss
// Fade up with spring easing
@include m.ease-fade-up($duration: 500ms, $delay: 200ms);

// Fade in
@include m.ease-fade-in($duration: 400ms, $delay: 100ms);

// Stagger 6 children 100ms apart
@include m.ease-stagger(100ms, 6);

// Hover lift
@include m.ease-hover-lift(8px);

// Hover scale
@include m.ease-hover-scale(1.05);

// Safe motion wrapper
@include m.ease-safe-motion {
  animation: myAnim 0.4s ease;
}
```

---

## Files in This Submission

| File      | Purpose                                            |
| --------- | -------------------------------------------------- |
| README.md | This integration guide                             |
| demo.html | Visual preview of the compiled patterns            |
| style.css | Compiled CSS output showing what the SCSS produces |
