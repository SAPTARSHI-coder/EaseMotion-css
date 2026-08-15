# ease-text-pretty

A utility class that applies the modern CSS `text-wrap: pretty` property to improve paragraph readability and reduce orphaned words.

## Usage

```html
<p class="ease-text-pretty">
    This paragraph will use prettier text wrapping.
</p>
```

## CSS

```css
.ease-text-pretty {
    text-wrap: pretty;
}
```

## Features

* Reduces orphaned words
* Improves paragraph readability
* Better typography for long-form content
* Lightweight utility class
* Browser fallback included

## Difference From ease-text-balance

### ease-text-balance

Best for:

* Headings
* Titles
* Hero text

### ease-text-pretty

Best for:

* Paragraphs
* Articles
* Blog posts
* Descriptions

## Browser Fallback

```css
@supports not (text-wrap: pretty) {
    .ease-text-pretty {
        overflow-wrap: break-word;
    }
}
```

## Example Use Cases

* Blog content
* Article text
* Marketing copy
* Product descriptions
* Documentation
