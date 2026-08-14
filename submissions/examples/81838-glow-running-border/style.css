*{box-sizing:border-box}

body{
  margin:0;
  min-height:100vh;
  display:grid;
  place-items:center;
  background:#0f172a;
  font:700 1.1rem system-ui
}

.glow-border{
  padding:2rem 3rem;
  color:#fff;
  border:2px solid transparent;
  border-radius:14px;
  background:
    linear-gradient(#111827,#111827) padding-box,
    linear-gradient(90deg,#06b6d4,#8b5cf6,#ec4899,#06b6d4) border-box;
  background-size:100% 100%,300% 100%;
  animation:ease-glow-running-border var(--ease-duration,2s) var(--ease-timing,linear) infinite;
}

@keyframes ease-glow-running-border{
  from{background-position:0 0,0 0}
  to{background-position:0 0,300% 0}
}

@media(prefers-reduced-motion:reduce){
  .glow-border{animation:none}
}