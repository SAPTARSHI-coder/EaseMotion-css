# useMediaQuery

Tracks whether a CSS media query currently matches, re-rendering on change.

## API

```js
const matches = useMediaQuery('(min-width: 768px)');
```

## Usage

```jsx
function Layout() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return isDesktop ? <SidebarLayout /> : <StackedLayout />;
}
```

## Why is it useful?

A common version of this hook initializes state to `false` and only reads
the real match inside `useEffect`, which means the first client render
always assumes the query doesn't match — visible as a layout flash on
desktop viewports that briefly render the mobile layout before the effect
runs. This hook seeds `useState` with a lazy initializer that calls
`matchMedia` directly, so the first render already reflects the actual
viewport.

It also falls back to the deprecated `addListener`/`removeListener` pair for
Safari versions before 14, which never implemented
`MediaQueryList.addEventListener`, so the hook doesn't silently stop
tracking changes on older Safari.
