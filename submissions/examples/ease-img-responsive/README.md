# ease-img-responsive

Makes images scale responsively within their container.

## Usage
```html
<img class="ease-img-responsive" src="image.jpg" alt="description" />
```

## CSS Output
```css
.ease-img-responsive {
  max-width: 100%;
  height: auto;
  display: block;
}
```

## Use Case
Prevents images from overflowing their container on smaller screens.
`display: block` removes the default inline gap that appears under images.