# Position Fixed vs Sticky

## Overview

Compares `position: fixed` and `position: sticky` positioning schemes. A fixed navigation bar stays pinned to the viewport at all times, while sticky headers switch from relative to fixed within their scroll container when a scroll threshold is reached.

## Key Concepts

- **Fixed positioning**: Element is removed from normal flow and positioned relative to the viewport. It stays in place during scrolling, regardless of parent scroll containers.
- **Sticky positioning**: Element acts as relatively positioned until its scroll container crosses a specified threshold (`top`, `bottom`, etc.), at which point it becomes fixed within the parent.
- **Stacking context**: Both fixed and sticky elements create new stacking contexts, which can affect z-index behavior.
- **Scroll container boundaries**: A sticky element cannot escape its parent container — it will scroll out when the parent leaves the viewport.
- **Use case comparison**: Fixed is ideal for persistent navigation and back-to-top buttons; sticky works well for section headers and table header rows.

## Usage

Open `demo.html` and scroll the page. The fixed navigation bar remains at the top. Inside the scroll area, the sticky headers (Section A, B, C) snap to the top of their container when scrolled to. The comparison table summarizes key behavioral differences.
