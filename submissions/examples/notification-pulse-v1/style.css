* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: sans-serif;
}

.avatar {
  position: relative;
  width: 80px;
  height: 80px;
}

.avatar img {
  width: 100%;
  border-radius: 50%;
}

.notification-badge {
  position: absolute;
  top: 4px;
  right: 4px;

  width: 14px;
  height: 14px;

  border-radius: 50%;
  background: #ef4444;
}

.notification-badge::after {
  content: "";
  position: absolute;
  inset: 0;

  border-radius: 50%;
  background: inherit;

  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }

  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .notification-badge::after {
    animation: none;
  }
}