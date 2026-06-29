# ease-text-balance

A utility class that applies balanced text wrapping using the modern CSS `text-wrap: balance` property.

## Usage

```html
<h2 class="ease-text-balance">
    Modern CSS Text Wrapping Creates Better Typography
</h2>
```

## CSS

```css
.ease-text-balance {
    text-wrap: balance;
}
```

## Features

* Balanced line breaks
* Improved heading readability
* Better typography for short paragraphs
* Lightweight utility class
* Fallback support for older browsers

## Browser Fallback

```css
@supports not (text-wrap: balance) {
    .ease-text-balance {
        overflow-wrap: break-word;
    }
}
```

## Example Use Cases

* Page headings
* Blog titles
* Hero sections
* Card titles
* Short descriptions
