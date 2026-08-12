# Interactive Liquid Bubble Popper Animation

A beautiful, high-performance interactive component featuring organic liquid bubbles that float, morph, and splat into gooey droplets upon hover or click.

## Technical Overview

The component utilizes a combination of **CSS Keyframe Animations** for organic movements and an **inline SVG Contrast-Blur Filter** to create the fluid splitting and merging (gooey) effect.

---

## SVG Gooey Filter Mechanics

The gooey transition is achieved using an SVG filter applied to a container (`filter: url(#liquid-goo)`). The filter consists of two primary steps:

1. **GaussianBlur (`feGaussianBlur`)**:
   Blurs the overlapping graphical elements together. We set `stdDeviation="12"`. This defines how far the "liquid reach" extends when droplets split from or merge with the main bubble.
2. **ColorMatrix (`feColorMatrix`)**:
   Adjusts the alpha channel contrast to sharpen the blur. The color matrix values are:
   ```xml
   <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
   ```

   - **Mathematics**: The alpha output is calculated as:
     $$\text{Alpha}_{\text{out}} = (\text{Alpha}_{\text{in}} \times 20) - 9$$
     This extremely steep contrast ramp clamps the soft blur boundaries. Any pixel with an opacity greater than $9/20$ ($45\%$) becomes completely opaque ($\text{Alpha} = 1$), while any pixel with lower opacity becomes completely transparent ($\text{Alpha} = 0$). This creates the smooth, organic liquid bridge between separating parts.

---

## Droplet Layout & Angles

Upon pop, **6 liquid droplets** expand radially outwards from the center of the bubble. Their positions are calculated using basic trigonometry to form a uniform circle of splatters:

$$\theta = n \times 60^\circ \quad \text{for } n \in \{0, 1, 2, 3, 4, 5\}$$

Using a radial distance of $90\text{px}$ (scaling down to $0$ as they expand), the translations are mapped using CSS Custom Properties (`--tx` and `--ty`):

| Droplet       | Angle ($\theta$) | X Translation ($90 \cos \theta$) | Y Translation ($90 \sin \theta$) | CSS Properties Mapping      |
| :------------ | :--------------- | :------------------------------- | :------------------------------- | :-------------------------- |
| **Droplet 1** | $0^\circ$        | $+90\text{px}$                   | $0\text{px}$                     | `--tx: 90px; --ty: 0px;`    |
| **Droplet 2** | $60^\circ$       | $+45\text{px}$                   | $+78\text{px}$                   | `--tx: 45px; --ty: 78px;`   |
| **Droplet 3** | $120^\circ$      | $-45\text{px}$                   | $+78\text{px}$                   | `--tx: -45px; --ty: 78px;`  |
| **Droplet 4** | $180^\circ$      | $-90\text{px}$                   | $0\text{px}$                     | `--tx: -90px; --ty: 0px;`   |
| **Droplet 5** | $240^\circ$      | $-45\text{px}$                   | $-78\text{px}$                   | `--tx: -45px; --ty: -78px;` |
| **Droplet 6** | $300^\circ$      | $+45\text{px}$                   | $-78\text{px}$                   | `--tx: 45px; --ty: -78px;`  |

### Splat Animation Physics

The translation uses `cubic-bezier(0.1, 0.8, 0.3, 1)` easing. This mimics fluid drag/deceleration—the droplets blast outwards rapidly, decelerate smoothly, shrink in scale, and fade out to `opacity: 0` as they dissolve.
