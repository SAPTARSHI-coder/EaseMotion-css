const cardVariants = [
  {
    id: "lift",
    name: "Hover Lift",
    description: "Card lifts on hover",
    html: `<div class="card lift-card">Hover Lift</div>`,
    css: `
      .lift-card {
        background: #222;
        color: #fff;
        border-radius: 12px;
        padding: 40px;
        text-align: center;
        transition: transform 0.3s ease;
      }
      .lift-card:hover {
        transform: translateY(-12px) scale(1.05);
      }
    `,
  },
  {
    id: "stats",
    name: "Stats Card",
    description: "Modern statistics card",
    html: `
    <div class="stats-card">
      <h2>12.5K</h2>
      <p>Total Users</p>
    </div>
  `,
    css: `
    .stats-card{
      background:#fff;
      border-radius:16px;
      padding:30px;
      text-align:center;
      box-shadow:0 10px 25px rgba(0,0,0,.1);
    }
    .stats-card h2{
      font-size:42px;
      color:#0ea5e9;
    }
    .stats-card p{
      color:#666;
    }
  `,
  },
  {
    id: "glass",
    name: "Glass Card",
    description: "Glassmorphism effect",
    html: `
    <div class="glass-card">
      <h3>Glass Card</h3>
      <p>Beautiful frosted glass effect.</p>
    </div>
  `,
    css: `
    .glass-card{
      backdrop-filter:blur(20px);
      background:rgba(255,255,255,.2);
      border:1px solid rgba(255,255,255,.3);
      border-radius:18px;
      padding:35px;
      color:#fff;
    }
  `,
  },
  {
    id: "profile",
    name: "Profile Card",
    description: "Simple user profile",
    html: `
    <div class="profile-card">
      <img src="https://i.pravatar.cc/100">
      <h3>John Doe</h3>
      <p>UI Designer</p>
    </div>
  `,
    css: `
    .profile-card{
      background:#fff;
      border-radius:18px;
      padding:30px;
      text-align:center;
      box-shadow:0 8px 25px rgba(0,0,0,.12);
    }
    .profile-card img{
      width:90px;
      height:90px;
      border-radius:50%;
    }
  `,
  },
  {
    id: "product",
    name: "Product Card",
    description: "Modern ecommerce card",
    html: `
    <div class="product-card">
      <img src="https://picsum.photos/250/180">
      <h3>Wireless Headphones</h3>
      <span>$149</span>
    </div>
  `,
    css: `
    .product-card{
      background:#fff;
      border-radius:15px;
      overflow:hidden;
      box-shadow:0 10px 25px rgba(0,0,0,.1);
    }
    .product-card img{
      width:100%;
    }
    .product-card h3{
      padding:15px;
    }
    .product-card span{
      padding:15px;
      display:block;
      color:#10b981;
      font-weight:bold;
    }
  `,
  },
  {
    id: "pricing",
    name: "Pricing Card",
    description: "Pricing plan",
    html: `
    <div class="pricing-card">
      <h2>Pro</h2>
      <h1>$19</h1>
      <button>Choose Plan</button>
    </div>
  `,
    css: `
    .pricing-card{
      background:#fff;
      text-align:center;
      padding:35px;
      border-radius:20px;
      box-shadow:0 10px 30px rgba(0,0,0,.1);
    }
    .pricing-card h1{
      color:#3b82f6;
      margin:20px 0;
    }
    .pricing-card button{
      padding:12px 24px;
      border:none;
      border-radius:8px;
      background:#3b82f6;
      color:#fff;
    }
  `,
  },
  {
    id: "blog",
    name: "Blog Card",
    description: "Blog preview",
    html: `
    <div class="blog-card">
      <img src="https://picsum.photos/300/180">
      <div class="content">
        <h3>Latest News</h3>
        <p>Read our newest article.</p>
      </div>
    </div>
  `,
    css: `
    .blog-card{
      background:#fff;
      border-radius:16px;
      overflow:hidden;
      box-shadow:0 10px 20px rgba(0,0,0,.08);
    }
    .blog-card img{
      width:100%;
    }
    .content{
      padding:20px;
    }
  `,
  },
  {
    id: "dashboard",
    name: "Dashboard Card",
    description: "Analytics dashboard",
    html: `
    <div class="dashboard-card">
      <h3>Revenue</h3>
      <h1>$8,250</h1>
      <small>+18% this month</small>
    </div>
  `,
    css: `
    .dashboard-card{
      background:#111827;
      color:#fff;
      border-radius:18px;
      padding:30px;
    }
    .dashboard-card h1{
      color:#10b981;
      margin:15px 0;
    }
  `,
  },
  {
    id: "team",
    name: "Team Card",
    description: "Team member",
    html: `
    <div class="team-card">
      <img src="https://i.pravatar.cc/120">
      <h3>Emma Watson</h3>
      <span>Frontend Developer</span>
    </div>
  `,
    css: `
    .team-card{
      background:#fff;
      text-align:center;
      padding:30px;
      border-radius:18px;
    }
    .team-card img{
      width:100px;
      border-radius:50%;
    }
    .team-card span{
      color:#666;
    }
  `,
  },
  {
    id: "weather",
    name: "Weather Card",
    description: "Weather UI card",
    html: `
    <div class="weather-card">
      ☀️
      <h2>28°C</h2>
      <p>Sunny</p>
    </div>
  `,
    css: `
    .weather-card{
      background:linear-gradient(135deg,#38bdf8,#2563eb);
      color:#fff;
      border-radius:20px;
      text-align:center;
      padding:35px;
      font-size:40px;
    }
  `,
  },
  {
    id: "glow",
    name: "Glow Card",
    description: "Card glows on hover",
    html: `<div class="card glow-card">Glow Card</div>`,
    css: `
      .glow-card {
        background: #111;
        color: #fff;
        border-radius: 12px;
        padding: 40px;
        text-align: center;
        transition: box-shadow 0.3s ease;
      }
      .glow-card:hover {
        box-shadow: 0 0 20px #00f, 0 0 40px #0ff;
      }
    `,
  },
  {
    id: "flip",
    name: "Flip Card",
    description: "Whole card flips",
    html: `
      <div class="flip-card">
        <div class="flip-front">Front</div>
        <div class="flip-back">Back</div>
      </div>
    `,
    css: `
      .flip-card {
        position: relative;
        width: 200px;
        height: 120px;
        border-radius: 12px;
        perspective: 1000px;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }
      .flip-card:hover {
        transform: rotateY(180deg);
      }
      .flip-front, .flip-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
      }
      .flip-front {
        background: #111;
        color: #fff;
      }
      .flip-back {
        background: #ff6f61;
        color: #fff;
        transform: rotateY(180deg);
      }
    `,
  },
  {
    id: "pulse",
    name: "Pulse Card",
    description: "Card pulses continuously",
    html: `<div class="card pulse-card">Pulse Card</div>`,
    css: `
      @keyframes pulse {
        0%,100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .pulse-card {
        background: #333;
        color: #fff;
        border-radius: 12px;
        padding: 40px;
        text-align: center;
        animation: pulse 2s infinite;
      }
    `,
  },
  {
    id: "bounce",
    name: "Bounce Card",
    description: "Card bounces on hover",
    html: `<div class="card bounce-card">Bounce Card</div>`,
    css: `
      @keyframes bounce {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
      .bounce-card {
        background: #444;
        color: #fff;
        border-radius: 12px;
        padding: 40px;
        text-align: center;
        transition: transform 0.3s ease;
      }
      .bounce-card:hover {
        animation: bounce 0.6s;
      }
    `,
  },
];

// Inject dynamically
const grid = document.getElementById("cardGrid");
const styleTag = document.createElement("style");
document.head.appendChild(styleTag);

cardVariants.forEach((card) => {
  styleTag.innerHTML += card.css;
  const wrapper = document.createElement("div");
  wrapper.className = "card-wrapper";
  wrapper.innerHTML = `
    <h3>${card.name}</h3>
    <p>${card.description}</p>
    ${card.html}
  `;
  grid.appendChild(wrapper);
});
