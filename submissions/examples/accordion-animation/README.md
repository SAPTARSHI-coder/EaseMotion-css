# Accordion Squeezing Instrument Animation

This addition extends the EaseMotion musical micro-interaction series with a purely declarative micro-animation simulating an accordion's movement.

## Key Properties & Mechanics
- **Horizontal Elasticity**: Manipulates horizontal spatial bounds smoothly using `scaleX` matrices to mimic physical bellows compression.
- **Alternating Pendulum Tilting**: Implements micro-rotations (`rotate()`) tracking the central anchor origin seamlessly alongside panel translation shifts.
- **Repeat Linear Insets**: Creates clean internal physical visual folds natively via gradient color steps without supplementary structural elements.

## File Breakdown
- `demo.html` - Visual layout structure for the animation container stage.
- `style.css` - Keyframe structures and translation/scaling matrix logic.
- `README.md` - Technical outline.