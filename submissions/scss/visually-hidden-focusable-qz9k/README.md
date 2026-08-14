# visually-hidden-focusable-qz9k

A visually-hidden mixin plus a focusable variant that reveals its content
when focused — for elements that should stay hidden from sighted mouse
users but must become visible the instant a keyboard user reaches them.

## Usage

```scss
@use 'visually-hidden-focusable' as *;

// Permanently hidden, screen-reader-only text.
.sr-only-hint {
  @include visually-hidden;
}

// A skip-navigation link: hidden until focused, then visible.
.skip-link {
  @include visually-hidden-focusable;
}
```

```html
<a class="skip-link" href="#main">Skip to content</a>
```

## Why is it useful?

`visually-hidden` alone is right for content that should *never* be
visually shown — supplementary context for a screen reader that has no
sighted equivalent. But a skip-navigation link specifically needs the
opposite behavior once focused: it must become visible on-screen the
moment a keyboard user tabs to it, so they can see where their focus
landed, unlike purely decorative screen-reader-only text which stays
invisible forever regardless of focus. Conflating the two — applying plain
`visually-hidden` to a skip link — leaves a keyboard user's focus on an
invisible element with no visual confirmation of where they are, which
defeats the entire purpose of a skip link.

`visually-hidden-focusable` builds directly on `visually-hidden` (via
`@include`) and only adds a `:focus`/`:focus-within` override that resets
every property the base mixin set — `position`, dimensions, `overflow`,
`clip`, `white-space` — back to normal flow values, using `inherit`/`auto`
rather than specific pixel values so the reveal doesn't impose its own
sizing constraints on whatever content happens to be inside. `:focus-within`
(not just `:focus`) is included so a wrapping element also reveals when a
*child* receives focus, not only when the wrapper itself is the directly
focused element — relevant if the hidden element contains its own
focusable children rather than being focusable itself.

## Placement in the DOM matters

A skip link needs to be one of the very first focusable elements in the
document, typically the first child of `<body>`, since its purpose is
letting a keyboard user bypass repeated navigation before reaching it via
Tab:

```html
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <nav>...</nav>
  <main id="main">...</main>
</body>
```

Placing it later in the DOM (after the navigation it's meant to skip)
defeats the purpose entirely, since a keyboard user would already have to
tab through the navigation to reach the skip link.

## Why not display:none instead

An alternative to the clip-based technique is display:none at rest,
switched to display:block on focus, but display:none removes an element
from the accessibility tree and from the natural Tab order entirely,
meaning a keyboard user could never Tab to it in the first place to
trigger the :focus state that would reveal it. The clip-based approach
keeps the element genuinely present, focusable, and reachable via Tab at
all times; only its visual rendering is suppressed until focused.

## Extending to a full skip-links menu

For a page with multiple skip targets (skip to main content, skip to
search, skip to footer), the same mixin applies to each link in a small
group, typically wrapped together so they appear as a coherent set once
any one of them receives focus:

```scss
.skip-links {
  position: absolute;
  z-index: 999;
}

.skip-links a {
  @include visually-hidden-focusable;
  display: block;
}
```

## Testing this pattern

Verifying a skip link works correctly means tabbing from a fresh page
load (not clicking into the page first, which can change initial focus)
and confirming the link becomes visible on the very first Tab press,
activates correctly on Enter, and moves focus to the target element,
which itself typically needs tabindex="-1" if it isn't natively
focusable, so focus can actually land there.
