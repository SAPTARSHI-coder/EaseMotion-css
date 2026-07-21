# MotionBoundary

## Overview

MotionBoundary is a lightweight React component that creates an
isolated animation scope for a group of children, using React Context
to identify which boundary a subtree belongs to. It allows nested
sections of an application — such as independent dashboard panels or
page regions — to coordinate their own animated content without
interfering with animations happening elsewhere in the tree.

The problem it solves is scope leakage: as an application grows,
animation-related state or coordination logic defined at the top level
can accidentally affect unrelated sections deep in the component tree.
MotionBoundary isolates that context to its own subtree, and supports
nesting boundaries inside one another cleanly, since each
`MotionBoundary` only exposes its own identity and its parent's,
without reaching further up or down the tree.

MotionBoundary does not generate, inspect, or manipulate any CSS or
animation itself. It only establishes a scoped context boundary,
keeping the actual animation fully defined by existing EaseMotion CSS
classes and remaining entirely CSS-first.

## Props

| Prop               | Type       | Default | Description                                                                |
| ------------------ | ---------- | ------- | -------------------------------------------------------------------------- |
| `children`         | `node`     | —       | Content rendered within the boundary's scope.                              |
| `id`               | `string`   | —       | Identifier for this boundary, exposed through context.                     |
| `active`           | `bool`     | `true`  | If `false`, renders children without creating a boundary or context value. |
| `className`        | `string`   | `""`    | Additional class name(s) applied to the wrapper element.                   |
| `as`               | `string`   | `"div"` | Element type used for the wrapper.                                         |
| `onBoundaryActive` | `function` | —       | Called once with `id` when the boundary becomes active.                    |

## Example Usage

```jsx
import MotionBoundary from "./component";
import "./style.css";

export default function App() {
  return (
    <div className="motion-boundary-page">
      <div className="motion-boundary-demo">
        <MotionBoundary id="dashboard-panel">
          <section className="motion-boundary-section">
            <p className="motion-boundary-label">Dashboard Panel</p>

            <div className="motion-boundary-card fade-up">
              <h3 className="motion-boundary-card__title">Overview</h3>
              <p className="motion-boundary-card__description">
                Animates within its own boundary.
              </p>
            </div>

            <MotionBoundary id="dashboard-panel-nested">
              <div className="motion-boundary-card fade-up">
                <h3 className="motion-boundary-card__title">Nested Widget</h3>
                <p className="motion-boundary-card__description">
                  A nested boundary coordinating independently.
                </p>
              </div>
            </MotionBoundary>
          </section>
        </MotionBoundary>

        <MotionBoundary id="sidebar-panel">
          <section className="motion-boundary-section">
            <p className="motion-boundary-label">Sidebar Panel</p>

            <div className="motion-boundary-card fade-up">
              <h3 className="motion-boundary-card__title">Navigation</h3>
              <p className="motion-boundary-card__description">
                A completely separate boundary from the dashboard.
              </p>
            </div>
          </section>
        </MotionBoundary>
      </div>
    </div>
  );
}
```

## Why MotionBoundary?

Large applications often compose many independently built sections —
dashboards, sidebars, modals, nested widgets — each of which may want
to coordinate its own animated children without knowledge of, or
interference from, animation logic elsewhere on the page. Without an
explicit scoping mechanism, that coordination state tends to live in
one shared place, making components harder to reuse and more fragile
when moved or nested.

MotionBoundary improves modularity by giving each section its own
context scope: a `MotionBoundary` only knows its own `id` and its
immediate parent's `id`, so boundaries can be nested arbitrarily deep
without one boundary's consumers accidentally reading state from an
unrelated part of the tree. Because the component itself does nothing
beyond providing this scoped context and an activation callback, it is
trivially reusable across any part of an application, regardless of
what animated content lives inside it.

MotionBoundary fits EaseMotion CSS's philosophy directly: it introduces
no animation timing, keyframes, or inspection logic. It only defines
_where_ an animation scope begins and ends, leaving all actual motion
to existing CSS classes and keeping the whole system CSS-first.
