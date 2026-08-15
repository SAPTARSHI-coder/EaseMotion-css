:root {
  --bg: #070814;
  --surface: rgba(18, 20, 40, 0.78);
  --surface-strong: rgba(23, 25, 48, 0.9);

  --text: #f5f4ff;
  --muted: #8587a4;

  --cyan: #4de9ff;
  --violet: #906cff;
  --pink: #ff59bb;
  --orange: #ff9b58;
  --lime: #9cff71;

  --border: rgba(255, 255, 255, 0.1);

  --shadow:
    0 32px 90px rgba(0, 0, 0, 0.48),
    0 8px 28px rgba(0, 0, 0, 0.25);

  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
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

  color: var(--text);

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  background:
    radial-gradient(
      circle at 12% 15%,
      rgba(77, 233, 255, 0.09),
      transparent 24%
    ),
    radial-gradient(
      circle at 88% 18%,
      rgba(144, 108, 255, 0.1),
      transparent 23%
    ),
    radial-gradient(
      circle at 52% 100%,
      rgba(255, 89, 187, 0.06),
      transparent 28%
    ),
    var(--bg);
}

body::before {
  content: "";

  position: fixed;
  inset: 0;

  pointer-events: none;

  background:
    linear-gradient(
      rgba(255, 255, 255, 0.015)
      1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.015)
      1px,
      transparent 1px
    );

  background-size:
    38px
    38px;

  mask-image:
    linear-gradient(
      to bottom,
      black,
      transparent 90%
    );
}

::selection {
  color: #080916;
  background: var(--cyan);
}

.page {
  min-height: 100vh;

  display: grid;
  place-items: center;

  padding:
    52px
    18px;
}

.spinner-demo {
  width: min(1080px, 100%);
}

.intro {
  max-width: 760px;

  margin:
    0
    auto
    34px;

  text-align: center;
}

.intro__eyebrow,
.showcase__label,
.showcase__status,
.caption__title,
.caption__sub,
.metric__label,
.note__code {
  font-family:
    "SFMono-Regular",
    Consolas,
    monospace;
}

.intro__eyebrow {
  color: var(--cyan);

  font-size: 0.52rem;
  font-weight: 850;
  letter-spacing: 0.13em;
}

.intro h1 {
  margin:
    10px
    0
    0;

  font-size: clamp(2.6rem, 7vw, 5.3rem);
  line-height: 0.92;
  letter-spacing: -0.08em;
}

.intro h1 span {
  display: block;

  color: transparent;

  -webkit-text-stroke:
    1px
    rgba(144, 108, 255, 0.82);
}

.intro p {
  max-width: 650px;

  margin:
    17px
    auto
    0;

  color: var(--muted);

  font-size: 0.76rem;
  line-height: 1.85;
}

.showcase {
  position: relative;

  min-height: 590px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding:
    21px
    24px
    22px;

  overflow: hidden;

  border:
    1px solid
    var(--border);

  border-radius: 25px;

  background:
    linear-gradient(
      140deg,
      rgba(27, 31, 59, 0.82),
      rgba(10, 12, 26, 0.88)
    );

  box-shadow:
    var(--shadow);

  isolation: isolate;
}

.showcase::before {
  content: "";

  position: absolute;
  z-index: -1;

  inset: 0;

  background:
    linear-gradient(
      130deg,
      rgba(255, 255, 255, 0.045),
      transparent 25%,
      transparent 72%,
      rgba(144, 108, 255, 0.03)
    );

  pointer-events: none;
}

.showcase::after {
  content: "";

  position: absolute;
  z-index: -1;

  width: 470px;
  height: 470px;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%, -50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(77, 233, 255, 0.055),
      transparent 68%
    );

  filter: blur(10px);

  pointer-events: none;
}

.ambient {
  position: absolute;
  z-index: -1;

  border-radius: 50%;

  filter: blur(18px);

  pointer-events: none;
}

.ambient--one {
  width: 220px;
  height: 220px;

  top: -110px;
  left: -70px;

  background:
    radial-gradient(
      circle,
      rgba(77, 233, 255, 0.13),
      transparent 68%
    );
}

.ambient--two {
  width: 240px;
  height: 240px;

  right: -120px;
  top: 35%;

  background:
    radial-gradient(
      circle,
      rgba(255, 89, 187, 0.09),
      transparent 68%
    );
}

.ambient--three {
  width: 270px;
  height: 270px;

  left: 20%;
  bottom: -180px;

  background:
    radial-gradient(
      circle,
      rgba(144, 108, 255, 0.1),
      transparent 68%
    );
}

.showcase__top {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.showcase__label {
  color: #727994;

  font-size: 0.48rem;
  font-weight: 850;
  letter-spacing: 0.12em;
}

.showcase__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  color: #69d799;

  font-size: 0.45rem;
  font-weight: 850;
}

.showcase__status i {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #69d799;

  box-shadow:
    0 0 10px
    rgba(105, 215, 153, 0.55);
}

.spinner-stage {
  position: relative;

  min-height: 415px;

  display: grid;
  place-items: center;
}

.spinner-halo {
  position: absolute;

  width: 270px;
  height: 270px;

  border-radius: 50%;

  border:
    1px
    solid
    rgba(77, 233, 255, 0.08);

  box-shadow:
    0 0 70px
    rgba(77, 233, 255, 0.06);

  animation:
    halo-breathe
    4.4s
    ease-in-out
    infinite;
}

.spinner-halo::before,
.spinner-halo::after {
  content: "";

  position: absolute;
  inset: 19px;

  border-radius: 50%;

  border:
    1px
    dashed
    rgba(144, 108, 255, 0.15);
}

.spinner-halo::after {
  inset: 42px;

  border:
    1px
    solid
    rgba(255, 89, 187, 0.1);
}

.spinner {
  position: relative;

  width: 168px;
  height: 168px;

  filter:
    drop-shadow(
      0 0 22px
      rgba(77, 233, 255, 0.14)
    );

  animation:
    spinner-rotate
    4.8s
    linear
    infinite;
}

.spinner:hover {
  animation-duration: 8s;
}

.spinner__orb {
  position: absolute;

  width: 84px;
  height: 84px;

  border-radius: 36% 64% 52% 48% / 52% 38% 62% 48%;

  background:
    linear-gradient(
      145deg,
      var(--cyan),
      var(--violet) 52%,
      var(--pink)
    );

  filter:
    blur(0.2px);

  opacity: 0.92;

  mix-blend-mode: screen;

  animation:
    morph-one
    3.6s
    ease-in-out
    infinite;
}

.spinner__orb--one {
  top: 3px;
  left: 42px;

  transform:
    rotate(18deg);
}

.spinner__orb--two {
  right: 3px;
  bottom: 36px;

  opacity: 0.68;

  background:
    linear-gradient(
      145deg,
      var(--violet),
      var(--pink),
      var(--orange)
    );

  animation:
    morph-two
    4s
    ease-in-out
    infinite;
}

.spinner__orb--three {
  left: 10px;
  bottom: 10px;

  opacity: 0.7;

  background:
    linear-gradient(
      145deg,
      var(--pink),
      var(--orange),
      var(--cyan)
    );

  animation:
    morph-three
    4.3s
    ease-in-out
    infinite;
}

.spinner::before {
  content: "";

  position: absolute;

  inset: 21px;

  border-radius: 50%;

  background:
    rgba(8, 10, 22, 0.78);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  box-shadow:
    0 0 25px
    rgba(144, 108, 255, 0.14),
    inset 0 0 22px
    rgba(255, 255, 255, 0.025);

  z-index: 3;
}

.spinner__core {
  position: absolute;
  z-index: 4;

  left: 50%;
  top: 50%;

  width: 40px;
  height: 40px;

  transform:
    translate(-50%, -50%);

  border-radius: 12px;

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.11),
      rgba(77, 233, 255, 0.05)
    );

  border:
    1px
    solid
    rgba(255, 255, 255, 0.13);

  box-shadow:
    inset 0 1px 0
    rgba(255, 255, 255, 0.09),
    0 0 23px
    rgba(77, 233, 255, 0.08);
}

.spinner__core span {
  position: absolute;

  width: 11px;
  height: 11px;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%, -50%);

  border-radius: 50%;

  background:
    var(--cyan);

  box-shadow:
    0 0 14px
    rgba(77, 233, 255, 0.72);

  animation:
    core-pulse
    1.7s
    ease-in-out
    infinite;
}

.spinner-stage__caption {
  position: absolute;

  bottom: 15px;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  transform:
    translateX(-50%);
}

.caption__title {
  color:
    rgba(223, 233, 255, 0.9);

  font-size: 0.55rem;
  font-weight: 850;
  letter-spacing: 0.14em;
}

.caption__sub {
  color: #666d84;

  font-size: 0.46rem;
}

.metrics {
  position: relative;
  z-index: 2;

  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 8px;

  max-width: 590px;

  margin:
    0
    auto;

  width: 100%;
}

.metric {
  padding:
    12px
    14px;

  border:
    1px
    solid
    rgba(255, 255, 255, 0.055);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.025);

  transition:
    transform 300ms var(--ease),
    border-color 300ms var(--ease),
    background 300ms var(--ease);
}

.metric:hover {
  transform:
    translateY(-3px);

  border-color:
    rgba(77, 233, 255, 0.14);

  background:
    rgba(77, 233, 255, 0.035);
}

.metric__value,
.metric__label {
  display: block;
}

.metric__value {
  color: #ecf2ff;

  font-size: 1rem;
  font-weight: 850;
  letter-spacing: -0.03em;
}

.metric__label {
  margin-top: 4px;

  color: #606980;

  font-size: 0.42rem;
  font-weight: 850;
  letter-spacing: 0.07em;
}

.variants {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 12px;

  margin-top: 13px;
}

.variant {
  display: flex;
  align-items: center;
  gap: 13px;

  min-height: 88px;

  padding:
    14px
    15px;

  border:
    1px
    solid
    rgba(255, 255, 255, 0.07);

  border-radius: 14px;

  background:
    rgba(15, 18, 34, 0.64);

  box-shadow:
    0 14px 35px
    rgba(0, 0, 0, 0.16);

  transition:
    transform 300ms var(--ease),
    border-color 300ms var(--ease);
}

.variant:hover {
  transform:
    translateY(-4px);
}

.variant--aurora:hover {
  border-color:
    rgba(77, 233, 255, 0.2);
}

.variant--sunset:hover {
  border-color:
    rgba(255, 155, 88, 0.2);
}

.variant--forest:hover {
  border-color:
    rgba(156, 255, 113, 0.2);
}

.variant__spinner {
  position: relative;

  flex: 0 0 auto;

  width: 44px;
  height: 44px;

  animation:
    spinner-rotate
    4s
    linear
    infinite;
}

.variant__spinner span {
  position: absolute;

  width: 24px;
  height: 24px;

  border-radius: 50%;

  opacity: 0.8;
}

.variant__spinner span:nth-child(1) {
  top: 2px;
  left: 10px;

  background:
    linear-gradient(
      135deg,
      var(--cyan),
      var(--violet)
    );

  animation:
    variant-morph
    3s
    ease-in-out
    infinite;
}

.variant__spinner span:nth-child(2) {
  right: 2px;
  bottom: 6px;

  background:
    linear-gradient(
      135deg,
      var(--violet),
      var(--pink)
    );

  animation:
    variant-morph
    3.3s
    ease-in-out
    infinite;
}

.variant__spinner span:nth-child(3) {
  left: 2px;
  bottom: 3px;

  background:
    linear-gradient(
      135deg,
      var(--pink),
      var(--orange)
    );

  animation:
    variant-morph
    3.6s
    ease-in-out
    infinite;
}

.variant__spinner b {
  position: absolute;

  inset: 12px;

  border-radius: 50%;

  background:
    #101328;

  border:
    1px
    solid
    rgba(255, 255, 255, 0.08);

  z-index: 2;
}

.variant--sunset .variant__spinner span:nth-child(1) {
  background:
    linear-gradient(
      135deg,
      #ffcf72,
      var(--orange)
    );
}

.variant--sunset .variant__spinner span:nth-child(2) {
  background:
    linear-gradient(
      135deg,
      var(--orange),
      var(--pink)
    );
}

.variant--sunset .variant__spinner span:nth-child(3) {
  background:
    linear-gradient(
      135deg,
      var(--pink),
      #ff6d76
    );
}

.variant--forest .variant__spinner span:nth-child(1) {
  background:
    linear-gradient(
      135deg,
      var(--lime),
      #4de6a1
    );
}

.variant--forest .variant__spinner span:nth-child(2) {
  background:
    linear-gradient(
      135deg,
      #4de6a1,
      var(--cyan)
    );
}

.variant--forest .variant__spinner span:nth-child(3) {
  background:
    linear-gradient(
      135deg,
      var(--cyan),
      var(--lime)
    );
}

.variant strong {
  display: block;

  color: #e2e9f7;

  font-size: 0.61rem;
}

.variant p {
  max-width: 210px;

  margin:
    4px
    0
    0;

  color: #6f7890;

  font-size: 0.49rem;
  line-height: 1.6;
}

.note {
  display: flex;
  align-items: center;
  gap: 10px;

  margin-top: 15px;

  padding:
    11px
    14px;

  border:
    1px
    solid
    rgba(255, 255, 255, 0.055);

  border-radius: 10px;

  background:
    rgba(14, 17, 31, 0.64);
}

.note__mark {
  color: var(--violet);

  font-size: 0.8rem;
}

.note p {
  flex: 1;

  margin: 0;

  color: #697289;

  font-size: 0.5rem;
  line-height: 1.5;
}

.note__code {
  color: #606a80;

  font-size: 0.42rem;
  font-weight: 850;
  letter-spacing: 0.06em;
}

@keyframes spinner-rotate {
  to {
    transform:
      rotate(360deg);
  }
}

@keyframes morph-one {
  0%,
  100% {
    border-radius:
      36%
      64%
      52%
      48%
      /
      52%
      38%
      62%
      48%;

    transform:
      rotate(18deg)
      scale(1);
  }

  50% {
    border-radius:
      58%
      42%
      40%
      60%
      /
      45%
      60%
      40%
      55%;

    transform:
      rotate(48deg)
      scale(1.1);
  }
}

@keyframes morph-two {
  0%,
  100% {
    border-radius:
      60%
      40%
      45%
      55%
      /
      48%
      57%
      43%
      52%;

    transform:
      rotate(-22deg)
      scale(0.95);
  }

  50% {
    border-radius:
      38%
      62%
      58%
      42%
      /
      60%
      42%
      58%
      40%;

    transform:
      rotate(32deg)
      scale(1.08);
  }
}

@keyframes morph-three {
  0%,
  100% {
    border-radius:
      48%
      52%
      60%
      40%
      /
      42%
      55%
      45%
      58%;

    transform:
      rotate(8deg)
      scale(0.98);
  }

  50% {
    border-radius:
      62%
      38%
      43%
      57%
      /
      54%
      44%
      56%
      46%;

    transform:
      rotate(-35deg)
      scale(1.08);
  }
}

@keyframes core-pulse {
  0%,
  100% {
    transform:
      translate(-50%, -50%)
      scale(0.72);

    opacity: 0.75;
  }

  50% {
    transform:
      translate(-50%, -50%)
      scale(1.18);

    opacity: 1;
  }
}

@keyframes halo-breathe {
  0%,
  100% {
    transform:
      scale(0.96);

    opacity: 0.7;
  }

  50% {
    transform:
      scale(1.04);

    opacity: 1;
  }
}

@keyframes variant-morph {
  0%,
  100% {
    border-radius:
      50%
      38%
      54%
      46%;
  }

  50% {
    border-radius:
      35%
      55%
      42%
      58%;
  }
}

@media (max-width: 760px) {
  .page {
    padding:
      38px
      13px;
  }

  .showcase {
    min-height: 550px;

    padding:
      19px
      18px
      19px;
  }

  .spinner-stage {
    min-height: 380px;
  }

  .spinner-halo {
    width: 235px;
    height: 235px;
  }

  .variants {
    grid-template-columns: 1fr;
  }

  .variant p {
    max-width: none;
  }
}

@media (max-width: 520px) {
  .intro h1 {
    font-size: 2.55rem;
  }

  .intro p {
    font-size: 0.67rem;
  }

  .showcase {
    min-height: 530px;

    border-radius: 20px;
  }

  .spinner-stage {
    min-height: 355px;
  }

  .spinner {
    width: 145px;
    height: 145px;
  }

  .spinner__orb {
    width: 72px;
    height: 72px;
  }

  .spinner::before {
    inset: 18px;
  }

  .spinner__core {
    width: 35px;
    height: 35px;
  }

  .spinner-halo {
    width: 205px;
    height: 205px;
  }

  .metrics {
    gap: 6px;
  }

  .metric {
    padding:
      10px
      8px;
  }

  .metric__value {
    font-size: 0.88rem;
  }

  .metric__label {
    font-size: 0.36rem;
  }

  .note {
    align-items: flex-start;
  }
}

@media (max-width: 390px) {
  .spinner-stage {
    min-height: 325px;
  }

  .spinner {
    width: 125px;
    height: 125px;
  }

  .spinner__orb {
    width: 62px;
    height: 62px;
  }

  .spinner-halo {
    width: 180px;
    height: 180px;
  }

  .caption__title {
    font-size: 0.48rem;
  }

  .caption__sub {
    font-size: 0.4rem;
  }

  .metrics {
    grid-template-columns: 1fr;
    max-width: 180px;
  }

  .metric {
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}