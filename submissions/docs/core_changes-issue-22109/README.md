# Object-Fit and Object-Position Utilities

## What does this do?

Adds `ease-object-*` utility classes for controlling how replaced elements (images, videos) fill their containers using `object-fit` and `object-position`, ensuring media displays without distortion.

## How is it used?

**Responsive image gallery card:**

```html
<div class="card" style="width: 300px;">
  <img class="ease-object-cover" src="photo.jpg" alt="" />
  <div class="card-body">
    <h3>Mountain View</h3>
  </div>
</div>
```

**Position a focal point in a hero image:**

```html
<img class="ease-object-cover ease-object-top" src="hero.jpg" alt="" />
```

## Why is it useful?

Object-fit utilities are essential for any framework that deals with images. Without them, developers must repeatedly write `object-fit: cover` and `object-position: center` for every image in cards, galleries, hero sections, and avatars. These utilities complement the aspect-ratio utilities and make responsive media handling a single-class operation.
