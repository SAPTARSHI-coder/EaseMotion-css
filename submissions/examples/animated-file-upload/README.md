# Ease Team Grid

## What does this do?
A responsive team member profile grid with a **3D card-flip reveal on
hover** showing a bio on the back face, and a **magnetic social icon
cluster** that fans out from a single trigger icon — instead of a flat
hover-lift with always-visible social icons.

## How is it different from a typical team-grid utility?
- Cards flip in 3D (`rotateY`) on hover to reveal a bio and social links on
  the back, keeping the front face clean and uncluttered.
- Social icons stay hidden inside a single circular trigger and fan out
  with a staggered spring-like animation when hovered, rather than sitting
  visible on the card at all times.
- Featured/team-lead card uses a gradient background and badge to stand
  out from the rest of the grid.
- Fully responsive, collapsing to a single column on small viewports.

## How is it used?
\`\`\`html
<div class="ease-team-card">
  <div class="ease-team-card__inner">
    <div class="ease-team-card__front">
      <img src="avatar.jpg" alt="Name" />
      <h3>Name</h3>
      <p class="role">Role</p>
    </div>
    <div class="ease-team-card__back">
      <p class="bio">Short bio text.</p>
      <div class="ease-team-card__socials">
        <a href="#" class="social-trigger">🔗
          <span class="social-fan">
            <a href="#">𝕏</a>
            <a href="#">in</a>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
\`\`\`

## Why is this useful?
Team/about pages are a near-universal website section, and a flip-reveal
with hidden-until-hover social links keeps the initial grid visually clean
while still surfacing rich detail on interaction — a polished, reusable
showcase for EaseMotion CSS.