# ease-hero-text

> CSS-only hero typography component — **`text-wrap: balance`** for headings & **`text-wrap: pretty`** for body copy.
> Closes / addresses Issue [#61972](../../issues/61972).

---

## 1 · What does this do?

This component introduces two native CSS text-wrapping strategies to eliminate the most common typographic pain points in responsive hero sections — **without a single line of JavaScript**.

| Class | Property applied | What it fixes |
|---|---|---|
| `.ease-hero-title` | `text-wrap: balance` | The browser measures all possible line-break positions and picks the set that produces the most **even line lengths**, so no single line is dramatically shorter than the others. |
| `.ease-hero-description` | `text-wrap: pretty` | The browser looks ahead to the **last few lines** of a paragraph and avoids leaving a single word (an *orphan*) stranded on the final line by promoting an extra word to join it. |

Both properties are resolved entirely by the CSS layout engine at render time, meaning they respond automatically to every viewport size, font size change, or container width change with **zero runtime cost**.

---

## 2 · How is it used?

Apply the two utility classes directly to your heading and paragraph elements:

```html
<!-- Hero section wrapper -->
<header class="ease-hero-container">

  <!-- Heading: lines are length-balanced automatically -->
  <h1 class="ease-hero-title">
    Build Stunning Digital Experiences With Unprecedented Velocity
  </h1>

  <!-- Body copy: orphaned trailing words are prevented automatically -->
  <p class="ease-hero-description">
    EaseMotion gives your project a production-ready motion and layout
    system out of the box — zero configuration, zero dependencies.
    Stop wrestling with orphaned words and start building today.
  </p>

</header>
```

Link the stylesheet in your `<head>`:

```html
<link rel="stylesheet" href="path/to/ease-hero-text/style.css" />
```

No JavaScript. No build step. No additional dependencies.

---

## 3 · Why is it useful?

### For reviewers — interactive verification

> **Resize your browser window slowly** (drag the edge left and right) while viewing `demo.html`.
>
> - Watch the **headline** continuously redistribute its line breaks so that each line stays roughly the same width — this is `text-wrap: balance` at work.
> - Watch the **last line of the paragraph** — as the container narrows, the browser prevents the final word from sitting alone by pulling a neighbour down with it — this is `text-wrap: pretty` preventing an orphan.

### Why native CSS beats the old workarounds

| Old approach | Problem |
|---|---|
| JavaScript layout plugins (e.g., `balance-text.js`) | Adds kilobytes of JS to every page; re-runs on every resize event; can cause layout shift (CLS). |
| Manual `<br>` tags | Hard-coded to one viewport width; breaks on every other screen size; un-maintainable at scale. |
| Manual `&shy;` / `&#8203;` hints | Error-prone, locale-sensitive, and still orphan-blind. |

**`text-wrap: balance` and `text-wrap: pretty` solve all of the above at the CSS level**, making the layout inherently responsive, maintainable, and performant — exactly the kind of progressive enhancement EaseMotion is built to promote.

---

## Files

```
submissions/examples/ease-hero-text/
├── demo.html    ← Self-contained demo (open directly in a browser)
├── style.css    ← The component styles
└── README.md    ← This file
```

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| `text-wrap: balance` | 114+ | 121+ | 17.5+ | 114+ |
| `text-wrap: pretty` | 117+ | 122+ | 17.5+ | 117+ |

Both values degrade gracefully — browsers that do not support them fall back to the default text-wrap behaviour with no visual errors.
