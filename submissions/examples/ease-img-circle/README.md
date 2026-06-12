# ease-img-circle

Crops images into a circle — perfect for avatars and profile pictures.

## Usage

```html
<img class="ease-img-circle" src="avatar.jpg" alt="Profile picture" />
```

## CSS Output

```css
.ease-img-circle {
  border-radius: 50%;
  object-fit: cover;
}
```

## Use Case

Avatars, profile pictures, and any image that needs circular cropping.
`object-fit: cover` ensures the image fills the circle without distortion.
