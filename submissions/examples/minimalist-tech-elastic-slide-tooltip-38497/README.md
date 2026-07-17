/* ===========================
   ELASTIC SLIDE ANIMATION
=========================== */

@keyframes elasticSlide{

    0%{

        opacity:0;

        transform:
        translateX(-50%)
        translateY(var(--em-slide-distance))
        scale(.90);

    }

    55%{

        opacity:1;

        transform:
        translateX(-50%)
        translateY(-8px)
        scale(1.04);

    }

    75%{

        transform:
        translateX(-50%)
        translateY(3px)
        scale(.98);

    }

    100%{

        opacity:1;

        transform:
        translateX(-50%)
        translateY(0)
        scale(var(--em-scale));

    }

}

/* ===========================
   BUTTON EFFECT
=========================== */

.tech-btn:hover{

    transform:
    translateY(-2px);

    box-shadow:
    0 10px 25px
    rgba(37,99,235,.18);

}

.tech-btn:active{

    transform:
    scale(.98);

}

/* ===========================
   TOOLTIP HOVER
=========================== */

.tooltip-wrapper:hover .tooltip,

.tooltip-wrapper:focus-within .tooltip{

    opacity:1;

    pointer-events:auto;

    animation:
    elasticSlide
    var(--em-duration)
    var(--em-easing)
    forwards;

    animation-delay:
    var(--em-delay);

}

/* ===========================
   TOOLTIP SHADOW
=========================== */

.tooltip{

    transition:
    box-shadow .3s;

}

.tooltip-wrapper:hover .tooltip{

    box-shadow:

    0 18px 40px
    rgba(0,0,0,.22);

}

/* ===========================
   ACCESSIBILITY
=========================== */

.tooltip-wrapper:focus-within .tech-btn{

    border-color:

    var(--primary);

}

.tooltip-wrapper:focus-within .tooltip{

    outline:

    2px solid
    rgba(255,255,255,.18);

}

/* ===========================
   RESPONSIVE
=========================== */

@media(max-width:768px){

    .demo-area{

        gap:28px;

    }

    .tooltip{

        min-width:220px;

    }

}

@media(max-width:600px){

    .page{

        width:94vw;

    }

    h1{

        font-size:1.6rem;

    }

    .subtitle{

        font-size:.95rem;

        margin-bottom:40px;

    }

    .demo-area{

        flex-direction:column;

        align-items:center;

    }

    .tech-btn{

        width:220px;

    }

    .tooltip{

        width:220px;

        min-width:auto;

        padding:16px;

    }

}

@media(max-width:400px){

    .tooltip{

        width:190px;

        font-size:.9rem;

    }

}

/* ===========================
   REDUCED MOTION
=========================== */

@media(prefers-reduced-motion:reduce){

    *{

        animation:none !important;

        transition:none !important;

        scroll-behavior:auto;

    }

}