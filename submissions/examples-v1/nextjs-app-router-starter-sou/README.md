# Next.js App Router Starter — EaseMotion CSS

A reference starter template that demonstrates the officially recommended way to integrate **EaseMotion CSS** into a **Next.js 14+ App Router** project. This submission provides a self-contained HTML demo that visually mirrors what a real Next.js App Router page using EaseMotion CSS looks and behaves like, along with a complete step-by-step guide for porting it into an actual Next.js project.

---

## 1. What does this do?

It provides a canonical, animation-first reference implementation showing developers how to structure a Next.js App Router project with EaseMotion CSS — including root layout setup, global CSS import strategy, page composition patterns, and correct usage of `ease-*` utility classes in server and client components.

## 2. How is it used?

### Live demo (self-contained)

Open `demo.html` directly in any modern browser — no server, no build step, no dependencies. The demo mirrors what a real `app/page.tsx` rendered inside an `app/layout.tsx` would look like using the same `ease-fade-up` utility referenced in the issue.

### Real Next.js integration

Inside a real Next.js App Router project, the classes are used exactly like this:

```tsx
// app/layout.tsx
import "easemotion-css/dist/easemotion.min.css";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="ease-fade-up">
          <h1>My App</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
```

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <section>
      <h1 className="ease-fade-up">Welcome to EaseMotion CSS</h1>
      <p className="ease-fade-up delay-1">
        Animation-first utilities that just work with the App Router.
      </p>
      <div className="ease-fade-up delay-2">
        <button>Get Started</button>
      </div>
    </section>
  );
}
```

### Recommended project structure

```
my-app/
├── app/
│   ├── layout.tsx        // Root layout — imports EaseMotion CSS globally
│   ├── page.tsx          // Home page — uses ease-* utilities
│   ├── globals.css       // Global styles + EaseMotion CSS import
│   └── (routes)/
│       └── about/
│           └── page.tsx
├── components/
│   └── AnimatedCard.tsx  // Reusable UI using className="ease-*"
├── public/
├── next.config.js
├── tsconfig.json
└── package.json
```

### Setup in 3 steps

1. **Scaffold a Next.js App Router project**
   ```bash
   npx create-next-app@latest my-app --app
   ```

2. **Install EaseMotion CSS**
   ```bash
   npm install easemotion-css
   ```

3. **Import once inside `app/layout.tsx`**
   ```tsx
   import "easemotion-css/dist/easemotion.min.css";
   ```

That's it — every server and client component under the `app/` directory can now use any `ease-*` utility via `className`.

### Available classes in this demo

| Class | Purpose |
|---|---|
| `ease-fade-up` | Fade + slide-up entrance animation |
| `delay-1` | Adds 0.15s animation delay (for staggering) |
| `delay-2` | Adds 0.30s animation delay |
| `delay-3` | Adds 0.45s animation delay |
| `delay-4` | Adds 0.60s animation delay |
| `delay-5` | Adds 0.75s animation delay |

## 3. Why is it useful?

EaseMotion CSS already includes community-driven Next.js examples, but there was no canonical, animation-first reference showing the recommended integration pattern for the modern App Router architecture. This starter fills that gap and directly addresses issue **#33841** by:

- **Providing a consistent, officially-styled project structure** developers can copy from
- **Reducing onboarding time** for teams adopting EaseMotion CSS on Next.js
- **Demonstrating the exact `ease-*` usage pattern** inside `layout.tsx` and `page.tsx`
- **Serving as a reusable reference** for future documentation and blog posts
- **Fully embracing EaseMotion's animation-first philosophy** — every element enters with a smooth staggered `ease-fade-up`, buttons lift on hover, nav links animate their underline, and the design respects `prefers-reduced-motion` for accessibility

---

## Features

- ⚡ **Next.js 14+ App Router** integration pattern
- 🎬 **Animation-first** — every section enters with smooth staggered `ease-fade-up`
- 📦 **Zero dependencies** — pure HTML, CSS, no build step required for the demo
- 🎨 **Modern dark UI** with gradient accents matching the EaseMotion aesthetic
- 📱 **Fully responsive** — mobile-friendly grid, header, and typography
- ♿ **Accessible** — respects `prefers-reduced-motion`
- 🧩 **Copy-paste ready** — real `tsx` snippets included in the README

---

## Files

| File | Description |
|---|---|
| `demo.html` | Self-contained demo mirroring a Next.js App Router page — opens directly in a browser |
| `style.css` | All component styles, `ease-fade-up` utility, and stagger delay utilities |
| `README.md` | This documentation with Next.js integration guide |

---

## Closes

Issue **#33841** — Official Next.js App Router Starter Template
