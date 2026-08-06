# Mechanical Odometer Digit Roll

A mechanical-style digit rolling animation simulating slot machines, fitness odometers, or analytics trackers. Rather than standard text count-ups, each digit column shifts independently along a 3D vertical path using translation and clipping constraints.

## EaseMotion CSS Classes Showcased

This feature submits a self-contained prototype demonstrating mechanical odometer digit rolling with zero JS transitions (using pure CSS transitions/transforms on list columns).

### Classes:
- `.ease-odometer`: Main parent container configuring alignments, heights, and column clipping.
- `.ease-odometer-digit`: Wraps an individual column.
- `.ease-odometer-column`: Contains a sequence of digits (0-9). The vertical position (`translateY`) is shifted programmatically via CSS style custom variables to change values.

### Usage in HTML:
```html
<div class="ease-odometer">
  <div class="ease-odometer-digit">
    <div class="ease-odometer-column" style="--ease-digit-val: 4;">
      <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
    </div>
  </div>
</div>
```

---
Created as a contribution to EaseMotion CSS. Open `demo.html` in any browser to view the interactive prototype!
