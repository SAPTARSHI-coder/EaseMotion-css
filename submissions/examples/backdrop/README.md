# ease-backdrop

Animated modal backdrop overlay component using the CSS :target trick. Zero JavaScript required.

## Usage

    <!-- Trigger link -->
    <a href="#my-modal">Open Modal</a>

    <!-- Backdrop + Modal -->
    <div class="ease-backdrop" id="my-modal">
      <a href="#" class="ease-backdrop-close"></a>
      <div class="ease-modal">
        <a href="#" class="ease-modal-close">x</a>
        <div class="ease-modal-header">Title</div>
        <div class="ease-modal-body">Content goes here.</div>
        <div class="ease-modal-footer">
          <a href="#" class="btn">Cancel</a>
        </div>
      </div>
    </div>

## Variants

| Class               | Description                              |
| ------------------- | ---------------------------------------- |
| ease-backdrop       | Base fade-in backdrop overlay            |
| ease-backdrop-blur  | Frosted glass blur backdrop              |
| ease-backdrop-dark  | Dark 80% opacity backdrop                |
| ease-backdrop-fast  | 120ms fade speed                         |
| ease-backdrop-slow  | 500ms fade speed                         |
| ease-modal          | Animated modal panel with scale entrance |
| ease-modal-close    | Absolute close button (top-right)        |
| ease-modal-header   | Modal title section                      |
| ease-modal-body     | Modal content section                    |
| ease-modal-footer   | Modal action buttons section             |
| ease-backdrop-close | Full-area click-outside-to-close layer   |

## Notes

- Uses CSS :target trick — no JavaScript needed
- ease-backdrop-close is a transparent full-size anchor that links to # to close
- Works with any content inside ease-modal
- Combine ease-backdrop-blur with dark-themed modals for glassmorphism effect

## Submission

- **Author:** sudha09-git
- **Issue:** #3886
- **Files:** style.css, demo.html
