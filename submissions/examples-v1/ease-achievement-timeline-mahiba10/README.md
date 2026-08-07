# Ease Achievement Timeline

A premium, responsive, and animated career and achievement timeline component showcasing milestones, internships, certifications, hackathons, and open-source contributions. Featuring three customizable aesthetics themes (Glassmorphism, Cyberpunk Neon, and Nebula Aurora), interactive category filtering, and an automated career progression path simulator.

## What does this do?
It structures and renders chronological career highlights in a responsive layout. The visual styling dynamically updates based on active filters and theme overrides, with details rendered in a customized detail overlay modal on click.

## How is it used?
Integrate the stylesheet and core CSS variables, then apply the `.ease-timeline-wrapper` container to your document:

```html
<link rel="stylesheet" href="style.css">

<div class="ease-timeline-wrapper theme-glass" id="timeline-wrapper">
  <main class="ease-timeline-container">
    <div class="ease-timeline-track">
      <div class="ease-timeline-track-progress" id="track-progress"></div>
    </div>

    <!-- Timeline Item -->
    <div class="ease-timeline-item" data-category="opensource" id="item-unique-id"
         style="--category-color: var(--tm-color-opensource); --category-color-rgb: 139, 92, 246;">
      <div class="ease-timeline-date-wrapper">
        <span class="ease-timeline-date">Jun 2026</span>
        <span class="ease-timeline-duration">Core Standard</span>
      </div>
      
      <div class="ease-timeline-node-wrapper">
        <div class="ease-timeline-node">
          <div class="ease-timeline-node-ring"></div>
        </div>
      </div>
      
      <div class="ease-timeline-card-wrapper">
        <div class="ease-timeline-card" onclick="openMilestoneDetails('item-unique-id')">
          <div class="ease-timeline-card-header">
            <h3 class="ease-timeline-title">Contributor to Core</h3>
            <span class="ease-timeline-badge">Open Source</span>
          </div>
          <p class="ease-timeline-desc">Short summary description of the event...</p>
          
          <ul class="ease-timeline-tech-list">
            <li class="ease-timeline-tech-tag">HTML</li>
            <li class="ease-timeline-tech-tag">CSS</li>
          </ul>

          <!-- Payload for detailed view modal -->
          <div class="ease-timeline-modal-payload" style="display:none;">
            <div class="payload-details">
              <p>Detailed description paragraph 1...</p>
              <p>Detailed description paragraph 2...</p>
            </div>
            <ul class="payload-key-points">
              <li>Accomplishment 1</li>
              <li>Accomplishment 2</li>
            </ul>
            <div class="payload-media" data-title="Associated Media Link" data-desc="Description of media resource" data-link="https://github.com" data-type="github"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
```

## Why is it useful?
- **Immersive Interactivity**: Cards lift and glow in 3D-space, nodes expand with delayed ripple effects, and track progress matches vertical scrolling.
- **Three Core Aesthetic Themes**:
  - `theme-glass`: Futuristic translucent glassmorphism with backdrop filters and fine glowing borders.
  - `theme-cyber`: Dark cyberpunk matrix style using green and pink neon colors, monospace font grids, and scanline overlays.
  - `theme-nebula`: Large soft roundings with cosmos radial aurora grids.
- **Fully Responsive**: Mobile layouts compress the left dates and tracks elegantly, maintaining readable font sizes and margins.
- **Automatic Career Simulation**: A script steps through milestones sequentially, scrolling them to center, lighting them with glow overlays, and reporting telemetries to a mock console log.

## Tech Stack
- HTML5 (Semantic Structure)
- CSS3 (Vanilla transitions, CSS Variables, radial gradients, animations, media queries)
- JavaScript (Theme switching, scroll tracking, timeline filtering, and career simulation runner)
