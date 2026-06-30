# CSS Job Listing Component

## What does this do?

A complete job listings page with search bar, department and location filters, job cards with company logo, title, location, salary, tags, and apply buttons.

## How is it used?

```html
<div class="jl-card">
  <div class="jl-card-left">
    <div class="jl-logo">TC</div>
    <div class="jl-info">
      <h2>Job Title</h2>
      <div class="jl-meta">
        <span class="jl-company">Company</span>
        <span class="jl-location">Location</span>
      </div>
      <div class="jl-tags">
        <span class="jl-tag">Skill</span>
      </div>
    </div>
  </div>
  <div class="jl-card-right">
    <div class="jl-salary">$100K</div>
    <button class="jl-apply">Apply</button>
  </div>
</div>
```

## Why is it useful?

Creates a professional job listings page for career portals and company websites. Features a search bar with rounded styling, three filter dropdowns for department location and job type, and individual job cards with gradient company logo, job title, metadata row with company name and location and employment type badge, description excerpt, skill tags, salary range with green highlighting, apply button, and posting date. The hover effect slides the card to the right. Fully responsive with mobile optimization.
