# ease-loading-skeleton-cards-sap

Placeholder loading cards with a shimmering gradient sweep across image/text-shaped blocks — a common "content is loading" pattern.

## Usage
1. Include `style.css`.
2. Add markup: `.skel-card` containing `.skel-block` elements shaped like the real content (image, title, text lines).
3. In a real app, replace `.skel-card` markup with actual content once data loads.

## Customization
- Number of `.skel-card` cards and internal block shapes to match your real content layout.
- Shimmer speed (`1.5s`) and gradient colors.
- Block dimensions (`skel-img`, `skel-title`, `skel-line`) for different content shapes.

## Notes
- The shimmer is a horizontally animated `background-position` on a wide gradient (`200% 100%` background-size), creating a moving highlight sweep across each block.
- All blocks share the same `.skel-block` base class and animation, so multiple shapes shimmer in perfect sync across the whole card set.
- Respects `prefers-reduced-motion`: shimmer animation is disabled, blocks display as flat static gray placeholders instead.