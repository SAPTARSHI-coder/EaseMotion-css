# ease-line-clamp-3

A utility class that truncates text after exactly three lines and displays an ellipsis when content exceeds the available space.

## Usage

```html
<p class="ease-line-clamp-3">
  Long text content...
</p>
```

## CSS

```css
.ease-line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```

## Features

* Three-line text truncation
* Ellipsis overflow behavior
* Useful for blog previews and descriptions
* Lightweight utility class
* Cross-browser fallback support

## Example Use Cases

* Blog excerpts
* Product descriptions
* Article previews
* News summaries
