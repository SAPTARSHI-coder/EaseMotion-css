# Break Inside Utilities Demo

A demonstration of CSS `break-inside` utilities used to prevent elements from being split across columns, pages, or regions.

## Files

```text
demo.html
style.css
README.md
```

## Utilities Included

| Class | CSS Property |
|---------|---------|
| `.break-inside-auto` | `break-inside: auto;` |
| `.break-inside-avoid` | `break-inside: avoid;` |
| `.break-inside-avoid-page` | `break-inside: avoid-page;` |
| `.break-inside-avoid-column` | `break-inside: avoid-column;` |
| `.break-inside-avoid-region` | `break-inside: avoid-region;` |

## Demo Overview

The demo uses:

```css
column-count: 3;
```

to create a masonry-style layout.

Each card uses:

```css
.break-inside-avoid {
    break-inside: avoid;
}
```

which prevents cards from splitting between columns.

## Common Use Cases

### Masonry Layouts

```html
<div class="card break-inside-avoid">
    Content
</div>
```

### Multi-Column Articles

```html
<article class="break-inside-avoid-column">
    Long content
</article>
```

### Print Layouts

```html
<section class="break-inside-avoid-page">
    Invoice Details
</section>
```

## Browser Support

| Value | Support |
|---------|---------|
| auto | Excellent |
| avoid | Excellent |
| avoid-column | Good |
| avoid-page | Print-focused |
| avoid-region | Limited |

## Run

Simply open:

```text
demo.html
```

in a browser.