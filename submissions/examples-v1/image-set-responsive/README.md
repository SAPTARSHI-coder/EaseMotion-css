# image-set-responsive

Demonstrates CSS `image-set()` for serving responsive images at different pixel densities and format preferences.

## How It Works

Cards display placeholder swatches that would normally use `image-set()` with `1x`, `2x`, and `3x` resolutions plus `webp` and `avif` format hints. The browser selects the best match based on device capabilities and viewport.

## Usage

Open `demo.html` to see four cards showing density tiers, format fallback, combined usage, and a practical hero example. Swap placeholder URLs for real images. `prefers-reduced-motion` disables the shimmer loading effect.
