# ease-tag-removable-fade

Tag/pill component with an X remove button. On click, the tag fades out, shrinks in scale, and collapses its width before being hidden from the DOM.

## Features

- Pill-shaped tags with label and close button
- Smooth fade-out, scale-down, and width collapse on removal
- Tags wrap naturally in a flex container
- Accessible remove buttons with aria-label

## CSS Custom Property Control

- `--removing`: Set to `1` to trigger the removal animation (opacity → 0, scale → 0.7, width collapses). The JavaScript sets this property on the tag element before removing it after 400ms.
