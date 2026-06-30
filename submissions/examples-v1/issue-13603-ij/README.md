# ease-line-clamp-1

A utility class for single-line text truncation with ellipsis overflow.

## Usage

Include the `style.css` in your project and apply the class:

```html
<p class="ease-line-clamp-1">Long text that will be truncated with ellipsis</p>
```

## CSS Reference

```css
.ease-line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
```

## Demo

Open `demo.html` in a browser to see the component in action.
