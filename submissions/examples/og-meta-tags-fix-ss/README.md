# Open Graph Meta Tags Fix

Submission for EaseMotion CSS · Fixes Issue #33906

## What does this do?
Adds missing `og:title` and `og:image` Open Graph meta tags to the documentation page's `<head>`, so links to the site render properly with a title, description, and image preview when shared on social media (Twitter, LinkedIn, Discord, etc.)

## Bug
The live docs page was missing `og:title` and `og:image` meta tags, so shared links showed no preview image or title card, just a plain URL.

## Fix
Added standard Open Graph meta tags: `og:title`, `og:description`, `og:image`, `og:type`, `og:url`. Used the existing `docs/assets/banner.svg` as the preview image since it's already a polished, on-brand banner. Note: some platforms (e.g. Twitter/X) prefer PNG/JPG over SVG for og:image — the maintainer may want a PNG export of this banner for full compatibility.

## How is it used?
Add these tags inside the `<head>` of the HTML page:
\`\`\`html
<meta property="og:title" content="Page Title" />
<meta property="og:image" content="path/to/image.png" />
\`\`\`