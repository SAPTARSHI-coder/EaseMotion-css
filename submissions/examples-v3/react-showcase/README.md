# EaseMotion CSS — React Showcase

A self-contained **React + Vite** application that demonstrates EaseMotion CSS
animation utilities in a real component-driven context.

---

## What's inside?

| Component | Description |
|-----------|-------------|
| `App` | Root component assembling all sections |
| `Animate` | Wrapper that applies `ease-{type}` classes via props |
| `Modal` | Accessible modal dialog (keyboard + backdrop close) |
| `AnimationPlayground` | Interactive selector that previews any EaseMotion class live |

---

## Running the showcase

```bash
# from this directory:
npm install
npm run dev
```

Open <http://localhost:5173> in your browser.

---

## Running the tests

```bash
npm test
```

The test suite uses **Vitest** + **React Testing Library** and runs in a `jsdom`
environment. No browser is required.

```bash
# Watch mode (re-runs on save):
npm run test:watch

# With coverage report:
npm run test:coverage
```

---

## Test coverage

| Test file | What is tested |
|-----------|----------------|
| `App.test.jsx` | Application renders, all sections present |
| `Animate.test.jsx` | Class application, hover variant, delay/duration props |
| `Modal.test.jsx` | Open/close, Escape key, backdrop click, ARIA attributes |
| `AnimationPlayground.test.jsx` | Selector change updates preview class, replay behaviour |

---

## Tech stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Vitest 2](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [@testing-library/user-event](https://testing-library.com/docs/user-event/intro)
- [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css)
