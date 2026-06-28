# ease-line-clamp-2

A utility class that truncates text after exactly two lines and displays an ellipsis when content exceeds the available space.

## Usage

```html
<p class="ease-line-clamp-2">
  Long text content...
</p>
```

## CSS

```css
.ease-line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```

## Features

* Two-line text truncation
* Ellipsis overflow behavior
* Useful for cards, blog previews, and descriptions
* Lightweight utility class
* Cross-browser fallback support

## Example Use Cases

* Card descriptions
* Product summaries
* Blog post previews
* News headlines
