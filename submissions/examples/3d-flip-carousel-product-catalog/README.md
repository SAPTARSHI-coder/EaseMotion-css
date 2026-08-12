*{
margin:0;
padding:0;
box-sizing:border-box;
}


:root{

--primary:#6366f1;
--secondary:#06b6d4;
--background:#0f172a;
--card:#1e293b;
--text:#ffffff;

--radius:24px;

--transition:.7s ease;

}


body{

min-height:100vh;

font-family:Arial, Helvetica, sans-serif;

background:
linear-gradient(
135deg,
#0f172a,
#1e293b
);

color:var(--text);

padding:70px 8%;

}


.catalog h1{

text-align:center;

font-size:3rem;

margin-bottom:60px;

}


.carousel{

display:grid;

grid-template-columns:
repeat(auto-fit,minmax(280px,1fr));

gap:40px;

perspective:1200px;

}



.card{

height:420px;

cursor:pointer;

perspective:1000px;

}



.card-inner{

height:100%;

width:100%;

position:relative;

transform-style:preserve-3d;

transition:transform var(--transition);

}



.card:hover .card-inner{

transform:rotateY(180deg);

}



.card-front,
.card-back{

position:absolute;

height:100%;

width:100%;

border-radius:var(--radius);

overflow:hidden;

backface-visibility:hidden;

box-shadow:
0 20px 50px rgba(0,0,0,.4);

}



.card-front{

background:var(--card);

text-align:center;

}



.card-front img{

width:100%;

height:280px;

object-fit:cover;

}



.card-front h2{

margin-top:25px;

font-size:1.8rem;

}



.card-front p{

margin-top:10px;

color:#cbd5e1;

}



.card-back{

background:

linear-gradient(
135deg,
#6366f1,
#06b6d4
);

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

padding:30px;

text-align:center;

transform:rotateY(180deg);

}



.card-back h2{

font-size:2rem;

margin-bottom:20px;

}



.card-back p{

line-height:1.7;

margin-bottom:25px;

}



.price{

font-size:2.2rem;

font-weight:800;

margin-bottom:25px;

}



button{

border:none;

padding:14px 35px;

border-radius:50px;

background:white;

color:#111827;

font-weight:bold;

cursor:pointer;

transition:.3s ease;

}



button:hover{

transform:translateY(-4px);

}



/* Floating 3D Effect */

.card:hover{

animation:
floatCard 1.5s infinite alternate;

}


@keyframes floatCard{

from{

transform:translateY(0);

}

to{

transform:translateY(-12px);

}

}



/* Responsive */

@media(max-width:768px){

body{

padding:40px 5%;

}


.catalog h1{

font-size:2rem;

}


.card{

height:380px;

}

}



/* Accessibility */

@media(prefers-reduced-motion:reduce){

*{

animation:none !important;

transition:none !important;

}


.card:hover .card-inner{

transform:none;

}

}

🎨 CSS Concepts Used
3D Perspective
perspective:1200px;

Creates depth for the flip effect.

Preserve 3D
transform-style:preserve-3d;

Keeps child elements positioned in 3D space.

Flip Animation
transform:rotateY(180deg);

Creates the card rotation effect.

🚀 Usage
Open demo.html in any modern browser.
Hover over product cards to see the 3D flip animation.
Replace product images and details with your own catalog data.
Customize CSS variables according to your theme.
🎨 Custom Properties
:root{

--primary:#6366f1;
--secondary:#06b6d4;
--background:#0f172a;
--card:#1e293b;
--text:#ffffff;

--radius:24px;

--transition:.7s ease;

}
📱 Responsive Support

The layout adapts automatically for:

Desktop
Tablets
Mobile devices

Using CSS Grid and media queries.

♿ Accessibility

Includes:

Semantic HTML structure
Reduced motion support
Disabled animations for users who prefer reduced motion

Implemented with:

@media(prefers-reduced-motion:reduce)
🛠 Technologies
HTML5
CSS3
CSS Transforms
CSS Animations
CSS Variables
📄 License

Created for the EaseMotion CSS repository following contribution guidelines.