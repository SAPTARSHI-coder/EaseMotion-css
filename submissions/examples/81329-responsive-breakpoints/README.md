*{box-sizing:border-box}

body{
  margin:0;
  min-height:100vh;
  display:grid;
  place-items:center;
  padding:1rem;
  background:#eef2f7;
  font-family:system-ui,sans-serif
}

main{width:min(100%,700px);text-align:center}

.box{
  padding:2rem;
  border-radius:14px;
  background:#4f46e5;
  color:#fff;
  font-weight:700;
  transition:.2s
}

@media(min-width:640px){.box{background:#059669}}
@media(min-width:768px){.box{background:#d97706}}
@media(min-width:1024px){.box{background:#dc2626}}
@media(min-width:1280px){.box{background:#7c3aed}}

@media(prefers-reduced-motion:reduce){
  .box{transition:none}
}