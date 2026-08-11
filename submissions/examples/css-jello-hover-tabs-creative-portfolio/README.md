:root {

    --bg: #0f172a;

    --card: rgba(255,255,255,0.08);

    --border: rgba(255,255,255,0.18);

    --primary: #8b5cf6;

    --secondary: #ec4899;

    --accent: #22d3ee;

    --text: #ffffff;

    --muted: #cbd5e1;

    --jello-scale: 1.08;

    --animation-time: .5s;

}



* {

    margin:0;

    padding:0;

    box-sizing:border-box;

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

            #312e81,

            var(--bg)

        );

    color:var(--text);

    padding:40px;

}



.portfolio-interface {

    max-width:1100px;

    margin:auto;

}



.hero {

    text-align:center;

    margin-bottom:50px;

}



.hero h1 {

    font-size:

        clamp(2rem,5vw,3.5rem);


    margin-bottom:15px;


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

    color:var(--muted);

    font-size:1.1rem;

}



.tabs {

    display:flex;

    justify-content:center;

    flex-wrap:wrap;

    gap:20px;

    padding:35px;


    background:var(--card);


    border:

        1px solid var(--border);


    border-radius:25px;


    backdrop-filter:blur(18px);

}



.tab {

    position:relative;


    display:flex;

    align-items:center;

    gap:10px;


    padding:18px 35px;


    border-radius:18px;


    text-decoration:none;


    color:var(--text);


    background:

        rgba(255,255,255,.08);


    border:

        1px solid var(--border);


    transition:

        transform var(--animation-time) ease,

        box-shadow var(--animation-time) ease,

        border-color var(--animation-time) ease;

}



.tab:hover {


    animation:

        jello

        .8s

        ease;


    border-color:var(--primary);


    box-shadow:

        0 20px 45px

        rgba(139,92,246,.35);

}



@keyframes jello {


    0% {

        transform:scale(1);

    }


    25% {

        transform:

            scaleX(1.1)

            scaleY(.9);

    }


    50% {

        transform:

            scaleX(.95)

            scaleY(1.05);

    }


    75% {

        transform:

            scaleX(1.04)

            scaleY(.96);

    }


    100% {

        transform:

            scale(1);

    }


}



.tab.active {


    background:

        linear-gradient(

            135deg,

            rgba(139,92,246,.35),

            rgba(236,72,153,.35)

        );


    border-color:var(--secondary);

}



.tab:focus-visible {

    outline:

        3px solid var(--accent);


    outline-offset:5px;

}



.icon {

    font-size:1.3rem;

}



.portfolio-card {

    margin-top:45px;

    padding:40px;


    text-align:center;


    background:var(--card);


    border:

        1px solid var(--border);


    border-radius:25px;


    backdrop-filter:blur(18px);


    box-shadow:

        0 20px 50px

        rgba(0,0,0,.25);

}



.portfolio-card h2 {

    margin-bottom:15px;

}



.portfolio-card p {

    color:var(--muted);

    line-height:1.6;

}



@media(max-width:700px) {


    body {

        padding:20px;

    }


    .tabs {

        flex-direction:column;

    }


    .tab {

        width:100%;

        justify-content:center;

    }


}



@media(prefers-reduced-motion:reduce) {


    * {

        animation:none !important;

        transition:none !important;

    }


}