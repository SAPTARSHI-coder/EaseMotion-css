:root{

--bg:#09090f;
--card:#12131f;

--cyan:#00f5ff;
--pink:#ff00c8;

--duration:.55s;
--easing:cubic-bezier(.22,.61,.36,1);
--scale:1;

}

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{

font-family:Arial,Helvetica,sans-serif;

background:var(--bg);

display:flex;
justify-content:center;
align-items:center;

min-height:100vh;

}

.wrapper{

display:flex;
justify-content:center;
align-items:center;

}

.popover{

position:relative;

}

.trigger{

padding:15px 34px;

background:transparent;

border:2px solid var(--cyan);

color:var(--cyan);

font-size:17px;

font-weight:bold;

cursor:pointer;

letter-spacing:1px;

text-shadow:0 0 10px var(--cyan);

box-shadow:
0 0 12px var(--cyan),
inset 0 0 10px var(--cyan);

transition:.35s;

}

.trigger:hover{

background:rgba(0,245,255,.08);

}

.card{

position:absolute;

left:50%;
top:75px;

width:290px;

padding:22px;

transform-origin:top center;

transform:
translateX(-50%)
rotateX(-75deg)
scale(.9);

opacity:0;

visibility:hidden;

background:var(--card);

border:2px solid var(--pink);

border-radius:14px;

box-shadow:
0 0 15px var(--pink),
0 0 35px rgba(255,0,200,.25);

text-align:center;

transition:
transform var(--duration) var(--easing),
opacity var(--duration);

}

.popover:hover .card,
.popover:focus-within .card{

opacity:1;

visibility:visible;

transform:
translateX(-50%)
rotateX(0deg)
scale(var(--scale));

animation:swing .75s ease;

}

.card h3{

color:var(--cyan);

margin-bottom:12px;

text-shadow:0 0 8px var(--cyan);

}

.card p{

color:#d4d4d8;

margin-bottom:20px;

}

.card a{

display:inline-block;

padding:10px 20px;

text-decoration:none;

background:var(--pink);

color:white;

border-radius:8px;

box-shadow:0 0 12px var(--pink);

}

@keyframes swing{

20%{transform:translateX(-50%) rotate(5deg);}
40%{transform:translateX(-50%) rotate(-4deg);}
60%{transform:translateX(-50%) rotate(2deg);}
80%{transform:translateX(-50%) rotate(-1deg);}
100%{transform:translateX(-50%) rotate(0);}
}

@media(max-width:600px){

.card{

width:230px;

}

}
