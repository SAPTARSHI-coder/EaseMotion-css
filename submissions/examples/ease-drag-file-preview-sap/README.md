# Drag File Preview

A drag-and-drop file dropzone that shows an animated, appearing list of file
previews (thumbnails for images, an icon for other types) as files are added.

**Level:** Intermediate

## Usage

Drag files onto the dropzone, or click it to open the native file picker
(it's a `<label>` wrapping a hidden `<input type="file">`). Each added file
animates into `.preview-list` with a fade + rise-in.

## Accessibility

- The dropzone is a `<label>` associated with a real (visually hidden, not
  `display:none`-removed-from-DOM) file input, so it's natively keyboard-
  and screen-reader-operable — Enter/Space opens the file picker.
- `.preview-list` has `aria-live="polite"` so screen reader users are told
  when files are added.
- `:focus-within` gives a visible outline when the input inside is focused.
- `prefers-reduced-motion` removes both the dropzone hover scale and the
  preview item fade/rise transitions.

## Notes

- Image previews are read via `FileReader.readAsDataURL` and set as a
  background-image on the thumbnail; non-image files fall back to a static
  icon glyph.
- Drag state (`is-dragover`) is toggled on `dragenter`/`dragover` and
  cleared on `dragleave`/`drop`, with `preventDefault()` on all of them —
  required so the browser doesn't just navigate to the dropped file.