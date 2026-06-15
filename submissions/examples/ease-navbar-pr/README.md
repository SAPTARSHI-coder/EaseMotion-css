# ease-navbar-pr

Responsive navigation bar with CSS-only mobile hamburger menu using checkbox hack.

## Features

- Horizontal nav links on desktop with active indicator
- Hamburger icon transforms to X when open
- Slide-down mobile menu with fade animation
- Sticky positioning variant
- No JavaScript — uses checkbox hack
- Fully responsive breakpoint at 768px

## Files

- `style.css` — the navbar styles
- `demo.html` — working demo with default and sticky navbars
- `README.md` — usage documentation

## Usage

```html
&lt;&lt;nav class="navbar-pr" aria-label="Main navigation"&gt;
  &lt;a href="#" class="navbar-pr-brand"&gt;
    &lt;span class="navbar-pr-logo"&gt;E&lt;/span&gt;
    Brand
  &lt;/a&gt;
  
  &lt;ul class="navbar-pr-menu"&gt;
    &lt;li&gt;&lt;a href="#" class="navbar-pr-link navbar-pr-link-active"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" class="navbar-pr-link"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" class="navbar-pr-link"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  
  &lt;a href="#" class="navbar-pr-cta"&gt;Action&lt;/a&gt;
  
  &lt;input type="checkbox" id="nav-toggle" class="navbar-pr-toggle"&gt;
  &lt;label for="nav-toggle" class="navbar-pr-toggle-label" aria-label="Toggle menu"&gt;
    &lt;span class="navbar-pr-hamburger"&gt;&lt;/span&gt;
  &lt;/label&gt;
  
  &lt;ul class="navbar-pr-mobile"&gt;
    &lt;li&gt;&lt;a href="#" class="navbar-pr-mobile-link navbar-pr-mobile-link-active"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" class="navbar-pr-mobile-link"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" class="navbar-pr-mobile-link"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#" class="navbar-pr-mobile-cta"&gt;Action&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;