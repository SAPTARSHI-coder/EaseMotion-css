# Sci-Fi Console Accordion with Liquid Ripple

A highly interactive React accordion stack designed for technical HUD interfaces, optimizing spatial layout visibility via integrated click-activated canvas ripple modules.

## Features

- **Liquid Ripple Triggers**: Real-time event tracking instantiates micro-scale canvas expansion paths (`ease-ripple-out`) seamlessly mapping out user action points.
- **Dynamic Transition Management**: Panel expansion curves leverage precise, hardware-optimized CSS velocity algorithms for optimal frame processing.
- **HUD Semantics**: Comprehensive structure ensuring proper execution handling across critical focus pipelines (`aria-expanded`, `aria-controls`, and `role="region"`).
- **Multiple Mode Toggles**: Supports configuration locks allowing both exclusive single-selection filters or open concurrent multi-stacked views.

## Props Specifications

### SciFiAccordion

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `Array` | — | **Required**. Collection of entry configuration objects mapped inside the stack array definition. |
| `allowMultiple` | `boolean` | `false` | When true, permits multiple layout container sections to persist concurrently. |

### `items` Object Shape

```typescript
{
  id: string | number;     // Unique item key entry identifier
  title: string;           // Core heading text block value
  subtitle: string;        // Small secondary string meta token metadata
  content: React.ReactNode // Interior child view elements to render
}