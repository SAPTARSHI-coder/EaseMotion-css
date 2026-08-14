# link-visited-style-qz9k

A Sass mixin bundling the classic link pseudo-class states —
`:link`, `:visited`, `:hover`, `:focus-visible`, `:active` — written in the
CSS specification's required LVHA order.

## Usage

```scss
@use 'link-visited-style' as *;

a.body-link {
  @include link-visited-style($color: #2563eb, $visited: #7e22ce);
}
```

| Param | Default | Description |
|---|---|---|
| `$color` | `#4c6ef5` | Unvisited link colour. |
| `$visited` | `#7c5cbf` | Visited link colour. |
| `$hover` | `#3b5be0` | Hover colour. |
| `$active` | `#2d47b8` | Active (mid-click) colour. |

## Why is it useful?

`:link`, `:visited`, `:hover`, and `:active` all have equal specificity
when applied to the same element, which means when more than one could
match simultaneously (a link is both `:visited` and currently `:hover`ed,
for instance), the one that comes *later in source order* wins — not the
one that seems more specific or more important. Writing them in the wrong
order is a classic, easy-to-make bug: a `:hover` rule declared before
`:visited` in the stylesheet means a visited link's hover state silently
never shows the hover colour, because the later `:visited` rule always
overrides it whenever both apply. This is exactly why the CSS
specification recommends (and this mixin encodes as a fixed structure) the
"LVHA" order: `:link`/`:visited` first, then `:hover`, then `:active` — an
order chosen so each subsequent state can correctly override the ones
before it when multiple apply at once.

`:focus-visible` is included between `:hover` and `:active` here — it
doesn't participate in the same equal-specificity conflict as the other
four (a link isn't simultaneously `:hover`ed and `:focus-visible` from the
same input in the way `:visited` and `:hover` naturally coexist), so its
position relative to the others is less strict, but keeping it grouped
with the other interaction states in one mixin means a caller styling a
link's full state set only needs one `@include` rather than remembering to
add focus styling separately.

## Demonstrating the bug this mixin prevents

To make the ordering requirement concrete, here's the exact failure this
mixin's fixed structure avoids:

```scss
// Buggy: :visited declared AFTER :hover.
a {
  &:hover { color: blue; }
  &:visited { color: purple; }
}
```

A visited link that's also currently hovered ends up purple, not blue —
`:visited` comes later in source order, so it wins despite `:hover` being
the state that's actually true "right now" as the user interacts with the
link. This is exactly backwards from what's intended (hover feedback
should be visible regardless of visited state), and the bug is easy to
miss in development since it only manifests when both states are true
simultaneously, which requires deliberately hovering a link the developer
has already visited to notice.

## Privacy constraints on :visited styling

Modern browsers restrict which CSS properties `:visited` can actually
change, specifically to prevent a page from using visited-link styling as
a way to detect a user's browsing history (an actual security exploit that
was possible in older browsers). Only `color`, `background-color`,
`border-color`, `outline-color`, and a handful of similar colour-only
properties are permitted on `:visited` — properties like `display`,
`content`, or anything that could be measured to leak whether a link is
visited (via `getComputedStyle` or layout side effects) are silently
ignored on `:visited` regardless of what's declared. This mixin only
touches `color` on `:visited`, which stays within that allowed set.

## When link-visited styling isn't wanted

Not every link should show a distinct visited state — a primary
navigation link ("Home", "Dashboard") is visited by definition on every
page load and showing it in a different colour conveys no useful
information, just visual noise. This mixin is intended for content links
specifically (search results, article links, a list of external
references) where "have I already read this" is genuinely useful
information to the user, not for structural navigation links that don't
benefit from a visited/unvisited distinction.

## Testing visited styles during development

`:visited` state can't be inspected directly via browser dev tools for the
same privacy reasons noted above — `getComputedStyle` on a visited link
reports the *unvisited* styles even when the link visually renders as
visited, to prevent script-based history sniffing. Verifying visited
styling during development means visually confirming a link you've
actually navigated to renders correctly, not relying on dev tools to
report the applied computed style.
