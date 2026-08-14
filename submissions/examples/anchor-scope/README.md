# anchor-scope Demo

## What does this do?

Demonstrates the \nchor-scope\ CSS property — which scopes anchor names to a specific subtree, allowing the same anchor names to be reused across multiple components without conflicts.

## How is it used?

\\\css
.card {
  anchor-scope: trigger;
}
.trigger { anchor-name: --trigger; }
.tooltip { position-anchor: --trigger; top: anchor(bottom); }
\\\

## Why is it useful?

In component-based UIs, you often need to position elements relative to anchors inside reusable cards or widgets. Without \nchor-scope\, anchor names must be globally unique, making components brittle and unscalable. \nchor-scope\ lets you scope anchor references to a container, so each card can use the same anchor names independently.
