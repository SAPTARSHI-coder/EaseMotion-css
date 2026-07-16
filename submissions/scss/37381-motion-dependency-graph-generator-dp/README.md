# Motion Dependency Graph Generator

## 1. What does this do?

This utility lets developers declare motion stages and their dependencies as SCSS maps, then resolves them into a predictable, dependency-safe generation order at compile time.

---

## 2. How is it used?

Example:

```scss
$graph: (
  fade: (),
  scale: (fade),
);
@include motion-resolve($graph);
```

Developers describe each stage as a map key and list its dependencies as the value, either directly in a `$motion-graph`-shaped map or incrementally via `@include motion-register($name, $dependencies)`. Calling `@include motion-resolve($graph)` validates the graph — surfacing missing dependencies as warnings and circular dependencies as errors — and stores the resulting order. `@include motion-emit($graph) using ($stage, $index) { ... }` then loops over that order, emitting one selector per stage along with `--motion-order` and `--motion-total` custom properties, while yielding to the content block so consumers can attach their own animation rules per stage.

---

## 3. Why is it useful?

This utility is CSS-first and framework agnostic: it's a pure, compile-time SCSS tool with no runtime code and no external dependencies. It keeps motion authoring reusable and lightweight by separating "what depends on what" from the actual animation declarations, and it's developer friendly thanks to clear warnings and errors for missing or circular dependencies. By generating a predictable order from a simple map, it scales cleanly as a motion system grows from a handful of stages to a large, interdependent set.
