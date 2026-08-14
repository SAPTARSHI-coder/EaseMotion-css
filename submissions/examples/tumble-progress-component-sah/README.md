# Tumble Progress Loading Component (`#54666`)

## What does this do?
Presents an engaging progression bar configured with a geometric cube marker that tumbles continuously across the active completion boundary.

## How is it used?
Structure track fill bars and tumble cubes inside an `ease-progress-tumble` gauge:
```html
<div class="ease-progress-tumble">
  <div class="track-fill" style="width: 75%;"></div>
  <div class="tumble-cube" style="left: 73%;"></div>
</div>
```

## Why is it useful?
Solves issue #54666 by bringing dynamic character and kinetic activity to file transfer and workflow progress monitors.