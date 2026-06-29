const vals = { ring1: 72, ring2: 45, ring3: 90 };
const circ = 2 * Math.PI * 56;

Object.entries(vals).forEach(([id, pct]) => {
  const el = document.getElementById(id);
  const offset = circ - (pct / 100) * circ;
  requestAnimationFrame(() => el.style.strokeDashoffset = offset);
});
