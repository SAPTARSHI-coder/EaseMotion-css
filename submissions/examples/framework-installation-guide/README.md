# Framework Installation Guide

This example demonstrates how to install and use EaseMotion CSS in popular JavaScript frameworks.

## React

### Installation

```bash
npm install easemotion-css
```

### Usage

```jsx
import "easemotion-css";

export default function App() {
  return (
    <div className="ease-fade-in">
      Hello React
    </div>
  );
}
```

## Next.js

### Installation

```bash
npm install easemotion-css
```

### app/layout.js

```jsx
import "easemotion-css";
```

### Usage

```jsx
export default function Home() {
  return (
    <div className="ease-slide-up">
      Next.js Example
    </div>
  );
}
```

## Vue

### Installation

```bash
npm install easemotion-css
```

### main.js

```js
import "easemotion-css";
```

### Usage

```vue
<template>
  <div class="ease-bounce">
    Vue Example
  </div>
</template>
```

## Vite

### Installation

```bash
npm install easemotion-css
```

### main.js

```js
import "easemotion-css";
```

### Usage

```jsx
function App() {
  return (
    <div className="ease-pulse">
      Vite Example
    </div>
  );
}

export default App;
```

## Benefits

* Easier onboarding
* Reduced setup confusion
* Framework-specific examples
* Better developer experience
