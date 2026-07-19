 
# Recipe Card Component (ease-card-recipe)

Recipe card with food image, title, prep time, difficulty flames (1-5), and ingredients count badge.

## Files

- demo.html - Interactive demo
- style.css - Recipe card styles
- README.md - Documentation

## Features

- 📸 Food image with hover zoom
- 📝 Title and description
- ⏱️ Prep/cook time icons
- 🔥 Difficulty flames (1-5)
- 📊 Ingredients count badge
- 🏷️ Recipe badge (Featured, Quick, Spicy, etc.)

## Usage

```html
<div class="ease-card-recipe">
    <div class="recipe-image">
        <span class="recipe-emoji">🍝</span>
        <div class="recipe-badge">Featured</div>
    </div>
    <div class="recipe-content">
        <h3 class="recipe-title">Recipe Name</h3>
        <p class="recipe-description">Description</p>
        <div class="recipe-meta">
            <div class="recipe-time">
                <span>⏱️</span>
                <span>25 min</span>
            </div>
            <div class="recipe-difficulty">
                <span class="flame">🔥</span>
                <span class="flame">🔥</span>
                <span class="flame inactive">🔥</span>
            </div>
            <div class="recipe-ingredients">
                <span>🧂</span>
                <span>12</span>
            </div>
        </div>
    </div>
</div>