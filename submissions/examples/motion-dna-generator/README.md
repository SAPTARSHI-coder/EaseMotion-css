# Motion DNA Generator

Relates to feature request **#41588**.

## 1. What does this do?

Introduces a Motion DNA Generator that calculates a unique fingerprint for animated components based on the EaseMotion CSS classes applied to them. The resulting "DNA profile" scores the animation across several axes, including Movement Intensity, Opacity Variance, Transform Types, GPU Friendliness, and Accessibility.

## 2. Why is this useful for EaseMotion CSS?

Teams often ask whether two animations "feel" the same or if an animation is safe for users with vestibular disorders. The Motion DNA transforms subjective motion feelings into measurable characteristics, helping:
- Designers and developers maintain a consistent animation language across an application.
- QA teams verify that complex animations are utilizing GPU-accelerated properties (`transform` / `opacity`).
- Accessibility reviewers flag potentially harmful animations (excessive movement or flashing).

## 3. How it Works

1. **Parser**: The generator reads a string of EaseMotion classes.
2. **Heuristic Engine**: It parses the classes to understand what CSS properties they manipulate (e.g., `ease-float` translates, `ease-fade` changes opacity).
3. **Scoring**:
   - **Movement**: Scales based on the number and type of translate/scale/rotate utilities.
   - **Opacity**: Flags if fade utilities are present.
   - **GPU Friendly**: Starts at 100% and deducts points for non-composited properties (like `box-shadow` in `ease-glow` or `color` transitions).
   - **Accessibility**: Downgrades the score (e.g., AAA to AA or Fail) if excessive movement or rapid flashing (pulse/strobe) is detected.
4. **DNA Fingerprint**: Compiles this data into a visual breakdown and a text snippet.

## 4. Example Output (matches the issue's snippet exactly)

**HTML Snippet**
```html
<div class="ease-float ease-scale ease-glow">
  Motion DNA
</div>
```

**Exported CSS / Profile Snippet**
```text
Motion DNA

Movement
★★★☆☆

Opacity
★☆☆☆☆

Transform
translate + scale

GPU Friendly
98%

Accessibility
AA
```

## 5. Features Included

- **Interactive Target Stage**: Live previews the exact classes provided in the input field.
- **Visual Profiler**: Clean progress bars and badges illustrating Movement, Opacity, GPU %, and Accessibility Score.
- **Complexity Badge**: Automatically flags a combination as Low, Medium, or High complexity.
- **Text Fingerprint Export**: Generates the exact formatted text snippet requested in the issue for easy copy-pasting into PR descriptions or design system docs.
