# Price Comparison Table

A simple and responsive **Price Comparison Table** created using **HTML and CSS**.  
This project demonstrates how to create side-by-side pricing cards without using JavaScript.

## 📌 Project Overview

The webpage displays three different pricing plans:

- **Basic**
- **Premium**
- **Pro**

Each plan contains:

- Plan name
- Monthly price
- List of available features
- List of unavailable features
- "Choose Plan" button

The **Premium** plan is highlighted as the **Most Popular** plan.

## 🛠️ Technologies Used

- HTML5
- CSS3
- CSS Flexbox
- No JavaScript

## 📂 Project Structure

```text
Price-Comparison/
│
├── index.html
├── style.css
└── README.md
```

## 📄 HTML File – `index.html`

The HTML file is responsible for creating the structure of the webpage.

It contains:

### Main Container

```html
<div class="pricing-container">
```

This contains the complete pricing section.

### Pricing Table

```html
<div class="pricing-table">
```

This contains all the individual pricing cards.

### Pricing Cards

Each plan is represented by:

```html
<div class="plan">
```

There are three plans:

1. Basic
2. Premium
3. Pro

### Features

The features are displayed using an unordered list:

```html
<ul class="features">
    <li class="available">✓ Restaurant Listings</li>
    <li class="available">✓ Food Search</li>
    <li class="not-available">✗ Online Booking</li>
</ul>
```

The `available` class represents an available feature, while `not-available` represents a feature that is not included.

## 🎨 CSS File – `style.css`

The CSS file controls the appearance and layout of the webpage.

### Flexbox Layout

The pricing cards are arranged side by side using:

```css
.pricing-table {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}
```

### CSS Properties Used

| Property | Purpose |
|---|---|
| `display: flex` | Arranges pricing cards in a flexible layout |
| `justify-content: center` | Centers the pricing cards |
| `gap: 20px` | Adds spacing between cards |
| `flex-wrap: wrap` | Moves cards to the next row when there is insufficient space |
| `background` | Sets background colors |
| `padding` | Adds space inside elements |
| `margin` | Adds space outside elements |
| `border-radius` | Creates rounded corners |
| `box-shadow` | Adds a shadow around cards |

## ⭐ Popular Plan

The Premium plan uses the following class:

```html
<div class="plan popular">
```

The CSS uses a pseudo-element to display the **MOST POPULAR** label:

```css
.popular::before {
    content: "MOST POPULAR";
}
```

This creates a label above the Premium card without using JavaScript.

## 📱 Responsive Design

The project uses:

```css
flex-wrap: wrap;
```

This allows the pricing cards to automatically move to the next line when the screen becomes smaller.

### Desktop

```text
┌────────────┐  ┌────────────┐  ┌────────────┐
│   Basic    │  │  Premium   │  │    Pro     │
│ ₹199/month │  │ ₹499/month │  │ ₹799/month │
└────────────┘  └────────────┘  └────────────┘
```

### Smaller Screen

```text
┌────────────┐  ┌────────────┐
│   Basic    │  │  Premium   │
└────────────┘  └────────────┘

┌────────────┐
│    Pro     │
└────────────┘
```

This makes the layout more suitable for different screen sizes.

## 🔗 Connecting HTML and CSS

The CSS file is connected to the HTML file using:

```html
<link rel="stylesheet" href="style.css">
```

Therefore, both files should be located in the same folder:

```text
Price-Comparison/
├── index.html
└── style.css
```

## 🚀 How to Run the Project

### Method 1 – Browser

1. Open the project folder.
2. Double-click `index.html`.
3. The webpage will open in your default browser.

### Method 2 – VS Code

1. Open the project folder in VS Code.
2. Open `index.html`.
3. Install the **Live Server** extension if required.
4. Right-click `index.html`.
5. Select **Open with Live Server**.

## 💰 Pricing Plans

| Plan | Price | Online Booking | Offers | Priority Support |
|---|---:|:---:|:---:|:---:|
| Basic | ₹199/month | ❌ | ❌ | ❌ |
| Premium | ₹499/month | ✅ | ✅ | ❌ |
| Pro | ₹799/month | ✅ | ✅ | ✅ |

## 🎯 Learning Objectives

This project helps demonstrate:

- Basic HTML structure
- CSS styling
- CSS classes
- CSS pseudo-elements
- Flexbox
- `justify-content`
- `gap`
- `flex-wrap`
- Responsive layouts
- Linking external CSS to HTML
- Creating pricing cards without JavaScript

## 🔮 Future Improvements

The project can later be extended with:

- More pricing plans
- Restaurant-specific price comparison
- Restaurant images and logos
- CSS animations
- Dark mode
- Interactive buttons
- JavaScript-based plan selection
- Backend/database integration

## 👨‍💻 Author

**Pranav Kumar Mahto**

B.Tech – Computer Science & Engineering

---

**Technologies:** HTML5 • CSS3 • Flexbox  
**JavaScript:** Not Used