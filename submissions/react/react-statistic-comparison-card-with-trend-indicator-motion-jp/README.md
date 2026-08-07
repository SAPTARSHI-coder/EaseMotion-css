# React Statistic Comparison Card with Trend Indicator Motion

## Description

`StatisticComparisonCard` is a copy-paste-ready React component for comparing a current metric against a previous value. It includes an animated number count-up, percentage change, directional trend motion, previous-value comparison, difference display, responsive styling, and accessibility-friendly status text.

The component uses React hooks, scoped CSS, and standard EaseMotion CSS utilities. It has no runtime dependencies outside React and EaseMotion CSS.

## Files

```text
StatisticComparisonCard.jsx
style.css
README.md
```

## Installation

Copy the component folder into a React project and load EaseMotion CSS once:

```jsx
import "easemotion-css/easemotion.min.css";
```

Then import the component:

```jsx
import StatisticComparisonCard from "./StatisticComparisonCard";
```

## Usage

```jsx
import "easemotion-css/easemotion.min.css";
import StatisticComparisonCard from "./StatisticComparisonCard";

export default function Dashboard() {
  return (
    <StatisticComparisonCard
      label="Monthly Revenue"
      currentValue={128400}
      previousValue={113200}
      valuePrefix="$"
      comparisonLabel="vs previous month"
      accentColor="#6c5ce7"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---:|---|
| `label` | `string` | `"Monthly Revenue"` | Main metric label. |
| `currentValue` | `number` | `128400` | Current metric value. |
| `previousValue` | `number` | `113200` | Previous comparison value. |
| `valuePrefix` | `string` | `"$"` | Prefix shown before values. |
| `valueSuffix` | `string` | `""` | Suffix shown after values. |
| `comparisonLabel` | `string` | `"vs previous period"` | Footer comparison text. |
| `positiveIsGood` | `boolean` | `true` | Set to `false` for metrics where decreases are desirable. |
| `precision` | `number` | `0` | Number of decimal places. |
| `animationDuration` | `number` | `900` | Count-up animation duration in milliseconds. |
| `accentColor` | `string` | `"#6c5ce7"` | Main visual accent color. |
| `formatter` | `function` | — | Optional custom value formatter. |
| `icon` | `ReactNode` | — | Optional metric icon or element. |
| `className` | `string` | `""` | Additional class names for the root element. |

## EaseMotion CSS utilities used

```text
ease-fade-in
ease-hover-lift
ease-hover-grow
ease-pulse
```

## Accessibility

- The component has an accessible metric label.
- Trend direction is communicated through both motion and text.
- Decorative indicators are hidden from assistive technology.
- Responsive layouts avoid horizontal overflow.
- `prefers-reduced-motion` disables component animations and transitions.

## Behavior notes

If `previousValue` is zero, percentage change is displayed as `0.0%` to avoid division by zero.

Use `positiveIsGood={false}` for metrics such as response time, error rate, or churn where a decrease is desirable.
