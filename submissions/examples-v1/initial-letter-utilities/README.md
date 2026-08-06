# CSS `initial-letter` Utilities

Relates to feature request **#41286**.

## 1. What does this do?

Provides utility classes based on the CSS `initial-letter` property to create elegant drop caps and raised initials for articles, blogs, magazines, and documentation — with responsive sizing and graceful float-based fallbacks for browsers without support.

## 2. Why is this useful for EaseMotion CSS?

Editorial layouts are becoming increasingly popular, yet most CSS utility libraries don't provide abstractions for advanced typography. Achieving a drop cap traditionally requires complex markup (wrapping the first letter in a `<span>`) or fragile JavaScript. Native `initial-letter` utilities help developers create premium reading experiences without additional markup or JavaScript.

## 3. Utilities Provided

| Class | `initial-letter` Value | Effect |
|---|---|---|
| `.ease-dropcap` | `initial-letter: 3` | Classic sunken drop cap — first letter spans 3 lines |
| `.ease-raisedcap` | `initial-letter: 3 1` | Raised initial — 3 lines tall but raises above baseline |
| `.ease-accentcap` | `initial-letter: 3` | Bold italic accent cap in brand teal color |

## 4. How is it used?

**HTML**
```html
<article class="ease-article">
  <p class="ease-dropcap">
    EaseMotion CSS helps developers build expressive interfaces using modern CSS.
  </p>
</article>
```

**CSS**
```css
/* The ::first-letter pseudo-element is the only target */
.ease-dropcap::first-letter {
  initial-letter: 3;
  margin-right: .35rem;
  color: #8c63ff;
  font-weight: bold;
}

/* Graceful fallback using float for unsupported browsers */
@supports not (initial-letter: 3) {
  .ease-dropcap::first-letter {
    float: left;
    font-size: 3.5rem;
    line-height: 0.85;
    margin-right: .35rem;
    font-weight: bold;
    color: #8c63ff;
  }
}
```

## 5. The Two-Value Syntax

`initial-letter: <size> <sink>` is a powerful two-value form:
- **`size`** — How many lines tall the letter appears visually
- **`sink`** — How many lines it sinks below the first line's baseline

So `initial-letter: 3 1` creates a **raised initial** — 3 lines tall but only sinking 1 line, so it rises *above* the text block. `initial-letter: 3` (one value) is shorthand for `initial-letter: 3 3` (sinks all the way).
