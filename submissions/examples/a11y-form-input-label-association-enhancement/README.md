# Accessible Form Input Label Association (Enhancement)

A highly accessible, WCAG 2.1 AA compliant Form component designed to demonstrate the rigorous implementation of explicit labels, descriptive associations, and high-visibility keyboard focus.

## Accessibility Features

- **Explicit Label Association**: Every `<input>` and `<textarea>` is strictly paired with a `<label>`. This is achieved by ensuring the `for` attribute on the label perfectly matches the `id` of the input. This is critical for screen readers (which read the label when the input is focused) and provides a larger clickable area for mouse users.
- **Accessible Descriptions**: Form fields with instructional text utilize the `aria-describedby` attribute, pointing to the `id` of the helper text `<div>`. This ensures screen readers announce the helper text immediately after the label when the user focuses the field.
- **Required State Semantics**: Required fields use the standard HTML5 `required` attribute coupled with `aria-required="true"`. The visual asterisk (`*`) is hidden from screen readers using `aria-hidden="true"` to prevent annoying "star" vocalizations.
- **Input Types**: Utilizes appropriate HTML5 input types (`type="email"`, `type="text"`) to trigger correct mobile keyboards and native browser validation.
- **State Announcements (aria-live)**: Uses an `aria-live="polite"` region to announce to screen readers when the form has been successfully submitted.
- **Focus Management**: A highly visible focus ring is implemented across all inputs (using `box-shadow` and `border-color`) and the submit button (`:focus-visible` with `outline-offset`), fulfilling the WCAG Focus Visible requirement.
- **Forced Colors Support**: Includes robust `@media (forced-colors: active)` styling to map borders, backgrounds, and text variables directly to operating system high-contrast colors (`Canvas`, `CanvasText`, `Highlight`). The focus state falls back to a strict `outline` in this mode since `box-shadow` is often discarded by high contrast themes.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the provided JavaScript is attached to handle the `aria-live` submission announcement.
