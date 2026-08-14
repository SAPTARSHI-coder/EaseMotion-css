.products{
    max-width:1200px;
    margin:auto;
    padding:20px;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:28px;
}

.card{
    background:var(--panel);
    border-radius:18px;
    overflow:hidden;
    box-shadow:var(--shadow);
    transition:.35s ease;
}

.card img{
    width:100%;
    height:220px;
    object-fit:cover;
    transition:.45s;
}

.card:hover img{
    transform:scale(1.08);
}

.card h3{
    padding:20px 20px 10px;
}

.card p{
    padding:0 20px;
    color:var(--muted);
    line-height:1.7;
}

.card span{
    display:inline-block;
    margin:20px;
    padding:10px 18px;
    border-radius:999px;
    background:linear-gradient(
        135deg,
        var(--primary),
        var(--secondary)
    );
    color:#fff;
    font-weight:700;
}

.card:hover{
    transform:translateY(-8px);
}

@media (max-width:768px){

    #drawer-toggle:checked ~ .content{
        transform:none;
    }

    .drawer{
        width:260px;
    }

    .hero h2{
        font-size:2.2rem;
    }

}

@media (prefers-reduced-motion:reduce){

    *,
    *::before,
    *::after{
        animation:none !important;
        transition:none !important;
        scroll-behavior:auto !important;
    }

}