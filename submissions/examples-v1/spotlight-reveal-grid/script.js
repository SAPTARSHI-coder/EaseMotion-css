const container = document.getElementById('grid-container');

// Generate Cards Dynamically
for (let i = 0; i < 6; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-content">
            <h3>Card ${i + 1}</h3>
            <p>Hover to reveal spotlight</p>
        </div>
        <div class="spotlight"></div>
    `;
    container.appendChild(card);
}

// Attach Spotlight Event Listener
document.getElementById('grid-container').onmousemove = e => {
    for(const card of document.getElementsByClassName('card')) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }
};
