# Reusable SCSS Motion Profile Engine

A standardized toolkit integration enabling developers to register multi-layered animation profile attributes using localized design-system configuration maps.

## Engineering API

### Profile Declarations
- `$motion-profile-productive`: Scaled for dashboards requiring high update velocity and clean visibility states (`250ms`).
- `$motion-profile-expressive`: Scaled for hero transitions containing structural overshoot spring parameters (`600ms`).

### Usage Syntax
```scss
@import "motion-utility";

.target-selector {
  @include apply-motion-profile($motion-profile-productive);
}