# Loader Variants Demo

## What does this do?
Self-contained demo of the `.ease-loader`, `.ease-loader-spin`,
`.ease-loader-pulse`, and `.ease-loader-ping` classes defined in
`components/loaders.css`. Created as a side-effect of issue #5510
which proposed smoke-test coverage for these classes.

## How is it used?
End users add the loader class to a containing region that carries
`aria-busy="true"` and a meaningful `aria-label`:

    <div role="status" aria-busy="true" aria-label="Loading">
      <span class="ease-loader ease-loader-spin"></span>
    </div>

## Why is this useful?
Loaders are decorative by default. Without `aria-busy` and
`aria-label`, screen-reader users have no way to know that a
region is loading. This demo shows the four available variants
side by side with the recommended accessibility markup.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the four loader
variants animating.

## Contribution Notes
- Linked to upstream issue #5510
- The smoke test additions proposed in #5510 are out of scope for
  this submission since `tests/` is a framework file that
  contributors cannot modify through PR
- Maintainers are encouraged to add the corresponding
  `expect(css).toContain(...)` assertions in
  `tests/smoke.test.js` directly
