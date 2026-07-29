# Fix: Reveal Reduced Motion

Replaces the one-time `matchMedia(...).matches` check in `core/reveal.js` with a `matchMedia(...).addEventListener('change', ...)` listener so reveal elements respond immediately when the OS `prefers-reduced-motion` setting changes, without requiring a page reload.

## Usage

Open `demo.html` in a browser. Scroll to see reveal cards animate. Click the button to simulate reduced motion — all cards appear instantly. The same script listens for real OS-level preference changes via `matchMedia`.

## Why

A static check at load time ignores live accessibility changes. Users who toggle reduced motion after the page loads are stuck with the wrong behaviour until they reload. This fix makes EaseMotion respect accessibility preferences in real time.
