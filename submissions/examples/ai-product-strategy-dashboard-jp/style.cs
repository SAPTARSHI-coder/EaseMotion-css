*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#0b1020;
color:white;
padding:30px;
overflow-x:hidden;
min-height:100vh;
}

.blob{
position:fixed;
border-radius:50%;
filter:blur(120px);
z-index:-1;
}

.blob1{
width:350px;
height:350px;
background:#6366f1;
top:-80px;
left:-80px;
opacity:.25;
}

.blob2{
width:350px;
height:350px;
background:#f43f5e;
bottom:-100px;
right:-100px;
opacity:.20;
}

.glass{
background:rgba(255,255,255,.08);
backdrop-filter:blur(20px);
border:1px solid rgba(255,255,255,.15);
box-shadow:0 8px 25px rgba(0,0,0,.3);
border-radius:20px;
}

.hero{
text-align:center;
padding:50px 20px;
}

.hero h1{
font-size:3rem;
background:linear-gradient(90deg,#818cf8,#fb7185);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
margin-bottom:20px;
}

.hero p{
max-width:750px;
margin:auto;
line-height:1.8;
opacity:.85;
}

.hero-buttons{
margin-top:25px;
display:flex;
justify-content:center;
gap:15px;
flex-wrap:wrap;
}

button{
padding:14px 26px;
border:none;
border-radius:12px;
cursor:pointer;
font-weight:600;
background:linear-gradient(90deg,#818cf8,#fb7185);
color:white;
transition:.3s;
}

button:hover{
transform:translateY(-5px);
}

.secondary{
background:rgba(255,255,255,.1);
}

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
margin-top:30px;
}

.card{
padding:25px;
transition:.3s;
}

.card:hover{
transform:translateY(-8px);
}

.card span{
display:block;
font-size:2rem;
margin:12px 0;
font-weight:700;
color:#fb7185;
}

.dashboard{
display:grid;
grid-template-columns:2fr 1fr;
gap:20px;
margin-top:30px;
}

.roadmap,
.okr-panel{
padding:25px;
}

.roadmap-item{
margin-top:20px;
}

.progress{
height:10px;
background:rgba(255,255,255,.1);
border-radius:20px;
overflow:hidden;
margin-top:10px;
}

.progress div{
height:100%;
background:linear-gradient(90deg,#818cf8,#fb7185);
}

.okr-card{
padding:15px;
background:rgba(255,255,255,.05);
margin-top:15px;
border-radius:12px;
}

.okr-card span{
display:block;
margin-top:10px;
font-size:1.4rem;
color:#818cf8;
}

.analytics{
padding:25px;
margin-top:30px;
}

.analytics-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
margin-top:20px;
}

.analytic-card{
padding:20px;
background:rgba(255,255,255,.05);
border-radius:15px;
transition:.3s;
}

.analytic-card:hover{
transform:translateY(-5px);
}

.timeline{
padding:25px;
margin-top:30px;
}

.timeline-item{
display:flex;
gap:20px;
margin-top:20px;
}

.dot{
width:14px;
height:14px;
background:#fb7185;
border-radius:50%;
margin-top:6px;
box-shadow:0 0 12px #fb7185;
}

@media(max-width:900px){

.dashboard{
grid-template-columns:1fr;
}

.hero h1{
font-size:2.2rem;
}

}