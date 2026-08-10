# container-query-advk

Named container-query breakpoints, so a component responds to the space it is
given rather than to the viewport.

## Configuration

```scss
@use "container-query-advk" as cq with (
  $container-sizes: ("sm": 20rem, "md": 30rem, "lg": 42rem)
);
```

## API

| Mixin | Purpose |
|---|---|
| `container($name, $type)` | Declare a query container. |
| `cq-up($size, $name)` | At or above a named width. |
| `cq-down($size, $name)` | Below a named width. |
| `cq-between($from, $to, $name)` | Between two named widths. |

## Usage

```scss
@use "container-query-advk" as cq;

.card-host { @include cq.container(card); }

.card {
  display: grid;
  gap: 0.75rem;

  @include cq.cq-up("md", card) {
    grid-template-columns: 8rem 1fr;
  }
}
```

## Why it fits EaseMotion CSS

Every responsive rule in this framework keys off the viewport, which is the wrong
measurement for a component library. A card in a full-width hero and the same card
in a 240px sidebar get identical styles at a given viewport width, even though one
has six times the room. Authors work around it with modifier classes like
`card--narrow`, which pushes a layout concern into the markup.

Container queries measure the actual available space, so one card component adapts
correctly wherever it is placed and the modifier classes disappear.

Naming the container is worth doing even though it is optional: an unnamed query
resolves against the nearest ancestor container, which silently changes meaning
when components are nested. Passing `card` pins the query to the intended element.

The `- 0.0625rem` in `cq-down` and `cq-between` prevents the one-pixel overlap
where both an `up` and a `down` rule match at exactly the boundary — the same
off-by-one that causes flickering at breakpoints in viewport media queries.
