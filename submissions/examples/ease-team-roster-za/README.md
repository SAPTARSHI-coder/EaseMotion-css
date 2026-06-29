# CSS Team Roster Component

## What does this do?
A complete team roster section with department filter navigation, statistics bar showing team metrics, responsive member card grid with 8 team members showing avatar initials, social links overlay, role and department labels, biography text, skill tags, and a hiring call-to-action section.

## How is it used?
```html
<section class="tr-roster">
  <div class="tr-member" data-dept="engineering">
    <div class="tr-member-img" style="background:gradient">
      <div class="tr-member-initials">JD</div>
      <div class="tr-member-social">
        <a href="#" class="tr-social-link">in</a>
      </div>
    </div>
    <div class="tr-member-info">
      <h3>Jane Doe</h3>
      <span class="tr-member-role">Engineer</span>
      <p class="tr-member-bio">Bio text here.</p>
      <div class="tr-member-skills">
        <span class="tr-skill">CSS</span>
      </div>
    </div>
  </div>
</section>
```

## Why is it useful?
Creates a professional team roster page for company websites and about pages. Features department-level filtering with CSS-only interactions via six department categories, social media link overlays on hover for each team member, skill tags with hover effects, team statistics display bar showing member count and departments, and a recruitment-focused call-to-action section. Fully responsive grid layout with smooth hover animations that lift cards and reveal social icons. Each member card shows gradient avatar with initials, role, department, bio, and skills. CSS custom properties enable easy theming.
