# CSS Online Users Sidebar

A sidebar listing members grouped by status (**Online**, **Away**,
**Offline**), each with an avatar, a pulsing status dot, and a search
input at the top. Pure CSS/HTML — no JavaScript.

## Files

- `demo.html` — sidebar with 3 status groups (7 users total) and a search box
- `style.css` — layout, status-dot colors/pulse, and entrance animations
- `README.md` — this file

## How it works

Each `.user-row` has a `.user-status` dot colored via a CSS custom
property per status (`--online`, `--away`, `--offline`); the online dot
also gets a looping `status-pulse` `@keyframes` ring, like a live
presence indicator. Rows animate in with a short staggered `row-in`
animation. The whole sidebar scrolls internally if the member list
grows past its `max-height`.

## Usage

```html
<aside class="users-sidebar" aria-label="Online users">
  <div class="users-sidebar-header">
    <h2>Members</h2>
    <span class="users-count" aria-label="14 total members">14</span>
  </div>

  <div class="users-search">
    <svg class="users-search-icon" viewBox="0 0 24 24" aria-hidden="true">...</svg>
    <input type="search" class="users-search-input" placeholder="Search members" aria-label="Search members" />
  </div>

  <div class="users-group">
    <p class="users-group-label">Online — 3</p>
    <ul class="users-list" role="list">
      <li class="user-row" tabindex="0">
        <span class="user-avatar" aria-hidden="true">AK</span>
        <span class="user-status online" aria-hidden="true"></span>
        <span class="user-name">Aditi Kapoor</span>
        <span class="sr-only">Online</span>
      </li>
    </ul>
  </div>
</aside>
```

Repeat `.users-group` blocks for each status tier, and `.user-row` for
each member within a group.

### About the search box

The issue asks for a sidebar "with status dots and search." The status
dots are fully CSS. The search box, though, can't actually filter the
list in pure CSS — there's no CSS mechanism that reads what's typed
into an `<input>` and hides/shows list items based on matching that
text against arbitrary member names. That's a JavaScript (or server-side)
capability, not something `:focus`, `:has()`, or any other selector can
do against free-text content.

So the search input here is included as real, usable, correctly-labeled
markup (a proper `<input type="search">` with an icon and placeholder,
styled to match the sidebar) but it's not wired to filter anything in
this pure-CSS build — filtering would need a small JS listener on
`input` to toggle a class per non-matching `.user-row`. Flagging this
up front rather than have it be a surprise in review; happy to add that
JS layer if the maintainer prefers a working filter over the CSS-only
scope.

### Accessibility

- `aria-label="Online users"` on the `<aside>` identifies the whole
  region for screen readers.
- Each status dot is `aria-hidden` with a paired `.sr-only` text label
  ("Online" / "Away" / "Offline") so status is announced as text, not
  inferred from color alone.
- The search input has a proper `aria-label` and placeholder, and
  `type="search"` gets native semantics (including an OS-provided clear
  button in most browsers).
- Rows are focusable (`tabindex="0"`) with a visible `:focus-visible`
  outline for keyboard users.
- `role="list"` keeps list semantics explicit.

### Responsive behavior

At `max-width: 420px` the sidebar drops its fixed max-width and fills
the available space instead, with slightly tighter padding.

### Reduced motion

`prefers-reduced-motion: reduce` disables the sidebar entrance, row
entrance, and the online-status pulse ring.

## Why it fits EaseMotion CSS

Pure CSS/HTML, no JavaScript, no external assets, readable staggered
`@keyframes` for entrances and the status pulse, and accessible/
responsive markup — matching the repo's animation-first,
accessible-by-default philosophy.

## Notes

- No existing files were modified — strictly additive, living entirely
  in `submissions/examples/css-online-users-sidebar/`.
