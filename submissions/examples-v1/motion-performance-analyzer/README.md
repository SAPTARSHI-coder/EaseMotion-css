# Motion Performance Analyzer

Relates to feature request **#41362**.

## 1. What does this do?

Introduces a developer utility that analyzes selected EaseMotion utilities and estimates their rendering cost. The analyzer categorizes animations based on whether they primarily trigger compositing (GPU accelerated), painting, or layout recalculations.

## 2. Why is this useful for EaseMotion CSS?

Not all CSS animations have the same performance characteristics. Animating `transform` or `opacity` is highly performant (handled by the GPU), whereas animating `box-shadow` triggers expensive paint operations, and animating `width` or `top` triggers layout recalculations (layout thrashing) that can severely degrade performance on low-powered devices.

Providing performance insights directly within the EaseMotion ecosystem helps developers build smoother, more performant interfaces.

## 3. How it Works

The utility uses a JavaScript engine that maps known EaseMotion classes to their underlying CSS properties. It then calculates a performance score (0-100) based on the cost of animating those properties:

- **Composite Operations** (`transform`, `opacity`): No penalty. Highly performant.
- **Paint Operations** (`box-shadow`, `color`, `background-color`): Moderate penalty.
- **Layout Operations** (`width`, `height`, `top`, `left`): Severe penalty.

It then outputs a score out of 100 alongside actionable diagnostics (e.g., "Consider using `transform` instead of `top/left` animations.").

## 4. Features Included

- **Dynamic Score Ring**: An animated SVG ring that updates visually based on the calculated score (Green for good, Yellow for moderate, Red for poor).
- **Diagnostic Output**: A console-like interface that provides specific feedback based on the exact combination of classes entered.
- **Quick Test Presets**: Buttons that immediately populate the input with known fast, moderate, and slow animation combinations to demonstrate the analyzer's capabilities.
- **Live Input Validation**: Users can type standard EaseMotion classes and press Enter to instantly see the performance breakdown.
