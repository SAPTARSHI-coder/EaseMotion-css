<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EaseMotion &mdash; CSS Zoom-In Navbar</title>
  <meta name="description" content="A modern, accessible, fully responsive navigation bar with a smooth CSS-only zoom-in animation, built with EaseMotion." />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- ============================= -->
  <!-- NAVBAR                        -->
  <!-- ============================= -->
  <header class="em-navbar em-zoom-in" role="banner">
    <nav class="em-navbar__inner" aria-label="Primary navigation">

      <!-- Logo -->
      <a href="#home" class="em-navbar__logo" aria-label="EaseMotion home">
        <span class="em-navbar__logo-mark" aria-hidden="true">⚡</span>
        <span class="em-navbar__logo-text">EaseMotion</span>
      </a>

      <!-- Hamburger toggle (CSS-only, checkbox hack) -->
      <input type="checkbox" id="em-menu-toggle" class="em-navbar__toggle-input" aria-hidden="true" />
      <label for="em-menu-toggle" class="em-navbar__hamburger" aria-label="Toggle navigation menu" tabindex="0">
        <span class="em-navbar__hamburger-line"></span>
        <span class="em-navbar__hamburger-line"></span>
        <span class="em-navbar__hamburger-line"></span>
      </label>

      <!-- Nav links -->
      <ul class="em-navbar__menu" role="list">
        <li class="em-navbar__item em-zoom-in-item" style="--em-delay: 1"><a href="#home" class="em-navbar__link" aria-current="page">Home</a></li>
        <li class="em-navbar__item em-zoom-in-item" style="--em-delay: 2"><a href="#about" class="em-navbar__link">About</a></li>
        <li class="em-navbar__item em-zoom-in-item" style="--em-delay: 3"><a href="#services" class="em-navbar__link">Services</a></li>
        <li class="em-navbar__item em-zoom-in-item" style="--em-delay: 4"><a href="#projects" class="em-navbar__link">Projects</a></li>
        <li class="em-navbar__item em-zoom-in-item" style="--em-delay: 5"><a href="#contact" class="em-navbar__link">Contact</a></li>
        <li class="em-navbar__item em-zoom-in-item em-navbar__item--cta" style="--em-delay: 6">
          <a href="#get-started" class="em-navbar__cta em-zoom-in-btn">Get Started</a>
        </li>
      </ul>

    </nav>
  </header>

  <!-- ============================= -->
  <!-- PAGE CONTENT (demo filler)     -->
  <!-- ============================= -->
  <main id="home" class="em-demo-content">
    <section class="em-demo-hero">
      <h1>CSS Zoom-In Navbar</h1>
      <p>
        Scroll, resize the window, and reload the page to see the zoom-in entrance animation.
        Resize below <strong>768px</strong> to see the CSS-only hamburger menu in action.
      </p>
    </section>

    <section id="about" class="em-demo-section">
      <h2>About</h2>
      <p>This section exists purely to demonstrate scroll behavior against the fixed navbar above.</p>
    </section>

    <section id="services" class="em-demo-section">
      <h2>Services</h2>
      <p>Placeholder content block for demo purposes.</p>
    </section>

    <section id="projects" class="em-demo-section">
      <h2>Projects</h2>
      <p>Placeholder content block for demo purposes.</p>
    </section>

    <section id="contact" class="em-demo-section">
      <h2>Contact</h2>
      <p>Placeholder content block for demo purposes.</p>
    </section>
  </main>

</body>
</html>