# stack-spacing-qz9k

Sass mixins for vertical rhythm using the "stack" pattern —
`> * + * { margin-top: ... }` — instead of `margin-bottom` on every child.

## Usage

```scss
@use 'stack-spacing' as *;

.article-body {
  @include stack-spacing(1rem);
}

.hero-content {
  @include stack-spacing-responsive($space-mobile: 0.75rem, $space-desktop: 2rem);
}
```

| Param | Default | Description |
|---|---|---|
| `$space` | `1rem` | Gap between consecutive children. |
| `$space-mobile` / `$space-desktop` / `$breakpoint` | `0.75rem` / `1.5rem` / `48rem` | Responsive variant's narrow/wide gaps and the switch point. |

## Why is it useful?

Setting `margin-bottom` on every child of a container is the more common
approach to vertical rhythm, but it has a specific compounding bug: the
*last* child still carries that margin-bottom, which adds an extra gap
between the stack and whatever comes after it — and if that "whatever
comes after" is itself spaced by margin-top or is a flex/grid gap on an
outer container, the two margins compound into a visibly larger-than-
intended gap at that one boundary. The `> * + *` selector (Heydon
Pickering's "lobotomized owl" selector — it targets any element that is
immediately preceded by a sibling) applies margin only *between* children,
never on the first child (nothing precedes it) or trailing past the last
child (nothing follows within the selector's scope) — so a stack's total
footprint is exactly its children's own heights plus the gaps strictly
between them, with no extra margin bleeding into whatever container or
sibling sits around the stack.

The responsive variant exists because vertical rhythm often should tighten
on narrow viewports (more content needs to fit without excessive
scrolling) and relax on wide ones (more breathing room reads as more
polished once there's room to spare) — expressed as two values and one
breakpoint rather than the caller needing to write their own duplicate
media query wrapping the same selector twice.

## Nested stacks

Because the selector is scoped to `>` (direct children only), a stack
nested inside another stack's item doesn't inherit or interfere with the
outer stack's spacing — each `@include stack-spacing` call only affects
its own immediate children, so a card containing its own internal stack of
paragraphs works correctly without extra scoping effort:

```scss
.page-sections { @include stack-spacing(3rem); }
.card-content { @include stack-spacing(0.75rem); }
```

```html
<div class="page-sections">
  <section>...</section>
  <div class="card">
    <div class="card-content">
      <p>First paragraph.</p>
      <p>Second paragraph, spaced by card-content's own rhythm.</p>
    </div>
  </div>
</div>
```

## Overriding spacing for a specific child

Because the stack applies margin via a selector, not inline styles, a
specific child can still override its own spacing with a more specific
rule when one item genuinely needs a different gap than the rest of the
stack:

```scss
.article-body {
  @include stack-spacing(1rem);

  .pull-quote {
    margin-top: 2rem; // this specific element wants more breathing room
  }
}
```

## Horizontal stacks

The same `+ *` pattern works for horizontal spacing by swapping
`margin-top` for `margin-left` (or `margin-inline-start` for
writing-mode-aware spacing), useful for a horizontal button group or
breadcrumb-style layout that wants the same "gap only between items, never
on the edges" property this mixin provides vertically. This isn't
included as a separate mixin here since `gap` on a flex/grid container is
now the more idiomatic modern approach for horizontal spacing — the stack
selector pattern remains most relevant for block-level vertical rhythm,
where `gap` support on non-flex/grid contexts is more limited.
