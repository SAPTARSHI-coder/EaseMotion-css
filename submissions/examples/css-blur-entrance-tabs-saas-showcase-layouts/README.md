* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


:root {

    --bg: #020617;
    --primary: #38bdf8;
    --secondary: #8b5cf6;
    --accent: #ec4899;
    --text: #f8fafc;
    --muted: #94a3b8;

}


body {

    min-height:100vh;

    font-family:
    Inter,
    Arial,
    sans-serif;


    background:

    radial-gradient(
        circle at top,
        rgba(56,189,248,.25),
        transparent 45%
    ),

    var(--bg);


    color:var(--text);

}



.container {

    width:90%;

    max-width:1100px;

    margin:auto;

    padding:80px 0;

}



.hero {

    text-align:center;

}



.badge {

    display:inline-block;


    padding:8px 20px;


    border-radius:30px;


    background:

    rgba(56,189,248,.15);


    color:var(--primary);

}



.hero h1 {

    margin-top:25px;


    font-size:

    clamp(2.5rem,6vw,4rem);


    background:

    linear-gradient(
        90deg,
        var(--primary),
        var(--secondary),
        var(--accent)
    );


    -webkit-background-clip:text;

    color:transparent;

}



.hero p {

    margin:20px auto;

    color:var(--muted);

}



/* Tabs Layout */

.tabs {

    margin-top:60px;


    display:grid;

    grid-template-columns:

    repeat(3,1fr);


    gap:25px;

}



.tab {

    position:relative;


    padding:35px 25px;


    border-radius:25px;


    background:

    rgba(255,255,255,.08);


    backdrop-filter:blur(15px);


    border:

    1px solid rgba(255,255,255,.15);


    opacity:0;


    transform:

    translateY(40px);


    filter:

    blur(15px);


    animation:

    blurEntrance .8s ease forwards;


    transition:

    transform .35s ease,

    border-color .35s ease;

}



/* Stagger Animation */

.tab:nth-child(1) {

    animation-delay:.1s;

}


.tab:nth-child(2) {

    animation-delay:.25s;

}


.tab:nth-child(3) {

    animation-delay:.4s;

}



@keyframes blurEntrance {

    from {

        opacity:0;

        transform:

        translateY(40px);

        filter:

        blur(15px);

    }


    to {

        opacity:1;

        transform:

        translateY(0);

        filter:

        blur(0);

    }

}



.tab:hover {

    transform:

    translateY(-10px);


    border-color:

    var(--primary);

}



.tab h2 {

    margin-bottom:15px;

}



.tab p {

    color:var(--muted);

}



/* Active Tab */

.tab.active {

    border-color:

    var(--secondary);


    box-shadow:

    0 0 35px rgba(139,92,246,.35);

}



/* Responsive */

@media(max-width:900px){

    .tabs {

        grid-template-columns:1fr;

    }

}



/* Accessibility */

@media(prefers-reduced-motion:reduce){

    * {

        animation-duration:.01ms!important;

        transition-duration:.01ms!important;

    }

}