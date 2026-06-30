# Icon Button Size Variants

This submission implements and demonstrates the missing small (`sm`) and large (`lg`) sizing variants for the `.ease-btn-icon` (icon-only button) component in EaseMotion CSS.

---

## Technical Overview

Icon-only buttons require consistent square dimensions (aspect-ratio 1:1) to prevent distorting circular borders.

The sizing parameters mapped in this demonstration are:

| Class               | Button Diameter | Icon (SVG) Size |
| ------------------- | --------------- | --------------- |
| `.ease-btn-icon-sm` | `32px`          | `14px`          |
| Default             | `40px`          | `18px`          |
| `.ease-btn-icon-lg` | `48px`          | `22px`          |

This ensures consistent visual balance alongside standard textual button height scales.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Inspect the sizing cards: verify that small, medium, and large buttons form perfect circular grids.
3. Hover to verify interactive scales.
