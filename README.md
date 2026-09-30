# EaseMotion CSS

A lightweight, animation-first CSS framework with zero dependencies designed for clean and expressive user interfaces.

---

## Installation & Setup

### Option 1 — CDN (Quickest Setup)

Add the pre-compiled stylesheet directly to your HTML `<head>`:

```html
<!-- Core EaseMotion CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
/>
```

*(Optional) Recommended font setup (Inter):*

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

#### Alternative CDN Providers

**unpkg:**
```html
<link
  rel="stylesheet"
  href="https://unpkg.com/easemotion-css/easemotion.min.css"
/>
```

**GitHub Raw:**
```html
<link
  rel="stylesheet"
  href="https://raw.githubusercontent.com/SAPTARSHI-coder/EaseMotion-css/main/easemotion.min.css"
/>
```

---

### Option 2 — Package Manager (npm)

Install the package via npm:

```bash
npm install easemotion-css
```

#### Import in CSS / PostCSS / Sass:

```css
@import "easemotion-css/easemotion.min.css";
```

#### Import in JavaScript / TypeScript Entry Points:

```javascript
import "easemotion-css/easemotion.min.css";
```

---

### Option 3 — Granular & Modular Imports

Load only the specific layers or animation modules needed:

#### Core Layers (load in this order):

```html
<!-- Design tokens & variables -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/core/variables.css" />

<!-- Base resets and typography -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/core/base.css" />

<!-- Core animations -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/core/animations.css" />

<!-- Layout utilities -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/core/utilities.css" />
```

#### Component Styles:

```html
<!-- Buttons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/components/buttons.css" />

<!-- Cards -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/components/cards.css" />
```

#### Modular Animation Modules:

```html
<!-- Variables must be imported first -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/variables.css" />

<!-- Specific animations -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/fade.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/slide.css" />
```

---

## Framework Integration

EaseMotion CSS is pure CSS and works out of the box with any modern front-end library or framework.

### React / Vite

1. Install the package:
   ```bash
   npm install easemotion-css
   ```

2. Import the stylesheet in your entry file (`main.jsx` or `App.jsx`):
   ```jsx
   import 'easemotion-css/easemotion.min.css';
   ```

3. Apply classes directly in JSX:
   ```jsx
   export default function App() {
     return (
       <div className="ease-center ease-fade-in">
         <h1 className="ease-slide-up">EaseMotion CSS</h1>
         <button className="ease-btn ease-btn-primary ease-hover-grow">
           Get Started
         </button>
       </div>
     );
   }
   ```

---

### Next.js

#### App Router (`app/layout.jsx` or `app/layout.tsx`):

```jsx
import 'easemotion-css/easemotion.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

#### Pages Router (`pages/_app.jsx` or `pages/_app.tsx`):

```jsx
import 'easemotion-css/easemotion.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

---

### Vue / Svelte / Astro

#### Vue 3 (`main.js`):
```javascript
import 'easemotion-css/easemotion.min.css';
```

#### Svelte / SvelteKit (`+layout.svelte`):
```html
<script>
  import 'easemotion-css/easemotion.min.css';
</script>

<slot />
```

#### Astro (`src/layouts/Layout.astro`):
```astro
---
import 'easemotion-css/easemotion.min.css';
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

---

## SCSS Integration

EaseMotion CSS includes SCSS variables and mixins located in `scss/`:

### Setup

```bash
npm install --save-dev sass
```

### Import

```scss
// Import full SCSS library
@use 'easemotion-css/scss' as ease;

// Or import specific partials
@use 'easemotion-css/scss/variables' as *;
@use 'easemotion-css/scss/mixins' as ease;
```

### Example Usage

```scss
.custom-card {
  @include ease.animate(ease-kf-fade-in, 400ms, $ease-in-out, 200ms);
}

.custom-button {
  @include ease.transition(transform, $duration: $speed-fast);
}
```

---

## Basic Usage Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EaseMotion Example</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css" />
</head>
<body>
  <div class="ease-center ease-fade-in">
    <h1 class="ease-slide-up">Welcome to EaseMotion</h1>
    <p class="ease-slide-up ease-delay-100">Clean, animation-first styling.</p>
    <button class="ease-btn ease-btn-primary ease-hover-grow">Interactive Button</button>
  </div>
</body>
</html>
```
