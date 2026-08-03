# Fix: Avatar Image Appears Stretched When Non-Square Images Are Used

**Resolves issue [#56065](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/56065)**

---

## 1. What does this do?

Prevents avatar images from being stretched or distorted when the source image has a non-square aspect ratio, by applying `object-fit: cover` and `object-position: center` — cropping the image to fill the circular/square container instead of scaling it independently on each axis.

---

## 2. How is it used?

### Pattern A — Container + `<img>` (recommended)

```html
<!-- Any size -->
<div class="avatar">
  <img src="your-photo.jpg" alt="Jane Smith" />
</div>

<!-- Size variants -->
<div class="avatar avatar-xs">  <img src="…" alt="…" /> </div>  <!-- 1.5rem -->
<div class="avatar avatar-sm">  <img src="…" alt="…" /> </div>  <!-- 2rem   -->
<div class="avatar">            <img src="…" alt="…" /> </div>  <!-- 2.5rem (default) -->
<div class="avatar avatar-lg">  <img src="…" alt="…" /> </div>  <!-- 3rem   -->
<div class="avatar avatar-xl">  <img src="…" alt="…" /> </div>  <!-- 4rem   -->
<div class="avatar avatar-2xl"> <img src="…" alt="…" /> </div>  <!-- 6rem   -->

<!-- Shape variants -->
<div class="avatar avatar-rounded"> <img src="…" alt="…" /> </div>  <!-- pill corners -->
<div class="avatar avatar-square">  <img src="…" alt="…" /> </div>  <!-- no rounding  -->

<!-- Focal-point modifiers (when face is off-centre) -->
<div class="avatar avatar-xl avatar-top">    <img src="…" alt="…" /> </div>
<div class="avatar avatar-xl avatar-bottom"> <img src="…" alt="…" /> </div>
<div class="avatar avatar-xl avatar-left">   <img src="…" alt="…" /> </div>
<div class="avatar avatar-xl avatar-right">  <img src="…" alt="…" /> </div>

<!-- Initials fallback (no image) -->
<div class="avatar avatar-xl">JD</div>
```

### Pattern B — Plain `<img>` without a wrapper (minimal fix)

When markup cannot be changed to add a wrapper element:

```html
<img class="avatar-img-only" src="your-photo.jpg" alt="Profile" />
```

```css
.avatar-img-only {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;        /* ← core fix */
  object-position: center;  /* ← centre the crop */
  display: block;
}
```

---

## 3. Why is it useful?

### Root cause

When an `<img>` element is given explicit `width` and `height` dimensions (via HTML attributes or CSS) that don't match the image's natural aspect ratio, the browser scales the image independently on both axes to fill the box — **stretching** it.

```html
<!-- Bug: 300×200 landscape photo forced into a 120×120 box -->
<img class="avatar" width="120" height="120" src="landscape-photo.jpg" />
```

Without `object-fit`, `width: 120px; height: 120px` compresses a 300×200 image vertically by 40% while keeping it at 120 px wide — visibly distorting faces and objects.

### Three CSS properties that fix it

| Property | Value | Effect |
|---|---|---|
| `object-fit` | `cover` | Scales the image to **fill** the box while preserving aspect ratio; excess is clipped |
| `object-position` | `center center` | Centres the crop on the image's centre point |
| `overflow` | `hidden` | On the **container** — clips the cropped portion so it doesn't bleed outside `border-radius` |

```css
/* On the container */
.avatar {
  width: 2.5rem;
  height: 2.5rem;
  aspect-ratio: 1 / 1;   /* guarantees square even if height is omitted */
  border-radius: 50%;
  overflow: hidden;       /* clips crop to circle */
}

/* On the <img> */
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;           /* fill without stretch */
  object-position: center;     /* centre the subject */
  display: block;              /* removes inline baseline gap */
}
```

### Why `aspect-ratio: 1 / 1` is added

If the container only has `width` set (e.g. via a CSS variable), `height` might compute to `auto` — making the container tall rather than square. `aspect-ratio: 1 / 1` ensures the box is always square regardless of how dimensions are specified.

### Focal-point modifiers

Different photos have subjects in different positions. The `avatar-top`, `avatar-bottom`, `avatar-left`, `avatar-right` modifiers adjust `object-position` so the important part of the image is centred in the crop window:

```css
.avatar-top    img { object-position: center top;    }
.avatar-bottom img { object-position: center bottom; }
```

This is especially useful for portrait photos where the face is near the top of the frame.

### Note on the framework's existing `.ease-avatar`

The framework's `components/avatar.css` already has:

```css
.ease-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

This submission extends that pattern with: `aspect-ratio`, `object-position`, focal-point modifiers, shape variants, and a CSS-variable size system — and demonstrates the correct wrapper-container approach vs the plain-`<img>` approach that the issue reporter used.
