# Decision Prism

Decision Prism is an interactive decision-visualization component
that transforms a single question into multiple possible outcomes.

Instead of using traditional decision tables or recommendation cards,
the component presents possible futures as facets emerging from a
central prism.

## Features

- Central decision node
- Multiple possible outcomes
- Interactive outcome selection
- Dynamic inspector panel
- Confidence visualization
- Impact indicator
- Effort indicator
- Decision path visualization
- Animated light beams
- Hover effects
- Selected-state highlighting
- Project Decision interaction
- Reset functionality
- Responsive layout
- Vanilla JavaScript
- No external dependencies

## Files

```text
decision-prism/
├── demo.html
├── style.css
└── README.md
```

## Interactions

### Select an Outcome

Click any outcome facet to update the inspector panel.

The inspector displays:

- Outcome title
- Category
- Confidence
- Impact
- Effort
- Description

### Project Decision

Clicking `Project Decision` simulates committing the selected outcome
and displays a confirmation message.

### Reset Prism

Restores the default decision state.

## Customization

Each outcome is defined using HTML data attributes.

Example:

```html
<button
  class="outcome"
  data-title="Build Now"
  data-confidence="91"
  data-impact="High"
  data-effort="High"
  data-description="Start immediately and validate the idea."
  data-tag="FASTEST PATH"
>
```

New outcomes can be added by duplicating an existing outcome and
changing its metadata.

## Use Cases

Decision Prism can be used for:

- AI recommendation interfaces
- Product planning
- Feature prioritization
- Project planning
- Career decision tools
- Architecture decisions
- Business strategy tools
- Risk analysis
- Recommendation systems
- Interactive portfolio experiences

## Design Philosophy

The component treats a decision as a branching possibility rather than
a static table.

The central prism represents the question, while the surrounding facets
represent possible futures.

## Technical Details

The component uses:

- HTML
- CSS
- Vanilla JavaScript

No external JavaScript libraries are required.

All JavaScript is intentionally contained inside `demo.html`.

## Browser Support

Tested conceptually for:

- Chrome
- Edge
- Firefox
- Safari

## License

Use and modify this component according to the license of the parent
component library.