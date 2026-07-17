# Modal — Confirm and Alert Presets

## What does this do?
Adds two preset modal variants — `.ease-modal-confirm` (warning
icon, danger confirm button) and `.ease-modal-alert` (info icon,
single dismiss button) — to the modal component.

## How is it used?
Apply the variant alongside `.ease-modal`:

    <div class="ease-modal-overlay is-active" id="confirm">
      <div class="ease-modal ease-modal-confirm">
        <div class="ease-modal-header">
          <h2>Delete file?</h2>
        </div>
        <div class="ease-modal-body">
          <p>This action cannot be undone.</p>
        </div>
        <div class="ease-modal-footer">
          <a href="#" class="ease-btn ease-btn-ghost">Cancel</a>
          <a href="#" class="ease-btn ease-btn-danger">Delete</a>
        </div>
      </div>
    </div>

## Why is it useful?
The modal component supports three animation variants (`.ease-modal`,
`.ease-modal-slide`, `.ease-modal-zoom`) but no preset content
templates. Designers typically want consistent confirm/alert
layouts (icon, title, body, footer with a primary action). This
submission adds the two most common presets so consumers don't
have to handcraft the icon and footer arrangement.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser and click the trigger buttons to
see the two preset modals.

## Contribution Notes
- Pure CSS addition
- No JavaScript required (works with the existing `:target` and
  `.is-active` activation pattern)
