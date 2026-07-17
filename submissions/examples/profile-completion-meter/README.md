# Profile Completion Meter Component

## What does this do?

Creates a profile completion meter component that visually tracks user onboarding or profile setup progress. The component supports a circular progress indicator, displays a completion percentage, includes a checklist of required actions, and clearly differentiates completed and pending items.

## How is it used?

Use the `.profile-meter` container with a `.completion-circle` to show the overall progress and a `.completion-checklist` to list tasks. Apply `.completed` or `.pending` to the checklist items.

```html
<div class="profile-meter">
  <div class="completion-circle">
    <span class="completion-percent">75%</span>
  </div>

  <ul class="completion-checklist">
    <li class="completed">✓ Upload profile photo</li>
    <li class="completed">✓ Add personal details</li>
    <li class="completed">✓ Verify email</li>
    <li class="pending">○ Connect social account</li>
  </ul>
</div>
```

## Why is it useful?

Profile completion indicators are a common UI pattern in onboarding flows, dashboards, SaaS applications, and user account settings. This component aligns with EaseMotion CSS's animation-first approach by combining progress animations, state transitions, and checklist interactions into a reusable, human-readable utility.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effects.

## Contribution Notes

- Class naming handled by contributor
- Maintainer will rename to ease-\* convention before merging
