# Animated Donut Chart

## What does this do?
A pure CSS animated donut / pie chart built on SVG
`stroke-dasharray` and `stroke-dashoffset`, where each segment
draws itself in on scroll into view, supports multiple segments
with staggered entrance delays, and includes a progress ring
variant — all driven by CSS custom properties and one
`@keyframes` rule.

## How is it used?

Wrap an SVG inside `.donut`. Each segment is a `<circle>`
with three custom properties that control its size, color,
and position around the ring:

    <div class="donut">
      <svg class="donut-svg" viewBox="0 0 120 120">

        <!-- Background track -->
        <circle class="donut-track" cx="60" cy="60" r="48"/>

        <!--
          --dash   : percentage of the ring this segment fills (0–100)
          --offset : how far clockwise to shift this segment (0 = top)
          --segment-color : the segment colour
        -->
        <circle
          class="donut-segment"
          cx="60" cy="60" r="48"
          style="
            --segment-color: #457b9d;
            --dash: 45;
            --offset: 0;
          "
        />

        <!-- Second segment starts where the first ends -->
        <circle
          class="donut-segment"
          cx="60" cy="60" r="48"
          style="
            --segment-color: #2a9d8f;
            --dash: 30;
            --offset: -45;
          "
        />

      </svg>

      <!-- Optional center label -->
      <div class="donut-label">
        <span class="donut-value">75%</span>
        <span class="donut-name">Complete</span>
      </div>
    </div>

Add `.donut--animate` to trigger the draw-in animation.
Use an IntersectionObserver to add it on scroll:

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('donut--animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.donut').forEach(el =>
      observer.observe(el)
    );

For the thin progress ring variant add `.donut--thin` to
the wrapper and `.donut-track--thin` / `.donut-segment--thin`
to the SVG circles.

## Segment offset quick reference

Each segment's `--offset` is the negative sum of all
preceding segments' `--dash` values:

    Segment 1 — --dash: 45,  --offset: 0
    Segment 2 — --dash: 30,  --offset: -45
    Segment 3 — --dash: 25,  --offset: -75

## Why is this useful?

Data visualisation almost always relies on Chart.js, D3, or
similar libraries even when the chart itself is simple. This
submission proves that a production-quality animated donut
chart needs nothing but SVG and CSS. One `@keyframes donut-draw`
rule animates every segment because the target dasharray value
is read from the `--dash` custom property at runtime. Staggered
entrance delays are set via `--draw-delay` on each nth-child —
no JavaScript animation needed at all. The draw animation is
triggered by a single class toggle, making it trivially
composable with any scroll library, framework, or plain
IntersectionObserver. This fits EaseMotion CSS's philosophy
exactly: CSS owns the motion, the developer owns the data.