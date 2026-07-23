# Spin Alert Mixin

## What does this do?
This submission implements a premium SCSS mixin (`ease-spin-alert-mixin-ag`) under the `submissions/scss/` track. The mixin applies a smooth rotation (slight spin wiggle) and pulse shadow effect on an alert or notification banner to catch user attention elegantly.

## How is it used?
Import the partial and use the `@include` directive:
```scss
@use 'spin-alert-mixin' as *;

.danger-alert-ag {
  background-color: #fef2f2;
  border: 1px solid #fee2e2;
  padding: 16px;
  border-radius: 8px;
  
  // Apply the spin alert idle animation with custom duration
  @include ease-spin-alert-mixin-ag(2s, infinite);
}
```

## Parameters
| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `$duration` | `String (time)` | `1.8s` | Speed/duration of the spin animation sequence |
| `$iteration` | `String / Number` | `infinite` | Number of times the animation should run |
