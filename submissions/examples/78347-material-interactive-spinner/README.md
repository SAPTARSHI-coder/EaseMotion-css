.variants {
  width: min(760px, 100%);

  display: grid;
  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 14px;

  animation:
    variants-in 850ms var(--ease) 220ms both;
}

.variant {
  min-height: 88px;

  display: flex;
  align-items: center;
  gap: 15px;

  padding:
    15px
    17px;

  border:
    1px solid var(--border);

  border-radius: 18px;

  background:
    rgba(255, 255, 255, 0.72);

  box-shadow: var(--shadow-soft);

  transition:
    transform 230ms var(--ease),
    box-shadow 230ms ease,
    border-color 230ms ease;
}

.variant:hover {
  transform: translateY(-5px);

  box-shadow:
    0 15px 30px
    rgba(35, 30, 42, 0.11);

  border-color:
    rgba(103, 80, 164, 0.2);
}

.variant > div:last-child {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.variant strong {
  font-size: 11px;
  font-weight: 800;
}

.variant span {
  color: var(--muted);

  font-size: 8px;
}

.mini-spinner {
  position: relative;

  flex: 0 0 auto;

  border-radius: 50%;
}

.mini-spinner.small {
  width: 34px;
  height: 34px;
}

.mini-spinner.medium {
  width: 44px;
  height: 44px;
}

.mini-spinner.large {
  width: 54px;
  height: 54px;
}

.mini-track,
.mini-progress {
  position: absolute;
  inset: 0;

  border:
    4px solid transparent;

  border-radius: 50%;
}

.mini-track {
  border-color: var(--track);
}

.mini-progress {
  border-top-color: var(--primary);
  border-right-color: var(--primary);

  animation:
    mini-spin 1s linear infinite;
}

.mini-spinner.small .mini-track,
.mini-spinner.small .mini-progress {
  border-width: 3px;
}

.mini-spinner.large .mini-track,
.mini-spinner.large .mini-progress {
  border-width: 5px;
}

@keyframes spin-progress {
  0% {
    transform:
      rotate(0deg);
  }

  45% {
    transform:
      rotate(200deg);
  }

  75% {
    transform:
      rotate(285deg);
  }

  100% {
    transform:
      rotate(360deg);
  }
}

@keyframes mini-spin {
  from {
    transform:
      rotate(0deg);
  }

  to {
    transform:
      rotate(360deg);
  }
}

@keyframes orbit {
  from {
    transform:
      rotate(0deg);
  }

  to {
    transform:
      rotate(360deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform:
      scale(1);
  }

  50% {
    transform:
      scale(1.28);
  }
}

@keyframes intro-in {
  from {
    opacity: 0;
    transform:
      translateY(18px);
  }

  to {
    opacity: 1;
    transform:
      translateY(0);
  }
}

@keyframes card-in {
  from {
    opacity: 0;
    transform:
      translateY(25px)
      scale(0.97);
  }

  to {
    opacity: 1;
    transform:
      translateY(0)
      scale(1);
  }
}

@keyframes variants-in {
  from {
    opacity: 0;
    transform:
      translateY(18px);
  }

  to {
    opacity: 1;
    transform:
      translateY(0);
  }
}

@media (max-width: 720px) {
  .demo {
    padding:
      40px
      16px
      55px;
  }

  .spinner-card {
    padding:
      27px
      20px
      23px;

    border-radius: 24px;
  }

  .variants {
    grid-template-columns: 1fr;
  }

  .variant {
    width: 100%;
  }
}

@media (max-width: 460px) {
  .intro h1 {
    font-size:
      clamp(38px, 12vw, 54px);
  }

  .spinner-area {
    width: 190px;
    height: 190px;
  }

  .spinner {
    width: 125px;
    height: 125px;
  }

  .spinner-track,
  .spinner-progress {
    border-width: 9px;
  }

  .spinner-center {
    inset: 24px;
  }

  .progress-ring {
    width: 170px;
    height: 170px;
  }

  .actions {
    flex-direction: column;
  }

  .action-button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}