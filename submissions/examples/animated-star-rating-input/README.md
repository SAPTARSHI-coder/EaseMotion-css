# Interactive Star Rating Input

## What does this do?
A 5-star rating widget built with radio inputs and a reversed flexbox
layout. Hovering highlights stars up to the pointer; clicking commits the
selection. Fully CSS-only.

## How is it used?
Render 5 radio inputs (same name) in descending value order, each
paired with a ★ label. The reversed flex direction plus the ~ sibling
selector handles both the hover preview and the committed state.

## Why is it useful?
- No JavaScript needed for a fully interactive rating UI
- Reusable in reviews, feedback forms, testimonials
- Accessible via native radio semantics (keyboard-navigable)
- Fits EaseMotion's "Forms" component category