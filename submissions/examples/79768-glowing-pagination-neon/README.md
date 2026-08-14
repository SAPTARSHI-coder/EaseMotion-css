*{box-sizing:border-box}

body{
  margin:0;
  min-height:100vh;
  display:grid;
  place-items:center;
  padding:1rem;
  background:#070b16;
  color:#fff;
  font-family:system-ui,sans-serif
}

main{text-align:center}

main>span{
  color:#00f5ff;
  font-size:.7rem;
  font-weight:800;
  letter-spacing:.12em;
  text-transform:uppercase
}

h1{
  margin:.5rem 0 2rem;
  font-size:clamp(2rem,6vw,4rem)
}

nav{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:.55rem
}

nav a{
  min-width:2.5rem;
  height:2.5rem;
  display:grid;
  place-items:center;
  padding:.5rem;
  color:#aab3c5;
  background:#111827;
  border:1px solid #25304a;
  border-radius:.6rem;
  text-decoration:none;
  font-size:.75rem;
  font-weight:700;
  transition:.2s
}

nav a:hover,
nav a:focus-visible,
nav .active{
  color:#00f5ff;
  border-color:#00f5ff;
  box-shadow:0 0 14px rgba(0,245,255,.45);
  transform:translateY(-2px)
}

nav a:focus-visible{
  outline:2px solid #00f5ff;
  outline-offset:3px
}

@media(max-width:420px){
  nav a{min-width:2.2rem;height:2.2rem}
}