### Is your feature request related to a problem?
EaseMotion CSS currently lacks an organic, fluid morphing animation component. Blob/liquid animations are highly popular in modern web design but typically require JavaScript libraries. A pure CSS solution would be a valuable addition.

### Describe the solution you'd like
Add a new folder `liquid-morph-blob` featuring:
1. **Organic morphing** using complex `border-radius` keyframes with 8-value syntax.
2. **Multi-blob system** with 4 independent blobs at different scales, speeds, and float paths.
3. **Glow effects** via layered `box-shadow` and blurred `::before` pseudo-elements.
4. **Interactive hover** that accelerates morphing and brightens the palette.
5. Fully responsive with mobile scaling.

### Alternatives considered
- SVG `<animate>` for path morphing (heavier, less CSS-native)
- JavaScript blob libraries (violates zero-dependency principle)

The pure CSS `border-radius` approach is lightweight, performant, and aligns with the framework's philosophy.

**Proposed Folder Name:** `liquid-morph-blob`
**Labels:** `enhancement`, `animation`, `good first issue`