# Deployment Pipeline Tracker (EaseMotion)

A CSS-only CI/CD pipeline visualization showing stages, statuses, and environment badges.

Purpose

- Visualize build pipelines and deployment status for docs, dashboards, or internal CI views.

Use cases

- DevOps dashboards and deployment pages
- Build status panels in project docs
- Team status boards showing active pipelines

Structure

- `.pipeline` — horizontal list of `.stage` elements
- `.stage-card` — individual stage UI with `.stage-head` and `.stage-body`
- Status classes: `.stage-success`, `.stage-running`, `.stage-pending`
- `.connector-line` — decorative progress line between stages

Customization

- Colors and radii are driven by CSS variables in `style.css`'s `:root`.
- Change active stage by toggling `aria-current="true"` on a `.stage` element.
- Add duration labels by editing the `.duration` elements or include additional metadata in `.meta`.
- Modify pulse speed or color in the `@keyframes pulse` rule.

Accessibility

- Stages are focusable and have visible focus outlines for keyboard navigation.
- Use `aria-current` to indicate the active stage to assistive technologies.

Why it fits EaseMotion CSS

- Lightweight and composable: integrates with EaseMotion utilities (`em-container`, `em-text-*`) and keeps component styles focused.
- Developer-focused: clear stage semantics and small animations make it suitable for DevOps UIs.

Files

- `demo.html` — demo markup for the Build → Test → Deploy → Production pipeline.
- `style.css` — component styles (no JavaScript required).

Preview
Open `submissions/examples/deployment-pipeline-tracker-zt/demo.html` in a browser to view the responsive pipeline.
