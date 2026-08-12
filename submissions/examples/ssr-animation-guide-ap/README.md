# Server-Side Rendering (SSR) Animation Guide

Welcome to the **Server-Side Rendering (SSR) Animation Guide**! This comprehensive document details how to integrate EaseMotion CSS animation classes safely within modern SSR frameworks (Next.js, Nuxt 3, Astro), preventing Flash of Unanimated Content (FOUC) and avoiding hydration mismatches.

---

## 📋 Table of Contents
1. [SSR Animation Pipeline](#1-ssr-animation-pipeline)
2. [What Works Server-Side vs. Client-Side](#2-what-works-server-side-vs-client-side)
3. [Framework Integration Recipes](#3-framework-integration-recipes)
4. [Flash of Unanimated Content (FOUC) Prevention](#4-flash-of-unanimated-content-fouc-prevention)

---

## 1. SSR Animation Pipeline

In Server-Side Rendering (SSR) environments, components are pre-rendered into HTML templates on the server and delivered to the client. The browser displays the static layout before downloading and executing the JavaScript bundles that hydrade the page:

1. **Server Build**: Components render to static HTML strings.
2. **Client Render**: Browser displays static layout (FOUC can occur here if styles are not configured correctly).
3. **Hydration**: Client-side JavaScript mounts state, bindings, and observers.

---

## 2. What Works Server-Side vs. Client-Side

### Pure CSS Animations (Server-Safe)
Animations that do not rely on dynamic JavaScript evaluations or window APIs run out of the box:
* Static entry animations (e.g. `.ease-fade-in`, `.ease-slide-up`).
* Standard loop keyframes (e.g. `.ease-spin`).
* Basic hover states using standard `:hover` selectors.

### JS-Dependent Transitions (Requires Hydration)
Features that access DOM properties or track client interactions must run only on the client:
* Scroll-driven timeline tracking (IntersectionObserver).
* Dynamic staggers calculated via JavaScript child counts.
* Animations relying on local storage settings (e.g., dark mode preferences).

---

## 3. Framework Integration Recipes

### 1. Next.js (App Router)
For Client-Side Components in Next.js, use the `"use client"` directive. To prevent server/client hydration mismatches, gate class definitions until after the component mounts:

```jsx
"use client";

import { useState, useEffect } from 'react';
import 'easemotion-css';

export default function ClientCard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    /* Starts hidden (opacity-0) and animates in only after mounting */
    <div className={`ssr-card ${isMounted ? 'anim-ssr-slide' : 'opacity-0'}`}>
      <h3>Hydrated Next.js Card</h3>
    </div>
  );
}
```

### 2. Nuxt 3 (Vue)
Nuxt pre-renders Vue components on the server. Wrap client-only animation transitions inside the built-in `<ClientOnly>` component:

```html
<template>
  <ClientOnly fallback-tag="div" fallback="Loading animation...">
    <!-- Applied only on the client post-hydration -->
    <div class="ssr-card anim-ssr-slide">
      <h3>Hydrated Nuxt Card</h3>
    </div>
  </ClientOnly>
</template>

<script setup>
import 'easemotion-css';
</script>
```

### 3. Astro (Islands Architecture)
Astro ships zero JavaScript to the client by default. If your animation utilizes client-side triggers, use Astro client directives:

```astro
---
import 'easemotion-css';
import InteractiveCard from '../components/InteractiveCard';
---

<!-- Hydrate the component once it enters the viewport -->
<InteractiveCard client:visible />
```

---

## 4. Flash of Unanimated Content (FOUC) Prevention

FOUC occurs when a browser renders server HTML before loading the stylesheet or executing hydration. If an element's target state is animated (e.g., fading in), the browser may display it fully visible first, then snap it to `opacity: 0` once the script loads to start the animation.

### FOUC Mitigation Checklist
1. **Critical CSS**: Load basic animation layout parameters inside critical header styles.
2. **Initial State Locking**: Ensure the element's start state is defined in the base CSS class:
   ```css
   /* Safe: element is hidden by default in CSS, not via JS classes */
   .ssr-card-hidden {
     opacity: 0;
   }
   ```
3. **Avoid Dynamic Imports for Critical Paths**: Do not lazy-load components that are visible above the fold.
