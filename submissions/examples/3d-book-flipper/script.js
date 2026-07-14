document.addEventListener("DOMContentLoaded", () => {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            const book = document.getElementById('myBook');
            data.pages.forEach((pageContent, index) => {
                const page = document.createElement('div');
                page.className = 'page';
                page.innerHTML = `<h2>${pageContent.title}</h2><p>${pageContent.text}</p>`;
                
                page.addEventListener('click', function() {
                    this.classList.toggle('flipped');
                });
                book.appendChild(page);
            });
        })
        .catch(error => console.error('Error loading content:', error));
});
