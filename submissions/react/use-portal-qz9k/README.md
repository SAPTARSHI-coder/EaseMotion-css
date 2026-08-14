# usePortal

Creates a dedicated DOM node appended to `document.body` and returns a
render function that portals React children into it, cleaning the node up
on unmount.

## API

```js
const renderPortal = usePortal(id);
```

`id` (optional) sets the created node's `id` attribute, useful for
targeting it in tests or CSS.

## Usage

```jsx
function Tooltip({ children, label }) {
  const renderPortal = usePortal();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <span onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
        {children}
      </span>
      {visible && renderPortal(<div className="tooltip-bubble">{label}</div>)}
    </>
  );
}
```

## Why is it useful?

A tooltip, modal, or toast nested inside a component tree that has
`overflow: hidden`, `overflow: auto`, or a `transform` (which creates a new
stacking/containing-block context) anywhere in its ancestor chain gets
visually clipped or mispositioned no matter how high a `z-index` is set on
the floating element itself — CSS stacking contexts and clipping ancestors
apply regardless of `z-index` value once the element is a descendant of
one. Portaling the element's actual DOM node out to `document.body` (while
it stays a normal React child for props/context purposes) sidesteps the
problem entirely, since the rendered node is no longer a descendant of
whatever ancestor was clipping or containing it.

The portal target node is created in an effect (not during render) since
DOM mutation belongs in an effect, and the hook forces one extra render
immediately after creating the node — `renderPortal` returns `null` until
`nodeRef.current` exists, so without that forced re-render, the very first
render would portal nothing even though the target node is about to exist
moments later.

## What still works normally through the portal

Even though the portaled content's actual DOM node lives outside the
component tree it's declared in, React preserves normal event bubbling and
context through the portal boundary — a click inside the portaled tooltip
still bubbles up through the *React* tree (reaching parent `onClick`
handlers as if the DOM were nested normally), and any context provider
wrapping the component that calls `usePortal` is still available to the
portaled children. Only the DOM structure itself — and therefore CSS
inheritance, stacking context, and clipping — actually changes; React's own
tree semantics don't.

## Multiple portals sharing one target

Each call to `usePortal` creates its own dedicated node — two components
both calling `usePortal()` get two independent `<div>`s appended to
`document.body`, not one shared node. For a single stacking layer meant to
host several different portaled elements at once (a toast notification
stack, for instance), create one `usePortal()` call at a shared ancestor
and pass the resulting `renderPortal` function down, rather than calling
the hook separately in each toast component.

## Server-side rendering

`document.body` doesn't exist during SSR, so this hook does nothing on the
server — the node-creation effect never runs during a server render pass,
and `renderPortal` correctly returns `null` until the effect runs
client-side after hydration. Content meant to appear inside a portal
therefore doesn't exist in the server-rendered HTML at all, which is
expected for genuinely client-only UI like tooltips and modals that only
make sense in response to user interaction.

## Cleanup ordering with nested portals

If a portaled element itself renders another `usePortal`-based child (a
tooltip inside a modal, say), React's unmount order guarantees the inner
portal's cleanup effect runs before the outer one's, so `document.body`
never ends up with an orphaned node whose parent was already removed —
each hook instance only ever removes the exact node it created, regardless
of unmount order relative to other portals.
