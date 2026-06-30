# Vertical Text Orientation Layout Utilities

An isolated typography utility package introducing layout manipulation classes (`.ease-text-upright`, `.ease-text-sideways`, and `.ease-text-mixed`). Offers complete granular configuration controls over text character tracking vectors in vertical writing fields.

## Functional Mechanics

- **The Problem:** When converting standard containers to vertical reading paradigms using CSS writing modes (`writing-mode: vertical-rl/lr`), standard browsers automatically rotate the entire text thread sideways. While ideal for standard western scripts, it breaks localization expectations for CJK characters and blocks programmatic stylized rendering workflows.
- **The Solution:** Taps into the CSS `text-orientation` layout parameters. Applying `.ease-text-upright` forces all embedded alpha, numerical, and foreign scripts to stack cleanly right-side up, while `.ease-text-sideways` forces uniform 90-degree rotations, shielding elements from unaligned default system parsing rules.

## Usage Layout Structure
```html

<div style="writing-mode: vertical-rl;" class="ease-text-upright">
  <span>Vertical Layout String 101</span>
</div>
```

Closes #13839
