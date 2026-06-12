# Ease Rating Component

## What does this do?

A modern, lightweight **Rating Component** designed for user reviews, testimonials, smiley feedback forms, e-commerce scorecards, and content evaluations. It implements a pure-CSS interactive rating system using the radio sibling selector hack, supports fractional half-filled states using clip-path overlays, emoji feedback selections, and detailed review summary blocks.

## How is it used?

Include `style.css` in your project and structure your HTML following these classes:

### 1. Interactive Star Rating (Pure-CSS)

Construct your inputs and labels in **reverse order** in HTML (5 to 1) inside the `.ease-rating` container:

```html
<div class="ease-rating">
  <!-- Star 5 -->
  <input type="radio" id="star5" name="rating" value="5" />
  <label for="star5" title="5 Stars">
    <svg class="rating-icon" viewBox="0 0 24 24">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  </label>

  <!-- Star 4 -->
  <input type="radio" id="star4" name="rating" value="4" />
  <label for="star4" title="4 Stars">
    <svg class="rating-icon" viewBox="0 0 24 24">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  </label>

  <!-- Continue down to Star 1 -->
</div>
```

### 2. Suffix Emojis Feedback Selection

Smiley selections with active/selected classes:

```html
<div class="ease-rating-emojis">
  <button class="emoji-btn" title="Angry">😠</button>
  <button class="emoji-btn" title="Neutral">😐</button>
  <button class="emoji-btn active" title="Joy">😄</button>
</div>
```

### 3. Visual States (Filled, Empty, Half-Filled)

To display half-filled states, overlay a clipped filled star on top of an empty star using `.star-half-wrap` and `.star-half-clip`:

```html
<div class="ease-rating-display">
  <!-- Filled Star -->
  <span class="star-filled"
    ><svg class="rating-icon" viewBox="0 0 24 24">...</svg></span
  >

  <!-- Half-Filled Star -->
  <span class="star-half-wrap">
    <svg class="rating-icon star-empty" viewBox="0 0 24 24">...</svg>
    <svg class="rating-icon star-filled star-half-clip" viewBox="0 0 24 24">
      ...
    </svg>
  </span>
</div>
```

### 4. Color Theme Badges

Apply themed highlights using:

- `.ease-rating-primary` (Indigo color ratings focus)
- `.ease-rating-success` (Emerald green ratings focus)
- `.ease-rating-outline` (Hollow border-outline ratings)
- `.ease-rating-gradient` (Sunset indigo-pink linear gradient fills)
- `.ease-rating-minimal` (Tiny layout size optimized for inline scores)

## Features

- **No Javascript Selection**: Sibling selectors highlight nodes from left to right on hover/select automatically without scripting.
- **Half-Fill Clips**: Fractional values (e.g. 4.5) display accurately using overlapping clip-paths.
- **Emoji scale transitions**: Face smileys scale up and saturate color values on hover.
- **Progress Distribution Bars**: Progress bars map percentage values inside scorecard grids.
- **Gradients Fills**: SVGs link directly to linear gradients using URL tags.

## Tech Stack

- HTML
- CSS (Flexbox reverse layout, sibling input selectors, clip-path insets, custom properties)

## Preview

Open `demo.html` directly in your browser to cast interactive star/heart votes, test hover emojis, and inspect score progress alignments!

## Contribution Notes

- Class naming was handled by the contributor.
- Maintainer will rename to ease-\* convention before merging.
