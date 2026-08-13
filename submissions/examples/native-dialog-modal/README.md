# Native `<dialog>` Modal Component

A fully accessible, zero-JavaScript modal/popup component utilizing the native HTML `<dialog>` element. By leveraging the `<dialog>` element's native API, developers can open the modal using simple JavaScript (`dialog.showModal()`), but the entire structural layout, backdrop, and entering/exiting animations are handled purely by EaseMotion CSS.

## Files
- `demo.html` - Interactive demonstration of the modal component.
- `style.css` - The CSS implementation utilizing EaseMotion tokens.

## Details
This addresses the "Modal & tooltip components" requirement currently listed as "Planned" in the project Roadmap. The native `<dialog>` element handles focus trapping, keyboard navigation (Esc to close), and screen reader support automatically.
