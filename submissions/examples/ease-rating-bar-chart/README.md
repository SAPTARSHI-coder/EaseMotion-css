# Rating Bar Chart

### 1. What does this do?
A star-rating breakdown chart (5-star down to 1-star) with horizontal bars that animate their fill width in on page load, commonly used in product review summaries.

### 2. How is it used?
\`\`\`html
<div class="rating-bar-chart">
  <div class="rbc-row" style="--percent: 72%;">
    <span class="rbc-star-label">5 ★</span>
    <div class="rbc-track"><div class="rbc-fill"></div></div>
    <span class="rbc-count">720</span>
  </div>
  <!-- repeat rbc-row for 4★ through 1★ -->
</div>
\`\`\`
- Set the \`--percent\` CSS custom property on each \`.rbc-row\` to control that bar's fill width (as a percentage of the track).
- Each row expects a star label, a track/fill bar, and an optional count on the right.

### 3. Why is it useful?
Rating breakdowns are a very common UI pattern for reviews and feedback summaries. Animating the bars in on load (rather than rendering them statically) draws the eye and adds a polished, purposeful motion moment, fitting EaseMotion's animation-first philosophy. Fully CSS-driven with no JS required.
