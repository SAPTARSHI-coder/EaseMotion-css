# EaseMotion CSS Next.js Integration Template & Guide

This template shows how to successfully integrate **EaseMotion CSS** with Next.js (both App Router and Pages Router) to enable animation-first utilities with zero dependencies.

---

## 1. Setup & Installation

To add EaseMotion CSS to your Next.js project, install the package via npm:

```bash
npm install easemotion-css
```

---

## 2. Integration Guides

### Option A: Next.js App Router (Next.js 13+)

In the App Router, import EaseMotion CSS globally inside your root layout file (`app/layout.js` or `app/layout.tsx`):

```javascript
// app/layout.js
import 'easemotion-css/easemotion.css';
import './globals.css'; // Your project-specific global styles

export const metadata = {
  title: 'EaseMotion Next.js Integration App',
  description: 'Animation-first Next.js template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

### Option B: Next.js Pages Router

For Pages Router setups, import EaseMotion CSS in `pages/_app.js` or `pages/_app.tsx`:

```javascript
// pages/_app.js
import 'easemotion-css/easemotion.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

---

## 3. Usage Example

You can now use any EaseMotion CSS class (such as `.ease-fade-in`, `.ease-slide-up`, `.ease-btn`) directly inside your React components:

```jsx
// app/page.js
export default function Page() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 className="ease-slide-up">Welcome to EaseMotion + Next.js</h1>
      <button className="ease-btn ease-hover-bounce-text">Interactive Action</button>
    </main>
  );
}
```
