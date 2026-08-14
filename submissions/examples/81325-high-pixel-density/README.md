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

main{width:min(100%,600px);text-align:center}

.card{
  padding:2rem;
  background:#fff;
  border:2px solid #cbd5e1;
  border-radius:14px;
  box-shadow:0 10px 25px #0001
}

@media (min-resolution:192dpi),(min-resolution:2dppx){
  .card{
    border-color:#4f46e5;
    box-shadow:0 0 0 3px #4f46e522
  }
}

@media(max-width:500px){
  .card{padding:1.2rem}
}