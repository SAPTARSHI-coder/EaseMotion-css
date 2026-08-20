# Framework Integration Guides

A comprehensive set of guides and examples for integrating EaseMotion CSS into modern front-end frameworks and bundlers (Vite, Next.js, and Create React App).

---

## Contributing Answers

### 1. What does this do?

This submission provides comprehensive, step-by-step setup guides and code examples to integrate EaseMotion CSS's animations and utilities seamlessly into Vite, Next.js, and Create React App (CRA) workflows using both CSS and SCSS.

### 2. How is it used?

Once EaseMotion CSS is installed, import the stylesheet into your framework's main entry point, and apply the classes in your components:

```html
<!-- Example of applying animation classes in React / JSX -->
<button className="ease-fade-in ease-duration-normal">Animated Button</button>
```

### 3. Why is it useful?

Modern frontend development heavily utilizes component frameworks and bundlers. Clear integration guidelines reduce setup friction, resolve preprocessor/bundler resolution errors proactively, and ensure smooth layout rendering (avoiding Flash of Unstyled Content) when bringing animation-first styles into single-page and server-rendered applications.

---

## Installation

Add the library to your project dependencies:

```bash
npm install easemotion-css
# or using yarn
yarn add easemotion-css
# or using pnpm
pnpm add easemotion-css
```

---

## Integration Overview

### 1. Vite (Vanilla, React, Vue, Svelte)

Import the global stylesheet into your main entrypoint (`src/main.js` or `src/main.ts`):

```javascript
import "easemotion-css";
// Or specify the minified path:
// import 'easemotion-css/easemotion.min.css';
```

If utilizing preprocessors (Sass) in Vite:

```scss
// src/style.scss
@use "easemotion-css/scss" as ease;

.card {
  transition: transform ease.$duration-normal;
  @include ease.animate-fade-in;
}
```

### 2. Next.js

For the **App Router**, import it globally inside `app/layout.tsx`:

```javascript
import "easemotion-css/easemotion.min.css";
```

For the **Pages Router**, import it in `pages/_app.tsx`:

```javascript
import "easemotion-css/easemotion.min.css";
```

When importing SCSS in Next.js, configure `next.config.js` to include the `node_modules` path:

```javascript
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
};
```

### 3. Create React App (CRA)

Import the stylesheet inside `src/index.js` or `src/App.js`:

```javascript
import "easemotion-css/easemotion.min.css";
```

If using CRA with custom Sass support:

```scss
@import "~easemotion-css/scss/index";
```

---

## Troubleshooting FAQ

### Styles are not loading or utilities are missing

Some older bundlers may fail to resolve the package main entry point from `node_modules`. If classes are not applying, import the explicit path directly:

```javascript
import "easemotion-css/easemotion.min.css";
```

### Flash of Unstyled Content (FOUC) on Server-side Rendering (Next.js)

Ensure your global `easemotion-css` import is at the top of your layout file or custom App file, before importing custom modular styling or component code. This allows the browser to process animation-related custom properties before initial render.

### Sass compiler unable to find stylesheet

When compiling using older Webpack-based bundlers (like Create React App), you must prepend a tilde (`~`) to allow node_modules resolution. Use `@import "~easemotion-css/scss/index";` to resolve the SCSS variables and mixins cleanly.
