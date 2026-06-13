# Using EaseMotion CSS with Astro

## Installation

```bash
npm install easemotion-css
```

## Global Import

Import the stylesheet in your layout or page frontmatter:

```astro
---
// src/layouts/BaseLayout.astro
import 'easemotion-css/easemotion.min.css';
---
<html lang="en">
  <head>
    <title>My Site</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

## Component Example

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout>
  <section class="ease-center ease-padding-16">
    <h1 class="ease-fade-in">Build faster.</h1>
    <button class="ease-btn ease-btn-primary ease-hover-grow">
      Get Started
    </button>
  </section>
</BaseLayout>
```

## Card Component

```astro
---
// src/components/Card.astro
export interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props;
---
<div class="ease-card ease-hover-lift" style="max-width: 320px">
  <h2 class="ease-text-lg">{title}</h2>
  <p class="ease-text-sm ease-muted">{description}</p>
  <a href="#" class="ease-btn ease-btn-outline ease-btn-sm">
    Learn More
  </a>
</div>
```

## SSR / Static Output

Astro automatically extracts and inlines CSS during the build. Importing `easemotion-css/easemotion.min.css` in any layout or component ensures styles are included in the final output — no extra configuration needed.

## Scoped Styles

Astro scoped styles work alongside EaseMotion CSS classes without conflicts:

```astro
<div class="ease-card custom">
  <slot />
</div>

<style>
  .custom {
    border: 2px solid var(--ease-color-primary);
  }
</style>
```
