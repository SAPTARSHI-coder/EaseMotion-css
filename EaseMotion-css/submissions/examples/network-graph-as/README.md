# Network Graph

### What does this do?

It shows a live network graph. A bright central hub connects to six outer nodes, with extra links between neighbors. Every node throbs on its own beat, and a packet of light travels along each link from source to target, so the graph looks like data moving through a network. Under reduced motion the nodes rest and the packets are hidden.

### How is it used?

```html
<div class="graph">
  <span class="link lk1"><i class="pulse"></i></span>
  <span class="node n1 hub"></span>
  <span class="node n2"></span>
</div>
```

Each link is a thin bar rotated from its source node toward its target, with `left`, `width`, and `transform: rotate()` precomputed from the node coordinates. Inside each link a `pulse` runs the `travel` animation from one end to the other on a staggered delay, and every node runs `throb` to scale gently in and out.

### Why is it useful?

Dashboards, infrastructure views, and social or graph data use a node network. This builds an animated network graph with pure CSS transforms, no images, canvas, or JavaScript, with a reduced motion fallback.
