# SEO & OpenGraph Global Architecture

## What does this do?
Proposes a vital global growth and Search Engine Optimization (SEO) refactor across the entire framework's documentation website. It aggressively injects missing `canonical` URLs, deeply descriptive `<meta name="description">` blocks, and rich `og:image` OpenGraph tags into every single HTML file to instantly boost search rankings and enable rich social media previews.

## How is it used?
Maintainers and core contributors must systematically audit the exact `<head>` structure of all HTML files across the repository—specifically targeting `docs/*.html` and `submissions/*/demo.html` (spanning 20+ core files).

Currently, developers are violently neglecting the `<head>` of the documentation files, deploying incredibly barebones HTML that is completely invisible to search engines and social platforms:
```html
<!-- ❌ BAD: Destroys SEO rankings and produces ugly, broken link previews on social media -->
<head>
  <meta charset="UTF-8">
  <title>Cards</title>
  <link rel="stylesheet" href="style.css">
</head>
```

This legacy approach must be entirely ripped out. Every single HTML file must explicitly define the massive global SEO architectural block:
```html
<!-- ✅ GOOD: Perfect SEO rankings and massive, rich social media preview cards -->
<head>
  <title>Cards | EaseMotion CSS Framework</title>
  <meta name="description" content="Build highly performant CSS Grid cards natively with EaseMotion.">
  <link rel="canonical" href="https://easemotion.dev/docs/cards">
  
  <meta property="og:title" content="EaseMotion Cards">
  <meta property="og:image" content="https://easemotion.dev/assets/og-cards.png">
  <meta name="twitter:card" content="summary_large_image">
</head>
```

## Why is it useful?
Currently, EaseMotion's documentation is severely bleeding massive amounts of potential growth and organic developer adoption. Because the documentation files completely lack `canonical` URLs and `og:image` tags, when a developer tries to excitedly share an amazing EaseMotion component on Twitter, Discord, or LinkedIn, the platform violently fails to render a preview image. Instead, it renders an incredibly ugly, completely broken, text-only hyperlink. Furthermore, without proper `<meta name="description">` tags, Google completely ignores the documentation when enterprise developers search for "Fast CSS UI frameworks."

By forcefully injecting the required SEO and OpenGraph meta architecture into every single `docs/*.html` file, we completely reverse this catastrophic growth blocker. Google will instantly parse the new `canonical` tags, drastically rocketing the framework up the search engine result pages (SERPs). More importantly, whenever a developer copy-pastes a documentation link into Discord or Twitter, it will automatically and natively unfurl into a massive, gorgeous, highly professional preview card featuring the framework's branding. This mathematically guarantees massively higher click-through rates, explosive organic social media growth, and incredible new user acquisition for the open-source project.
