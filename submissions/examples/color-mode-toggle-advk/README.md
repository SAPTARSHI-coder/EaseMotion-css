# Color Mode Toggle

## What does this do?

A three-way light/dark/system colour mode switch. Choosing "System" clears
any stored override entirely rather than resolving and storing whatever the
OS currently prefers, so the page keeps tracking OS-level changes live.

## How is it used?

```js
function cmtApply(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('cmt-theme', mode);
}
```

The "System" button instead calls `removeAttribute('data-theme')` and
`localStorage.removeItem`, rather than `cmtApply('system')` — there is no
`[data-theme="system"]` CSS branch, because "system" means "no override."

## Why is it useful?

A tempting shortcut is to have "System" read `prefers-color-scheme` once and
store the resolved `light`/`dark` value, which is simpler CSS (only one
override selector) but silently breaks the one feature "System" promises:
if the OS theme changes later — switching at sunset, or the user changing
it in settings — a stored resolved value never updates, while `prefers-
color-scheme` media query keeps tracking it. Clearing the attribute
entirely for "System" means the `@media (prefers-color-scheme: dark)` rule
is free to keep responding to OS changes for as long as no explicit
override is set.

Dark styling has to be written twice — once under the media query, once
under `[data-theme="dark"]` — because a media query can't be satisfied by an
attribute selector. The override block is placed after the media query in
source order specifically so it wins on equal specificity when both could
otherwise apply.
