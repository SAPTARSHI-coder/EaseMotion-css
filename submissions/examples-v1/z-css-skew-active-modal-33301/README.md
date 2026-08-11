:root{

--duration:.8s;

--ease:

cubic-bezier(
0.22,
1,
0.36,
1);

--skew:18deg;

--primary:

#7c3aed;

--secondary:

#2563eb;

}

*{

margin:0;

padding:0;

box-sizing:border-box;

}

body{

font-family:

Arial,sans-serif;

background:

linear-gradient(

135deg,

#070b16,

#101827

);

min-height:100vh;

overflow:hidden;

color:white;

}

.hero{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

text-align:center;

padding:40px;

}

.hero-content{

max-width:680px;

}

.badge{

padding:10px 18px;

border-radius:30px;

background:

rgba(
255,
255,
255,
0.08);

display:inline-block;

margin-bottom:25px;

}

h1{

font-size:62px;

margin-bottom:20px;

}

p{

opacity:.85;

line-height:1.8;

margin-bottom:30px;

}

.btn{

display:inline-flex;

padding:18px 34px;

border-radius:16px;

cursor:pointer;

font-weight:700;

background:

linear-gradient(

135deg,

var(--primary),

var(--secondary)

);

transition:.4s;

}

.btn:hover{

transform:

translateY(-5px);

}

#modal-toggle{

display:none;

}

.overlay{

position:fixed;

inset:0;

display:flex;

justify-content:center;

align-items:center;

background:

rgba(
0,
0,
0,
0.75);

opacity:0;

visibility:hidden;

transition:.4s;

}

.modal{

width:420px;

padding:45px;

border-radius:30px;

background:

rgba(
255,
255,
255,
0.05);

backdrop-filter:

blur(20px);

text-align:center;

position:relative;

transform:

skewY(
var(--skew))

scale(.75);

opacity:0;

transition:

var(--duration)

var(--ease);

box-shadow:

0 20px 80px
rgba(
0,
0,
0,
0.4);

}

.icon{

width:90px;

height:90px;

margin:auto;

border-radius:50%;

display:flex;

justify-content:center;

align-items:center;

font-size:34px;

margin-bottom:25px;

background:

linear-gradient(

135deg,

var(--primary),

var(--secondary)

);

}

.modal h2{

font-size:34px;

margin-bottom:15px;

}

.modal a{

display:inline-block;

padding:16px 28px;

border-radius:14px;

background:

linear-gradient(

135deg,

var(--primary),

var(--secondary)

);

text-decoration:none;

color:white;

margin-top:10px;

}

.close{

position:absolute;

top:18px;

right:22px;

font-size:22px;

cursor:pointer;

}

#modal-toggle:checked
~ .overlay{

opacity:1;

visibility:visible;

}

#modal-toggle:checked
~ .overlay
.modal{

transform:

skewY(0deg)

scale(1);

opacity:1;

}

@media(max-width:768px){

.modal{

width:92%;

padding:35px;

}

h1{

font-size:46px;

}

}