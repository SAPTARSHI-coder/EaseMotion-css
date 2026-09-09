:root {
  --page-bg: #e9edf4;
  --surface: #e9edf4;
  --surface-dark: #dce1ea;

  --text: #202633;
  --muted: #717b8c;

  --accent: #6355d9;
  --accent-dark: #5044bc;
  --accent-soft: rgba(99, 85, 217, 0.12);

  --white: rgba(255, 255, 255, 0.85);
  --border: rgba(255, 255, 255, 0.45);

  --shadow-light:
    -10px -10px 22px rgba(255, 255, 255, 0.92);

  --shadow-dark:
    10px 10px 22px rgba(163, 171, 187, 0.6);

  --shadow-soft:
    -6px -6px 15px rgba(255, 255, 255, 0.86),
    6px 6px 15px rgba(167, 176, 191, 0.55);

  --transition:
    260ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  color: var(--text);

  background:
    radial-gradient(
      circle at 9% 8%,
      rgba(99, 85, 217, 0.09),
      transparent 25%
    ),
    radial-gradient(
      circle at 90% 13%,
      rgba(255, 255, 255, 0.7),
      transparent 23%
    ),
    var(--page-bg);
}

a {
  color: inherit;
  text-decoration: none;
}

summary {
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

.sr-only {
  position: absolute;

  width: 1px;
  height: 1px;

  padding: 0;
  margin: -1px;

  overflow: hidden;

  clip: rect(0, 0, 0, 0);

  white-space: nowrap;

  border: 0;
}

.page {
  min-height: 100vh;

  padding:
    20px
    18px
    36px;
}

.site-header {
  position: sticky;
  z-index: 100;

  top: 14px;

  width: min(1080px, 100%);

  margin: 0 auto;
}

.navbar {
  position: relative;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  gap: 24px;

  min-height: 76px;

  padding: 11px 13px 11px 17px;

  border: 1px solid var(--border);
  border-radius: 21px;

  background:
    linear-gradient(
      145deg,
      rgba(239, 242, 248, 0.94),
      rgba(224, 229, 238, 0.88)
    );

  box-shadow:
    var(--shadow-light),
    var(--shadow-dark);

  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
}

.navbar__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  min-width: max-content;
}

.navbar__brand-icon {
  display: grid;
  place-items: center;

  width: 39px;
  height: 39px;

  border-radius: 12px;

  color: #ffffff;

  background:
    linear-gradient(
      145deg,
      var(--accent),
      var(--accent-dark)
    );

  box-shadow:
    5px 5px 11px rgba(167, 175, 192, 0.65),
    -4px -4px 9px rgba(255, 255, 255, 0.9);

  font-family:
    "SFMono-Regular",
    Consolas,
    monospace;

  font-size: 0.74rem;
  font-weight: 900;

  transition:
    transform var(--transition),
    box-shadow var(--transition);
}

.navbar__brand:hover .navbar__brand-icon {
  transform:
    translateY(-2px)
    rotate(-3deg);

  box-shadow:
    7px 8px 14px rgba(158, 166, 184, 0.65),
    -5px -5px 11px rgba(255, 255, 255, 0.95);
}

.navbar__brand-text {
  font-size: 0.9rem;
  font-weight: 850;
  letter-spacing: -0.035em;
}

.navbar__brand-text span {
  color: var(--accent);
}

.navbar__links {
  display: flex;
  justify-content: center;
  gap: 7px;
}

.navbar__link {
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 40px;

  padding: 0 13px;

  border-radius: 11px;

  color: var(--muted);

  font-size: 0.63rem;
  font-weight: 770;

  transition:
    color var(--transition),
    transform var(--transition),
    box-shadow var(--transition),
    background var(--transition);
}

.navbar__link::after {
  content: "";

  position: absolute;

  left: 50%;
  bottom: 4px;

  width: 0;
  height: 2px;

  border-radius: 999px;

  background: var(--accent);

  transform: translateX(-50%);

  transition: width var(--transition);
}

.navbar__link:hover,
.navbar__link:focus-visible,
.navbar__link--active {
  color: var(--text);

  background: rgba(255, 255, 255, 0.28);

  box-shadow:
    inset 3px 3px 7px rgba(171, 180, 195, 0.25),
    inset -3px -3px 7px rgba(255, 255, 255, 0.7);

  outline: none;
}

.navbar__link:hover::after,
.navbar__link:focus-visible::after,
.navbar__link--active::after {
  width: 17px;
}

.navbar__link:active {
  box-shadow:
    inset 4px 4px 9px rgba(171, 180, 195, 0.38),
    inset -4px -4px 9px rgba(255, 255, 255, 0.72);
}

.navbar__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  min-height: 42px;

  padding: 0 15px;

  border: 1px solid rgba(99, 85, 217, 0.11);
  border-radius: 11px;

  color: #ffffff;

  background:
    linear-gradient(
      145deg,
      #7163e6,
      #5548c3
    );

  box-shadow:
    7px 7px 14px rgba(157, 166, 183, 0.58),
    -5px -5px 11px rgba(255, 255, 255, 0.86);

  font-size: 0.6rem;
  font-weight: 850;

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    filter var(--transition);
}

.navbar__cta:hover,
.navbar__cta:focus-visible {
  transform: translateY(-2px);

  filter: brightness(1.04);

  box-shadow:
    9px 10px 16px rgba(150, 159, 177, 0.6),
    -5px -5px 12px rgba(255, 255, 255, 0.95);

  outline: none;
}

.navbar__cta:active {
  transform: translateY(1px);

  box-shadow:
    inset 4px 4px 8px rgba(57, 48, 139, 0.35),
    inset -4px -4px 8px rgba(147, 138, 239, 0.45);
}

.navbar__cta span {
  font-size: 0.77rem;
}

.mobile-nav {
  display: none;
}

.hero {
  width: min(1080px, 100%);

  min-height: 590px;

  display: grid;
  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(300px, 1.05fr);

  align-items: center;

  gap: 38px;

  margin: 0 auto;

  padding:
    80px
    38px
    55px;
}

.hero__eyebrow {
  display: inline-block;

  margin-bottom: 13px;

  color: var(--accent);

  font-family:
    "SFMono-Regular",
    Consolas,
    monospace;

  font-size: 0.57rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;

  max-width: 650px;

  font-size: clamp(2.7rem, 7vw, 5.6rem);
  line-height: 0.92;
  letter-spacing: -0.075em;
}

.hero h1 span {
  display: block;

  color: var(--accent);
}

.hero p {
  max-width: 570px;

  margin: 21px 0 0;

  color: var(--muted);

  font-size: 0.83rem;
  line-height: 1.85;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  margin-top: 27px;
}

.hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  min-height: 44px;

  padding: 0 16px;

  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 11px;

  font-size: 0.62rem;
  font-weight: 820;

  transition:
    transform var(--transition),
    color var(--transition),
    box-shadow var(--transition),
    background var(--transition);
}

.hero__button:hover,
.hero__button:focus-visible {
  transform: translateY(-2px);

  outline: none;
}

.hero__button--primary {
  color: #ffffff;

  background:
    linear-gradient(
      145deg,
      #7163e6,
      #5548c3
    );

  box-shadow:
    7px 7px 15px rgba(160, 169, 185, 0.6),
    -5px -5px 11px rgba(255, 255, 255, 0.9);
}

.hero__button--secondary {
  color: var(--text);

  background: var(--surface);

  box-shadow:
    var(--shadow-soft);
}

.hero__button--secondary:active {
  box-shadow:
    inset 5px 5px 10px rgba(170, 178, 194, 0.38),
    inset -5px -5px 10px rgba(255, 255, 255, 0.75);
}

.hero__visual {
  position: relative;

  min-height: 400px;

  display: grid;
  place-items: center;

  perspective: 900px;
}

.hero__disc {
  position: absolute;

  border-radius: 50%;

  background:
    linear-gradient(
      145deg,
      #f1f3f8,
      #dde2eb
    );

  box-shadow:
    var(--shadow-light),
    var(--shadow-dark);
}

.hero__disc--one {
  width: 300px;
  height: 300px;

  transform:
    translateZ(-30px)
    rotateX(62deg);

  opacity: 0.72;
}

.hero__disc--two {
  width: 235px;
  height: 235px;

  transform:
    translateZ(-12px)
    rotateX(62deg)
    rotateZ(24deg);

  opacity: 0.88;
}

.hero__cube {
  position: relative;

  width: 148px;
  height: 148px;

  display: grid;
  place-items: center;

  border-radius: 32px;

  background:
    linear-gradient(
      145deg,
      #f5f7fb,
      #d9dfea
    );

  box-shadow:
    -16px -16px 30px rgba(255, 255, 255, 0.95),
    17px 18px 30px rgba(159, 169, 187, 0.62),
    inset 2px 2px 0 rgba(255, 255, 255, 0.65);

  transform:
    rotate(45deg)
    translateZ(30px);

  transition:
    transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow var(--transition);
}

.hero__cube::before {
  content: "";

  position: absolute;

  inset: 17px;

  border-radius: 23px;

  background:
    linear-gradient(
      145deg,
      rgba(99, 85, 217, 0.17),
      rgba(99, 85, 217, 0.03)
    );

  box-shadow:
    inset 5px 5px 11px rgba(171, 179, 194, 0.36),
    inset -5px -5px 11px rgba(255, 255, 255, 0.9);
}

.hero__cube span {
  position: relative;

  color: var(--accent);

  font-family:
    "SFMono-Regular",
    Consolas,
    monospace;

  font-size: 1.65rem;
  font-weight: 900;

  transform: rotate(-45deg);

  text-shadow:
    1px 1px 0 #ffffff;
}

.hero__visual:hover .hero__cube {
  transform:
    rotate(48deg)
    translateZ(45px)
    translateY(-7px);

  box-shadow:
    -18px -18px 33px rgba(255, 255, 255, 0.98),
    20px 22px 36px rgba(153, 163, 181, 0.66),
    inset 2px 2px 0 rgba(255, 255, 255, 0.75);
}

.features {
  width: min(1080px, 100%);

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 16px;

  margin: 0 auto;

  padding:
    0
    38px
    45px;
}

.feature-card {
  position: relative;

  min-height: 205px;

  padding: 22px;

  border:
    1px solid
    rgba(255, 255, 255, 0.45);

  border-radius: 18px;

  background:
    linear-gradient(
      145deg,
      #eef1f6,
      #e2e6ee
    );

  box-shadow:
    var(--shadow-light),
    var(--shadow-dark);

  transition:
    transform var(--transition),
    box-shadow var(--transition);
}

.feature-card:hover {
  transform: translateY(-4px);

  box-shadow:
    -12px -12px 25px rgba(255, 255, 255, 0.95),
    13px 14px 26px rgba(158, 168, 187, 0.64);
}

.feature-card__index {
  color: var(--accent);

  font-family:
    "SFMono-Regular",
    Consolas,
    monospace;

  font-size: 0.56rem;
  font-weight: 850;
}

.feature-card__icon {
  display: grid;
  place-items: center;

  width: 45px;
  height: 45px;

  margin-top: 18px;

  border-radius: 14px;

  background: var(--surface);

  box-shadow:
    var(--shadow-soft);
}

.feature-card__icon span {
  width: 18px;
  height: 18px;

  border: 4px solid var(--accent);

  border-radius: 50%;

  box-shadow:
    0 0 0 3px var(--accent-soft);
}

.feature-card:nth-child(2)
  .feature-card__icon span {
  width: 22px;
  height: 14px;

  border-width: 3px;

  border-radius: 999px;
}

.feature-card:nth-child(3)
  .feature-card__icon span {
  width: 20px;
  height: 20px;

  border: 0;
  border-radius: 6px;

  background:
    linear-gradient(
      145deg,
      var(--accent),
      #8b80e7
    );
}

.feature-card h2 {
  margin: 14px 0 7px;

  font-size: 0.95rem;
  letter-spacing: -0.03em;
}

.feature-card p {
  margin: 0;

  color: var(--muted);

  font-size: 0.65rem;
  line-height: 1.7;
}

.about {
  width: min(780px, calc(100% - 76px));

  margin: 15px auto;

  padding:
    45px
    20px;

  text-align: center;
}

.about__eyebrow {
  color: var(--accent);

  font-family:
    "SFMono-Regular",
    Consolas,
    monospace;

  font-size: 0.55rem;
  font-weight: 850;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.about h2 {
  margin: 9px 0 0;

  font-size: clamp(1.7rem, 4vw, 2.45rem);
  line-height: 1.08;
  letter-spacing: -0.05em;
}

.about p {
  max-width: 650px;

  margin: 13px auto 0;

  color: var(--muted);

  font-size: 0.71rem;
  line-height: 1.8;
}

.footer {
  width: min(1020px, calc(100% - 76px));

  display: flex;
  justify-content: space-between;

  gap: 18px;

  margin: 0 auto;

  padding:
    18px
    0;

  border-top:
    1px solid
    rgba(172, 180, 193, 0.32);

  color: #727d8f;

  font-family:
    "SFMono-Regular",
    Consolas,
    monospace;

  font-size: 0.51rem;
}

@media (max-width: 820px) {
  .navbar {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  .navbar__links,
  .navbar__cta {
    display: none;
  }

  .mobile-nav {
    position: relative;

    display: block;
  }

  .mobile-nav__trigger {
    display: grid;
    place-items: center;

    width: 44px;
    height: 44px;

    border-radius: 12px;

    background: var(--surface);

    box-shadow:
      var(--shadow-soft);

    cursor: pointer;

    transition:
      box-shadow var(--transition),
      transform var(--transition);
  }

  .mobile-nav__trigger:hover {
    transform: translateY(-1px);
  }

  .mobile-nav__icon {
    display: grid;
    gap: 4px;
  }

  .mobile-nav__icon span {
    display: block;

    width: 18px;
    height: 2px;

    border-radius: 999px;

    background: var(--accent);

    transition:
      transform var(--transition),
      opacity var(--transition);
  }

  .mobile-nav[open]
    .mobile-nav__icon
    span:nth-child(1) {
    transform:
      translateY(6px)
      rotate(45deg);
  }

  .mobile-nav[open]
    .mobile-nav__icon
    span:nth-child(2) {
    opacity: 0;
  }

  .mobile-nav[open]
    .mobile-nav__icon
    span:nth-child(3) {
    transform:
      translateY(-6px)
      rotate(-45deg);
  }

  .mobile-nav__panel {
    position: absolute;
    z-index: 30;

    top: calc(100% + 11px);
    right: 0;

    width: min(250px, 76vw);

    display: grid;
    gap: 6px;

    padding: 9px;

    border-radius: 15px;

    background:
      linear-gradient(
        145deg,
        #eff2f7,
        #e0e4eb
      );

    box-shadow:
      -8px -8px 19px rgba(255, 255, 255, 0.95),
      10px 11px 22px rgba(158, 168, 186, 0.62);

    animation:
      menu-enter 180ms ease-out both;
  }

  .mobile-nav__panel .navbar__link,
  .mobile-nav__panel .navbar__cta {
    display: inline-flex;

    width: 100%;

    justify-content: flex-start;
  }

  .mobile-nav__panel .navbar__cta {
    margin-top: 3px;
  }

  .hero {
    grid-template-columns: 1fr;

    min-height: auto;

    padding-top: 70px;
  }

  .hero__visual {
    min-height: 390px;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .feature-card {
    min-height: auto;
  }
}

@media (max-width: 600px) {
  .page {
    padding:
      12px
      11px
      28px;
  }

  .site-header {
    top: 8px;
  }

  .navbar {
    min-height: 65px;

    padding-left: 12px;

    border-radius: 16px;
  }

  .navbar__brand-icon {
    width: 34px;
    height: 34px;

    border-radius: 10px;
  }

  .navbar__brand-text {
    font-size: 0.82rem;
  }

  .hero {
    padding:
      66px
      9px
      33px;
  }

  .hero p {
    font-size: 0.77rem;
  }

  .hero__actions {
    width: 100%;
  }

  .hero__button {
    flex: 1;
  }

  .hero__visual {
    min-height: 325px;
  }

  .hero__disc--one {
    width: 245px;
    height: 245px;
  }

  .hero__disc--two {
    width: 190px;
    height: 190px;
  }

  .hero__cube {
    width: 120px;
    height: 120px;
  }

  .hero__cube span {
    font-size: 1.38rem;
  }

  .features {
    padding:
      0
      9px
      28px;
  }

  .about {
    width: calc(100% - 18px);

    padding:
      35px
      10px;
  }

  .footer {
    width: calc(100% - 18px);
  }
}

@media (max-width: 370px) {
  .navbar__brand-text {
    display: none;
  }

  .hero__button {
    padding: 0 11px;
  }
}

@keyframes menu-enter {
  from {
    opacity: 0;
    transform:
      translateY(-7px)
      scale(0.985);
  }

  to {
    opacity: 1;
    transform:
      translateY(0)
      scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }

  .navbar__cta:hover,
  .hero__button:hover,
  .feature-card:hover,
  .hero__visual:hover .hero__cube,
  .navbar__brand:hover .navbar__brand-icon {
    transform: none;
  }
}