# Pure CSS Timeline

A vertical timeline component with alternating left/right entries, built with pure CSS (no JavaScript).

## How it works

- `.timeline` draws a centered vertical line using a `::before` pseudo-element.
- `.timeline-item` alternates sides via `nth-child(odd)` / `nth-child(even)`.
- Each item has a dot (`::after`) that sits on the line and scales up on hover.
- `.timeline-card` lifts and gains shadow on hover for a subtle interactive feel.
- On small screens (`max-width: 640px`), the layout collapses to a single left-aligned column with the line moved to the left edge.

## Usage

\`\`\`html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-card">
      <span class="timeline-date">Jan 2024</span>
      <h3 class="timeline-title">Project Kickoff</h3>
      <p class="timeline-desc">Initial planning and team formation.</p>
    </div>
  </div>
  <!-- more .timeline-item entries -->
</div>
\`\`\`

## Acceptance criteria
- [x] Pure CSS, no JavaScript
- [x] Alternating left/right entries on desktop
- [x] Hover animation (dot + card lift)
- [x] Responsive layout (single column on mobile)

Related issue: #71880
