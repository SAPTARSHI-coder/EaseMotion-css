# Stepper Component

A horizontal and vertical stepper for multi-step forms, wizards, and progress tracking. Includes completed, active, and pending states with connecting lines.

## Demo

Open `demo.html` in your browser to see:
- Horizontal stepper with 3 steps
- Horizontal stepper with 4 steps and checkmarks
- Vertical stepper with descriptions
- Green color theme variant

## Usage

### Horizontal Stepper

```html
&lt;div class="stepper"&gt;
  &lt;div class="step step-completed"&gt;
    &lt;div class="step-circle"&gt;✓&lt;/div&gt;
    &lt;div class="step-label"&gt;Account&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="step-connector"&gt;&lt;/div&gt;
  &lt;div class="step step-active"&gt;
    &lt;div class="step-circle"&gt;2&lt;/div&gt;
    &lt;div class="step-label"&gt;Profile&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="step-connector"&gt;&lt;/div&gt;
  &lt;div class="step"&gt;
    &lt;div class="step-circle"&gt;3&lt;/div&gt;
    &lt;div class="step-label"&gt;Confirm&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;