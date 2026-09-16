# SCSS Utility: Truncate Multi-Line Clamp Utility Classes (#28430)

A layout SCSS utility module for the EaseMotion CSS framework that provides robust text truncation to a specific number of lines (1, 2, 3, etc.) using modern `-webkit-line-clamp` properties, complete with an ellipsis (`...`).

## 📦 What's included?

- `_truncate-multi-line-clamp-utility-classes.scss`: The SCSS partial containing the `@mixin` and utility class generator loop.
- `style.css`: The compiled output of the generator loop (1-6 lines).
- `demo.html`: A grid of cards demonstrating 1, 2, and 4-line truncation.

## 🛠 Usage via SCSS Mixins

Import the partial and use the `ease-line-clamp` mixin to enforce a maximum number of lines on any text element.

```scss
@import 'truncate-multi-line-clamp-utility-classes';

.product-title {
  // Truncate cleanly after 2 lines
  @include ease-line-clamp(2);
}

.product-description {
  // Truncate cleanly after 4 lines
  @include ease-line-clamp(4);
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, simply attach the corresponding clamp class to your text element.

```html
<h2 class="ease-clamp-1">Single line title that gets truncated...</h2>

<p class="ease-clamp-3">
  A multi-line paragraph that will span exactly three lines before 
  being cut off with an ellipsis. This is very useful for keeping 
  grid items at a uniform height...
</p>
```

## 🚀 Why this fits EaseMotion

While **EaseMotion** focuses heavily on animations and hover states, maintaining a beautiful, consistent layout is the prerequisite for good motion design. If your CSS grid items are bouncing all over the place because user-generated text is different lengths, your animations will look broken.

Standard CSS truncation (`white-space: nowrap`) only works for a single line. This utility leverages the highly supported `-webkit-line-clamp` property to allow beautiful, multi-line truncation, ensuring your cards and layouts remain perfectly aligned regardless of content length.
