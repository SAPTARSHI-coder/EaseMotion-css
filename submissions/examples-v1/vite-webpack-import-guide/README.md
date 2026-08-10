# Docs: Vite and webpack Import Guide

## What does this do?

Shows how to import EaseMotion CSS in Vite and webpack projects, with a CDN alternative for non-bundler setups. Designed to be added to the docs site.

## How is it used?

### Vite

```bash
npm install easemotion-css
```

```js
// main.js or main.ts
import 'easemotion-css';
```

Or for granular imports (smaller bundle):

```js
// Import only what you need
import 'easemotion-css/core/variables.css';
import 'easemotion-css/core/base.css';
import 'easemotion-css/core/animations.css';
import 'easemotion-css/core/utilities.css';

// Components (optional)
import 'easemotion-css/components/buttons.css';
import 'easemotion-css/components/cards.css';
```

### webpack

```bash
npm install easemotion-css
```

```js
// index.js or app.js
import 'easemotion-css';
```

Requires `css-loader` and `style-loader` (or `MiniCssExtractPlugin`):

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

### CDN Alternative (no bundler)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.css" />
```

### Framework-specific examples

**React (Vite):**
```jsx
// src/main.jsx
import 'easemotion-css';
import App from './App';
```

**Vue (Vite):**
```js
// src/main.js
import 'easemotion-css';
import { createApp } from 'vue';
import App from './App.vue';
createApp(App).mount('#app');
```

**Svelte (Vite):**
```js
// src/main.js
import 'easemotion-css';
import App from './App.svelte';
new App({ target: document.getElementById('app') });
```

## Why is it useful?

- Most modern projects use a bundler (Vite or webpack)
- Developers need clear, copy-paste instructions for their setup
- Reduces friction for adoption in real-world projects
- Covers the three most common scenarios: Vite, webpack, and CDN
