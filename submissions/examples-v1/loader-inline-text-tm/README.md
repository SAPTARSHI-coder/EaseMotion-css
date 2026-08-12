# Loader — Inline Text Alignment Helper

## What does this do?
Adds `.ease-loader-inline` — a flex utility that aligns a loader
alongside text (e.g. "Loading…") with proper baseline and
vertical alignment.

## How is it used?
Wrap a loader and text in a container with the class:

    <div class="ease-loader-inline" role="status" aria-busy="true" aria-label="Loading">
      <span class="ease-loader ease-loader-spin"></span>
      <span>Loading your content...</span>
    </div>

## Why is it useful?
Putting a loader and text on the same line without the right
alignment helpers results in a misaligned look (the text floats
above or below the loader's vertical center). This helper
guarantees a clean inline composition.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser to see the inline composition.

## Contribution Notes
- Pure CSS addition
- The loader component itself is unchanged
