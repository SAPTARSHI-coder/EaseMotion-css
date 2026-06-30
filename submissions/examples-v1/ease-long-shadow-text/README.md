# ease-long-shadow-text

A 3D extruded text effect built entirely from stacked `text-shadow` layers. Each layer offsets 1px diagonally with a progressively darker color, creating the illusion of physical depth. Hover extends the extrusion from 14 to 24 layers, deepening the 3D effect.

## Usage

```html
<h1 class="long-shadow-text">Your Text</h1>
```

## How it works

- `text-shadow` accepts a comma-separated list of shadows
- Each shadow steps 1px further on both X and Y axes with a darker shade of the base color
- The final layers use `rgba` blur to soften the cast shadow beneath
- `transition: text-shadow` animates between the resting (shallow) and hover (deep) states
- `color` shifts slightly lighter on hover to maintain contrast against the deeper shadow

## Customization

| Property                 | Description                                  |
| ------------------------ | -------------------------------------------- |
| Base color (`color`)     | The face color of the text                   |
| Shadow color progression | Edit the hex stops to match any palette      |
| Shadow layer count       | Add more `Npx Npx 0` stops to increase depth |
| `transition` duration    | Controls how fast the depth change animates  |

## Accessibility

Respects `prefers-reduced-motion`. When reduced motion is preferred, the hover depth transition is disabled.
