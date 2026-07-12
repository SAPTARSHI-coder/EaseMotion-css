# EaseTabsSy - Tabs Component with Smooth Underline Glider

A modular, dependency-free React tabs component with an animated underline
("glider") that smoothly slides and resizes to match the active tab.

> Note: this is a parallel implementation of the ease-tabs pattern
> (suffixed "Sy"), submitted alongside any existing implementation per
> this repo's policy of supporting parallel implementations of similar
> component ideas without overwriting other contributors' work.

## Installation

Copy `EaseTabsSy.jsx` and `EaseTabsSy.css` into your project. No external
dependencies beyond React.

```
submissions/react/react-tabs-component-with-smooth-underline-glider-27452/
- EaseTabsSy.jsx        (the component)
- EaseTabsSy.css        (styles + glider animation)
- EaseTabsSyDemo.jsx    (usage example)
- README.md
```

## Usage

```jsx
import EaseTabsSy from "./EaseTabsSy";
import "./EaseTabsSy.css";

const tabs = [
  { label: "Overview", content: <p>Overview content...</p> },
  { label: "Features", content: <p>Features content...</p> },
  { label: "Pricing", content: <p>Pricing content...</p> },
];

function App() {
  return (
    <EaseTabsSy
      tabs={tabs}
      defaultIndex={0}
      onChange={(index) => console.log("Active tab index:", index)}
    />
  );
}
```

## Props

| Prop           | Type                                            | Default | Description                              |
|-----------------|--------------------------------------------------|---------|--------------------------------------------|
| `tabs`          | `Array<{ label: string, content: ReactNode }>`   | `[]`    | Required. Tab definitions.                 |
| `defaultIndex`  | `number`                                          | `0`     | Initially active tab index.                |
| `onChange`      | `(index: number) => void`                        | -       | Called whenever the active tab changes.    |
| `className`     | `string`                                          | `""`    | Extra class applied to the root element.   |

## Behavior

- The underline glider measures the active tab's `offsetLeft`/`offsetWidth`
  via a ref and animates `transform`/`width` with a CSS transition
  (`cubic-bezier(0.65, 0, 0.35, 1)`) - GPU-friendly, no layout thrashing.
- Re-measures on window resize so the glider stays aligned responsively.
- Fully keyboard accessible: ArrowLeft/ArrowRight move focus and
  selection between tabs, following the WAI-ARIA tabs pattern (`role="tab"`,
  `role="tabpanel"`, `aria-selected`, roving `tabIndex`).

## Files

- `EaseTabsSy.jsx` - the component
- `EaseTabsSy.css` - styles and glider animation
- `EaseTabsSyDemo.jsx` - minimal usage example
- `README.md` - this file
