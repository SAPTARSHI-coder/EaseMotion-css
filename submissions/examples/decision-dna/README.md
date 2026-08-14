# Decision DNA

Decision DNA is an interactive AI explainability component that
visualizes how individual model features contribute to a single
prediction.

Instead of showing model explanations as a conventional table,
Decision DNA represents feature contributions as visual strands
connected to the model decision.

## Concept

A machine-learning model may produce:

```text
Prediction: APPROVE
Confidence: 91.4%
```

But that alone does not explain why the model reached that decision.

Decision DNA exposes the local contribution of individual features:

```text
transaction_velocity     +0.42
device_trust             +0.28
transaction_amount       -0.18
account_history          +0.14
location_delta           -0.11
account_age              +0.08
activity_hour            -0.06
```

The visualization makes those influences visible.

## Features

- Final model decision
- Prediction score
- Confidence score
- Decision boundary
- DNA contribution visualization
- Positive contributions
- Negative contributions
- Feature contribution magnitude
- Feature categories
- Interactive feature selection
- Feature inspector
- Current feature value
- Baseline feature value
- Feature importance
- Contribution direction
- Natural-language explanation
- "What Changed?" summary
- Model metadata
- Recalculation animation
- Responsive design
- Vanilla JavaScript
- No external dependencies

## Contribution Visualization

The central visualization represents each model feature as a strand.

```text
              velocity
                 +
                 │
                 │
              device
                 +
                 │
       ───────── MODEL ─────────
                 │
              amount
                 -
                 │
              location
                 -
```

Positive contributions push the prediction toward the selected
decision.

Negative contributions pull the prediction in the opposite direction.

## Contribution Score

For demonstration purposes, each feature has a simulated contribution
score.

Example:

```text
velocity          +0.42
device_trust      +0.28
amount            -0.18
location_delta    -0.11
```

In a production implementation these values could come from:

- SHAP
- LIME
- Integrated Gradients
- Feature attribution models
- Gradient-based explanations
- Custom local explanation systems

## SHAP Integration

Decision DNA is particularly suitable for local SHAP explanations.

A backend could return:

```json
{
  "prediction": "APPROVE",
  "score": 0.824,
  "confidence": 0.914,
  "features": [
    {
      "name": "transaction_velocity",
      "value": 7.8,
      "contribution": 0.42
    },
    {
      "name": "device_trust",
      "value": 0.94,
      "contribution": 0.28
    }
  ]
}
```

The frontend can then convert the response into visual DNA strands.

## Feature Inspector

Clicking any DNA strand updates the feature inspector.

The inspector contains:

```text
Feature
Category
Current value
Baseline
Contribution
Importance
Direction
Explanation
```

This makes the visualization exploratory rather than static.

## Positive vs Negative Contributions

Positive:

```text
+0.42
+0.28
+0.14
```

These features reinforce the current prediction.

Negative:

```text
-0.18
-0.11
-0.06
```

These features move the model away from the current prediction.

## Prediction Score

The prediction score is shown on a normalized axis:

```text
-1 ---------------- 0 ---------------- +1
                                     ●
```

The current demo uses a simulated score.

A production implementation can connect the value directly to the
model's output probability, logit, regression score, or another
domain-specific decision metric.

## Recalculate Decision

The `Recalculate` button simulates another model inference.

The interaction:

1. Animates the DNA strands.
2. Pulses feature nodes.
3. Updates the prediction score.
4. Updates confidence.
5. Refreshes the contribution summary.
6. Displays a completion notification.

In production, this action could trigger a real inference request.

## Model Metadata

The footer displays:

```text
Model
Version
Inference latency
Features evaluated
Explanation method
```

Example:

```text
RiskNet
v4.8.2
18ms
27 evaluated
SHAP / LOCAL
```

## Potential Architecture

```text
User Input
    ↓
Feature Extraction
    ↓
ML Model
    ↓
Prediction
    ↓
Explanation Engine
    ↓
Feature Contributions
    ↓
Decision DNA
```

## Production API Example

A backend could expose:

```http
GET /api/explanations/{predictionId}
```

Response:

```json
{
  "model": "RiskNet",
  "version": "4.8.2",
  "prediction": "APPROVE",
  "score": 0.824,
  "confidence": 0.914,
  "latency_ms": 18,
  "explanation_method": "SHAP",
  "features": [
    {
      "name": "transaction_velocity",
      "category": "BEHAVIOR",
      "value": 7.8,
      "baseline": 3.2,
      "contribution": 0.42
    }
  ]
}
```

## Use Cases

Decision DNA can be used for:

- AI explainability
- Fraud detection
- Credit scoring
- Risk prediction
- Recommendation systems
- Medical ML research
- Customer scoring
- Anomaly detection
- Classification models
- Model debugging
- AI transparency dashboards
- Responsible AI interfaces

## Why Decision DNA?

Traditional explainability interfaces often look like:

```text
Feature                  Impact
--------------------------------
transaction_velocity      +0.42
device_trust              +0.28
transaction_amount        -0.18
```

Decision DNA transforms that information into a visual model
interpretability experience.

The goal is to answer:

```text
What did the model decide?
        ↓
How confident is it?
        ↓
Which features mattered?
        ↓
Which features pushed against the decision?
        ↓
Why did each feature matter?
```

## Technical Details

Built with:

- HTML
- CSS
- Vanilla JavaScript

No external JavaScript libraries are required.

All JavaScript is contained inside:

```text
demo.html
```

## File Structure

```text
decision-dna/
├── demo.html
├── style.css
└── README.md
```

## Future Improvements

Possible production improvements include:

- Real SHAP integration
- LIME support
- Integrated Gradients
- Model comparison
- Historical explanation comparison
- Explanation confidence
- Counterfactual explanations
- "What if?" feature sliders
- Prediction boundary visualization
- Feature interaction visualization
- Explanation export
- JSON explanation export
- PDF explanation reports
- Real inference API
- WebSocket inference updates
- Model version comparison

## License

Use and modify this component according to the license of the
parent component library.