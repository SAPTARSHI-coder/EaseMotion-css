# CSS Dependency Graph

## 1. What does this do?
This component renders an interactive, responsive service dependency architecture map with animated data flow lines and node highlight maps powered entirely by CSS.

## 2. How is it used?
Configure nodes with sibling position markers and place connection line blocks inside a shared container:
```html
<div class="graph-board">
  <!-- Interactive Node -->
  <div class="node node-client" tabindex="0" role="button">
    <div class="node-title">Client Web</div>
  </div>
  
  <div class="node node-gw" tabindex="0" role="button">
    <div class="node-title">API Gateway</div>
  </div>

  <!-- Connected Edges -->
  <div class="edges-container">
    <div class="edge e-client-gw"></div>
  </div>
</div>
```

## 3. Why is it useful?
It provides front-end developers with a lightweight, accessible dashboard module for visual status tracking and architecture documentation, replacing heavy canvas/SVG rendering libraries with pure CSS.
