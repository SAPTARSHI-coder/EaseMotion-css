# Lazy Load Image (#36772)

An image that loads lazily with a blur-up placeholder effect. The placeholder fades out as the full-resolution image loads in.

## CSS Variables

| Variable            | Default | Description                        |
|---------------------|---------|------------------------------------|
| `--placeholder-bg`  | —       | Background color of the placeholder |
| `--image-src`       | —       | URL of the image to load           |
| `--blur-amount`     | 20px    | Blur radius of the placeholder     |
| `--load-duration`   | 0.6s    | Duration of the load transition    |

## Behavior

The image is lazy-loaded via Intersection Observer with a 200px root margin. While loading, a blurred placeholder is shown. Once the image loads, the placeholder fades out and the sharp image fades in.
