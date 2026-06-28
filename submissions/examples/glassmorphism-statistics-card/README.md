# 📊 Glassmorphism Statistics Card

A modern **Glassmorphism Statistics Card** component built using **pure HTML and CSS**. The design features a frosted glass effect, subtle shadows, responsive layout, and smooth hover animations, making it ideal for dashboards, analytics pages, SaaS products, and admin panels.

---

## ✨ Features

- 📈 Pure HTML & CSS
- 🧊 Modern Glassmorphism UI
- 🌟 Frosted glass effect with backdrop blur
- 📊 Dashboard-style statistic cards
- 🎨 Trend badges (Positive, Negative & Stable)
- 🚀 Smooth hover animations
- 📱 Fully responsive
- ♻️ Easy to customize
- ❌ No JavaScript required

---

## 📁 Folder Structure

```
glassmorphism-statistics-card/
│
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Demo Includes

The demo showcases **8 responsive statistic cards**:

- 📈 Total Revenue
- 👥 Active Users
- 🛒 Total Orders
- 🎯 Conversion Rate
- 🎫 Support Tickets
- ⭐ Customer Rating
- 📩 Subscribers
- 🟢 Server Uptime

Each card includes:

- Icon
- Metric Title
- Statistic Value
- Trend Badge
- Description
- Glassmorphism Effect
- Hover Animation

---

## 💻 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Example card:

```html
<article class="glass-card">
    <div class="icon">📈</div>

    <h3>Total Revenue</h3>

    <h2>$24,580</h2>

    <span class="trend positive">
        ▲ +18%
    </span>

    <p>Compared to last month</p>
</article>
```

---

## 🎨 Customization

Modify the CSS variables inside `:root` to match your project's branding.

```css
:root{
    --bg:#0f172a;
    --glass:rgba(255,255,255,.08);
    --blue:#3b82f6;
    --green:#22c55e;
    --red:#ef4444;
}
```

You can also customize:

- Background gradient
- Glass opacity
- Border color
- Card radius
- Shadow intensity
- Hover animations
- Badge colors
- Typography

---

## 📱 Responsive Design

The component automatically adapts to different screen sizes using CSS Grid.

| Device | Layout |
|---------|--------|
| Desktop | 4 Cards |
| Laptop | 3–4 Cards |
| Tablet | 2 Cards |
| Mobile | 1 Card |

---

## 🌐 Browser Support

- ✅ Google Chrome
- ✅ Microsoft Edge
- ✅ Mozilla Firefox
- ✅ Safari
- ✅ Opera

> **Note:** The glass effect uses `backdrop-filter`. Browsers that do not support it will still display a clean translucent card without the blur effect.

---

## 📄 License

Created as a reusable **EaseMotion CSS** component for responsive dashboard interfaces.

---

## ⭐ Use Cases

This component is suitable for:

- Admin Dashboards
- SaaS Applications
- Analytics Platforms
- CRM Systems
- Finance Dashboards
- Business Intelligence Tools
- Portfolio Dashboards
- Project Management Systems

---

Made with ❤️ for the **EaseMotion CSS** open-source community.