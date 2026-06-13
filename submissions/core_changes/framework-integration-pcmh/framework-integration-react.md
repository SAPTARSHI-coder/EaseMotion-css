# Using EaseMotion CSS with React

## Installation

```bash
npm install easemotion-css
```

## Global Import

Import the stylesheet in your entry point:

```jsx
// app.jsx or main.jsx
import 'easemotion-css/easemotion.min.css';
```

For **Next.js App Router**, import in `app/layout.js`:

```jsx
// app/layout.js
import 'easemotion-css/easemotion.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

For **Next.js Pages Router**, import in `pages/_app.js`:

```jsx
// pages/_app.js
import 'easemotion-css/easemotion.min.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;
```

## Component Example

```jsx
function HeroSection() {
  return (
    <section className="ease-center ease-padding-16">
      <h1 className="ease-fade-in">Build faster.</h1>
      <button className="ease-btn ease-btn-primary ease-hover-grow">
        Get Started
      </button>
    </section>
  );
}
```

## Card Component

```jsx
function ProfileCard({ name, role }) {
  return (
    <div className="ease-card ease-hover-lift" style={{ maxWidth: 320 }}>
      <h2 className="ease-text-lg">{name}</h2>
      <p className="ease-text-sm ease-muted">{role}</p>
      <button className="ease-btn ease-btn-outline ease-btn-sm">
        View Profile
      </button>
    </div>
  );
}
```

## SSR / Next.js Notes

- Import styles in `app/layout.js` (App Router) or `pages/_app.js` (Pages Router) to ensure styles are available server-side.
- EaseMotion CSS uses CSS custom properties — no flash of unstyled content (FOUC) on SSR.
- No tree-shaking configuration needed; unused classes add minimal overhead (~5 KB gzipped).

## Scoped Styles / CSS Modules

EaseMotion CSS classes are global by design. You can safely combine them with CSS Modules:

```jsx
import styles from './MyComponent.module.css';

function MyComponent() {
  return (
    <div className={`ease-card ${styles.wrapper}`}>
      {/* scoped + global classes work together */}
    </div>
  );
}
```
