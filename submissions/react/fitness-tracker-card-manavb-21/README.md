# Fitness Tracker Elastic Slide Card

A reusable React + TypeScript card for fitness tracker dashboards that combines EaseMotion entrance and hover utilities with a smooth elastic slide interaction.

## Features

- TypeScript props for metric, goal progress, trend, stats, theme accent, and CTA behavior.
- Uses existing EaseMotion utility classes such as `ease-slide-in-from-bottom`, `ease-card-lift`, `ease-hover-shimmer`, `ease-fade-in`, `ease-delay-*`, and `ease-hover-grow`.
- Scoped CSS adds the fitness-specific layout, progress rail, and elastic slide hover state.
- No external dependencies beyond React.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `"Daily Movement"` | Main card heading. |
| `subtitle` | `string` | `"Fitness Tracker"` | Small label above the title. |
| `metric` | `string \| number` | `"8,420"` | Primary fitness value shown on the card. |
| `metricLabel` | `string` | `"Steps"` | Label for the primary metric. |
| `unit` | `string` | `"steps"` | Unit displayed beside the primary metric. |
| `goalLabel` | `string` | `"Daily goal"` | Label for the progress section. |
| `goalCurrent` | `number` | `8420` | Current progress value. |
| `goalTarget` | `number` | `10000` | Target progress value used to calculate the bar width. |
| `trend` | `string` | `"+12% vs yesterday"` | Trend text shown in the header pill. |
| `trendDirection` | `"up" \| "down" \| "neutral"` | `"up"` | Controls trend pill color. |
| `stats` | `FitnessTrackerStat[]` | Calories, active minutes, heart rate | Supporting stat tiles shown below the progress bar. |
| `ctaLabel` | `string` | `"View workout"` | Button text. |
| `accentColor` | `string` | `"#16a34a"` | CSS color used for the progress fill and action button. |
| `className` | `string` | `""` | Optional class names appended to the card root. |
| `onCtaClick` | `() => void` | `undefined` | Optional callback fired when the CTA is clicked. |

```ts
type FitnessTrackerStat = {
  label: string;
  value: string | number;
  helperText?: string;
};
```

## Usage

```tsx
import FitnessTrackerCard from "./FitnessTrackerCard";
import "./style.css";

export default function DashboardCard() {
  return (
    <FitnessTrackerCard
      title="Morning Run"
      subtitle="Workout Summary"
      metric="6.8"
      metricLabel="Distance covered"
      unit="km"
      goalLabel="Weekly distance goal"
      goalCurrent={34}
      goalTarget={50}
      trend="+8% pace improvement"
      trendDirection="up"
      accentColor="#10b981"
      stats={[
        { label: "Calories", value: 620, helperText: "burned" },
        { label: "Duration", value: "42m", helperText: "moving" },
        { label: "Avg HR", value: 136, helperText: "bpm" },
      ]}
      ctaLabel="Open activity"
      onCtaClick={() => console.log("Open workout details")}
    />
  );
}
```

## Customization Notes

- Change `accentColor` to align the card with a brand, workout type, or fitness goal.
- Pass custom `stats` to adapt the card for running, cycling, strength training, sleep, hydration, or habit tracking.
- Use `className` for layout wrappers while keeping the built-in EaseMotion classes intact.
- The elastic slide interaction lives in `style.css`; tune the cubic-bezier timing there if a calmer or springier card response is needed.
