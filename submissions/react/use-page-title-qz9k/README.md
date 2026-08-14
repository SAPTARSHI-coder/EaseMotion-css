# usePageTitle

Sets `document.title` while a component is mounted, restoring the previous
title on unmount.

## API

```js
usePageTitle(title, { restoreOnUnmount });
```

| Param | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Title to set while mounted. |
| `restoreOnUnmount` | `boolean` | `true` | Whether to restore the prior title when the component unmounts. |

## Usage

```jsx
function ProductDetail({ product }) {
  usePageTitle(`${product.name} — Store`);
  return <ProductView product={product} />;
}

function UnreadBadgeTitle({ unreadCount }) {
  // Doesn't restore on unmount -- this one is meant to persist app-wide.
  usePageTitle(unreadCount > 0 ? `(${unreadCount}) Inbox` : 'Inbox', { restoreOnUnmount: false });
  return null;
}
```

## Why is it useful?

Setting `document.title` directly inside a component (`document.title =
...` in a plain `useEffect`) works for the mount case but leaves a stale
title behind once the component unmounts — navigating away from a product
detail page whose title included the product name means the browser tab
keeps showing that product's name even after the user has moved on to an
unrelated page, until something else happens to overwrite it. Capturing
`document.title` at mount time and restoring it in the effect's cleanup
means a component's title change is properly scoped to its own mounted
lifetime, the same way a well-behaved side effect should clean up after
itself.

`restoreOnUnmount: false` is available for the cases where that scoping is
specifically *not* wanted — a persistent unread-count badge in the title
that should keep showing after the component managing it unmounts, rather
than reverting to whatever title was present before it first mounted.

## Nested title-setting components

Because each call captures `document.title` at its own mount time, nested
components each setting a title compose correctly without extra
coordination:

```jsx
function AppShell({ children }) {
  usePageTitle('My App');
  return <div>{children}</div>;
}

function ProductPage({ product }) {
  // Captures 'My App' as its "previous" title, since AppShell already set it.
  usePageTitle(`${product.name} — My App`);
  return <ProductDetail product={product} />;
}
```

When `ProductPage` unmounts (e.g. the user navigates to a different route
still inside `AppShell`), it restores `'My App'` — the title that was
actually present at the moment it mounted — rather than whatever arbitrary
string might have been set in between. Each `usePageTitle` call only ever
knows about the title immediately before its own mount, which is exactly
the scope it needs to restore correctly.

## Interaction with route changes

In an app using a router, it's common to call `usePageTitle` once per
route-level component rather than centralizing all title logic in one
place. Because titles restore automatically on unmount, this scales
without a router-level title registry: each route component owns setting
(and un-setting) its own title, and the previous route's title — which by
then has already been restored — is naturally what a user sees if they
navigate back, with no explicit history of titles to manage.

## A note on SSR

`document` isn't available during server-side rendering. The title
assignment itself is safe by construction — it happens inside `useEffect`,
which never runs during a server render pass at all — but the ref's initial
value expression, `useRef(document.title)`, executes during render on both
server and client, so referencing `document` there directly would throw on
the server. This hook guards that read with `typeof document !==
'undefined'`, falling back to an empty string during SSR, since the value
is only ever actually used once the effect runs client-side and overwrites
it with the real `document.title` anyway.
