# Avatar Image Stretch Fix

## Description

This example fixes avatar images appearing stretched when non-square images are used. The solution preserves the image's aspect ratio while displaying a perfectly circular avatar.

## Features

- Prevents image distortion
- Uses `object-fit: cover`
- Circular avatar
- Responsive design
- Pure HTML & CSS

## Usage

```html
<img
    src="profile.jpg"
    class="avatar"
    alt="Profile"
/>
```

## Fix Applied

- Fixed width and height for the avatar.
- Added `object-fit: cover` to preserve aspect ratio.
- Centered the image with `object-position: center`.
- Applied `border-radius: 50%` for a circular avatar.

## Files

- demo.html
- style.css
- README.md