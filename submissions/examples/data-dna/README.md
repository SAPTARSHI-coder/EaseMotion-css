# Data DNA

Data DNA is an interactive data lineage component that visualizes
the journey of a dataset through multiple processing and
transformation stages.

Instead of representing a pipeline as a traditional horizontal
flowchart, Data DNA uses a DNA-inspired double-helix structure to
represent the transformation chain.

## Features

- DNA-inspired data pipeline visualization
- Double-helix structure
- Pipeline stages
- Stage numbering
- Stage status indicators
- Stage selection
- Stage inspector
- Records processed
- Processing duration
- Data quality score
- Pipeline progress
- Pipeline health
- Interactive stage details
- Pipeline replay animation
- Replay progress tracking
- Completion notification
- Responsive design
- Vanilla JavaScript
- No external dependencies

## Files

```text
data-dna/
├── demo.html
├── style.css
└── README.md
```

## Pipeline Stages

The example pipeline contains eight stages:

1. Raw Ingestion
2. Validation
3. Cleaning
4. Enrichment
5. Feature Engineering
6. Model Input
7. Prediction
8. Final Output

Each stage represents a transformation or processing step in the
data lifecycle.

## Stage States

### COMPLETE

The transformation has completed successfully.

### ACTIVE

The transformation is currently being processed.

### WARNING

The transformation completed with a condition that requires
attention.

### PENDING

The transformation has not started yet.

## Interactions

### Stage Selection

Click any stage on the DNA visualization.

The inspector updates with:

- Stage number
- Stage name
- Stage type
- Records processed
- Processing time
- Data quality
- Stage status
- Transformation description

### Replay Pipeline

Click the "Replay Pipeline" button to visualize the complete data
journey.

The replay:

1. Starts from the first stage.
2. Highlights each stage sequentially.
3. Updates the selected stage.
4. Updates pipeline progress.
5. Displays the current stage.
6. Completes after the final stage.
7. Restores the current pipeline progress.

The replay is simulated entirely in the browser.

## Custom Stages

Stages can be configured directly through HTML data attributes.

Example:

```html
<button
  class="stage warning"
  style="--y:43%;"
  data-stage="04"
  data-name="Enrichment"
  data-type="TRANSFORMATION"
  data-records="2.97M"
  data-time="00m 52s"
  data-quality="95.8%"
  data-status="WARNING"
  data-description="External metadata is joined with the dataset."
>
```

This makes the component easy to connect to real pipeline data.

## Potential Use Cases

Data DNA can be used for:

- Data engineering dashboards
- ETL monitoring
- Machine learning pipelines
- MLOps platforms
- Data lineage tools
- Analytics platforms
- Feature engineering systems
- Data quality monitoring
- AI pipelines
- Experiment tracking
- Data governance
- Batch processing systems
- Stream processing systems

## Design Concept

Traditional data lineage interfaces usually represent transformations
using nodes connected by arrows.

Data DNA uses a biological metaphor instead.

The two sides of the helix represent the continuous flow of the
pipeline while the horizontal connections represent individual
transformation stages.

This gives the component a distinctive visual identity while still
maintaining a clear hierarchy.

## Technical Details

Built using:

- HTML
- CSS
- Vanilla JavaScript

No external JavaScript libraries are required.

All JavaScript is contained inside `demo.html`.

## Browser Support

Designed for modern:

- Chrome
- Edge
- Firefox
- Safari

## License

Use and modify this component according to the license of the parent
component library.