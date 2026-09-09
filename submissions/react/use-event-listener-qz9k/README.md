# useEventListener

Attaches a DOM event listener to `window`, `document`, or a ref'd element,
always calling the latest handler without re-attaching the listener when the
handler's identity changes.

## API

```js
useEventListener(eventName, handler, target);
```

| Param | Type | Default | Description |
|---|---|---|---|
| `eventName` | `string` | — | Event name, e.g. `'resize'`, `'keydown'`. |
| `handler` | `(event) => void` | — | Called on the event. |
| `target` | `RefObject \| EventTarget` | `window` | What to listen on. |

## Usage

```jsx
function ScrollTracker() {
  const [scrolled, setScrolled] = useState(false);
  useEventListener('scroll', () => setScrolled(window.scrollY > 100));
  return scrolled ? <BackToTop /> : null;
}

function ClickOutside({ onOutsideClick, children }) {
  const ref = useRef(null);
  useEventListener('click', (e) => {
    if (ref.current && !ref.current.contains(e.target)) onOutsideClick();
  }, document);
  return <div ref={ref}>{children}</div>;
}
```

## Why is it useful?

Listening for a DOM event directly inside `useEffect` with an inline arrow
function as the handler re-runs the effect (removing and re-adding the
listener) on every render where that inline function is recreated — for a
high-frequency event like `scroll` or `mousemove`, that's a
remove/add-listener cycle on every single render, which is wasted work at
best and a source of missed events during the brief window between removal
and re-addition at worst. Reading the handler through a ref, the same
pattern `useTimeout`/`useInterval` use for callbacks, means the listener
itself is attached exactly once per `eventName`/`target` pair and stays
attached across renders, while still always invoking whatever handler was
passed most recently.

Accepting either a ref object or a raw `EventTarget` (defaulting to
`window`) as `target` covers the two most common cases — global listeners
and listeners scoped to one DOM node — without needing two separate hooks
for what's structurally the same operation.

## Listening on document vs. a specific ref

Both forms below use the same hook, just with a different `target`:

```jsx
function EscapeToClose({ onClose }) {
  // Global listener: target omitted, defaults to window.
  useEventListener('keydown', (e) => {
    if (e.key === 'Escape') onClose();
  });
  return null;
}

function ResizableSidebar() {
  const sidebarRef = useRef(null);
  const [width, setWidth] = useState(240);

  // Scoped listener: target is a ref, resolved via target.current inside the hook.
  useEventListener('pointermove', (e) => {
    setWidth(Math.max(160, e.clientX));
  }, sidebarRef);

  return <aside ref={sidebarRef} style={{ width }}>...</aside>;
}
```

The hook checks `'current' in target` to distinguish a ref object from a
raw `EventTarget` like `document` — a ref always exposes a `.current`
property (even if currently `null`), while `window`/`document` don't, so
the check reliably tells the two calling conventions apart without an
explicit flag.

## Handling a ref that isn't attached yet

If `target` is a ref whose `.current` is still `null` on the first render
(the ref'd element hasn't mounted yet), the effect's guard clause
(`if (!node || !node.addEventListener) return`) simply skips attaching a
listener that render — the effect re-runs whenever `target` changes
identity, but a ref object's identity is stable across renders by design,
so this hook alone won't re-attach once the element mounts. Pair it with a
callback ref (or re-run logic keyed on a separate "mounted" state) if the
listener genuinely needs to attach the moment a conditionally-rendered
element appears, rather than assuming it was already present when this
hook's effect first ran.
