* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: #f3f4f6;
}

.progress-bar {
  width: min(100%, 400px);
  height: 16px;

  overflow: hidden;
  border-radius: 999px;

  background: #d1d5db;
}

.progress-fill {
  position: relative;

  width: 70%;
  height: 100%;

  background: #2563eb;
}

.progress-fill::after {
  content: "";
  position: absolute;
  inset: 0;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.6),
    transparent
  );

  transform: translateX(-100%);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  to {
    transform: translateX(100%);
  }
}