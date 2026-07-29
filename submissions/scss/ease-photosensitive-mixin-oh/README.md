# SCSS Photosensitive-Safe Animation Mixin

This submission provides a SCSS mixin for photosensitive-safe animations for GSSoC issue **#44487**.

## Description

A SCSS mixin library that wraps animations with photosensitive-safe defaults, including flash rate limits, opacity caps, and prefers-reduced-motion fallback.

## Problem

Animations can trigger photosensitive reactions in some users. This mixin ensures animations are safe by preventing rapid flashing and providing accessibility fallbacks.

## Mixins Available

### 1. `photosensitive-safe-animation`
Main mixin for any animation with safe defaults.

```scss
.my-animation {
  @include photosensitive-safe-animation(
    $name: 'my-anim',
    $duration: 1s,
    $timing: ease-in-out,
    $iterations: infinite
  );
}
```

### 2. `flash-safe-pulse`
Pulse animation with capped opacity.

```scss
.safe-pulse {
  @include flash-safe-pulse($duration: 2s);
}

// Custom opacity
.custom-pulse {
  @include flash-safe-pulse(
    $duration: 1.5s,
    $min-opacity: 0.4,
    $max-opacity: 1
  );
}
```

### 3. `flash-safe-blink`
Safe blink alternative to rapid flashing.

```scss
.safe-blink {
  @include flash-safe-blink($duration: 1s);
}
```

### 4. `flash-safe-fade`
Safe fade effects within opacity limits.

```scss
.fade-in-out {
  @include flash-safe-fade($duration: 2s, $fade-type: 'in-out');
}

.fade-in {
  @include flash-safe-fade($duration: 1s, $fade-type: 'in');
}
```

### 5. `batch-reduced-motion`
Apply reduced motion to multiple elements.

```scss
.animations-group {
  @include batch-reduced-motion;
}
```

## Safety Features

| Feature | Value | Description |
|---------|-------|-------------|
| Max Flash Rate | 3/sec | Prevents rapid strobing |
| Min Opacity | 0.3 | Never fully transparent |
| Min Duration | 0.3s | Ensures safe timing |
| Reduced Motion | Auto | Browser preference support |

## Configuration

```scss
// Customize defaults
$photo-safe-max-flash-rate: 3;
$photo-safe-min-duration: 0.3s;
$photo-safe-opacity-min: 0.3;
$photo-safe-opacity-max: 1;
```

## Files

- `mixin.scss` - SCSS mixin definitions
- `demo.html` - Interactive demo page
- `style.css` - Demo styles
- `README.md` - This file

## Acceptance Criteria

- ✅ SCSS mixin for photosensitive-safe animations
- ✅ Max flash rate guardrails
- ✅ Opacity cap defaults
- ✅ prefers-reduced-motion fallback
- ✅ Demo comparing risky vs safe animations
- ✅ Copy-ready SCSS snippets
- ✅ Educational notes on photosensitive safety
- ✅ Responsive demo UI
