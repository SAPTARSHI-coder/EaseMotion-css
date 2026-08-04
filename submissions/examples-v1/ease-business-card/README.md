document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const form = document.getElementById('cardForm');
    const nameInput = document.getElementById('name');
    const titleInput = document.getElementById('title');
    const companyInput = document.getElementById('company');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const websiteInput = document.getElementById('website');
    const colorInput = document.getElementById('color');
    const textColorInput = document.getElementById('textColor');
    const downloadBtn = document.getElementById('downloadBtn');
    const resetBtn = document.getElementById('resetBtn');
    const businessCard = document.getElementById('businessCard');

    // Card display elements
    const cardName = document.getElementById('cardName');
    const cardTitle = document.getElementById('cardTitle');
    const cardCompany = document.getElementById('cardCompany');
    const cardEmail = document.getElementById('cardEmail');
    const cardPhone = document.getElementById('cardPhone');
    const cardWebsite = document.getElementById('cardWebsite');

    // Check if all elements exist
    const elements = [
        form, nameInput, titleInput, companyInput, emailInput, 
        phoneInput, websiteInput, colorInput, textColorInput,
        downloadBtn, resetBtn, businessCard, cardName, cardTitle,
        cardCompany, cardEmail, cardPhone, cardWebsite
    ];

    for (let el of elements) {
        if (!el) {
            console.error('Element not found:', el);
            return;
        }
    }

    // Load saved data if exists
    loadSavedData();

    // Generate card function
    function generateCard() {
        const name = nameInput.value.trim() || 'John Doe';
        const title = titleInput.value.trim() || 'Software Developer';
        const company = companyInput.value.trim() || 'Tech Corp';
        const email = emailInput.value.trim() || 'john@example.com';
        const phone = phoneInput.value.trim() || '+1 234 567 890';
        const website = websiteInput.value.trim() || 'https://example.com';
        const color = colorInput.value || '#4A90E2';
        const textColor = textColorInput.value || '#FFFFFF';

        // Update card
        cardName.textContent = name;
        cardTitle.textContent = title;
        cardCompany.textContent = company;
        cardEmail.textContent = email;
        cardPhone.textContent = phone;
        cardWebsite.textContent = website || 'No website provided';

        // Update colors
        businessCard.style.backgroundColor = color;
        businessCard.style.color = textColor;

        // Save to localStorage
        saveData({
            name, title, company, email, phone, website, color, textColor
        });

        // Enable download button
        downloadBtn.disabled = false;
    }

    // Save data to localStorage
    function saveData(data) {
        try {
            localStorage.setItem('businessCardData', JSON.stringify(data));
        } catch (e) {
            console.warn('Could not save data:', e);
        }
    }

    // Load data from localStorage
    function loadSavedData() {
        try {
            const saved = localStorage.getItem('businessCardData');
            if (saved) {
                const data = JSON.parse(saved);
                nameInput.value = data.name || '';
                titleInput.value = data.title || '';
                companyInput.value = data.company || '';
                emailInput.value = data.email || '';
                phoneInput.value = data.phone || '';
                websiteInput.value = data.website || '';
                colorInput.value = data.color || '#4A90E2';
                textColorInput.value = data.textColor || '#FFFFFF';
                
                // Auto-generate card
                generateCard();
            } else {
                // Generate default card
                generateCard();
            }
        } catch (e) {
            console.warn('Could not load saved data:', e);
            generateCard();
        }
    }

    // Reset form
    function resetForm() {
        // Clear form inputs
        nameInput.value = '';
        titleInput.value = '';
        companyInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        websiteInput.value = '';
        colorInput.value = '#4A90E2';
        textColorInput.value = '#FFFFFF';
        
        // Reset card to default
        cardName.textContent = 'John Doe';
        cardTitle.textContent = 'Software Developer';
        cardCompany.textContent = 'Tech Corp';
        cardEmail.textContent = 'john@example.com';
        cardPhone.textContent = '+1 234 567 890';
        cardWebsite.textContent = 'No website provided';
        businessCard.style.backgroundColor = '#4A90E2';
        businessCard.style.color = '#FFFFFF';

        // Clear localStorage
        localStorage.removeItem('businessCardData');
        
        // Disable download button
        downloadBtn.disabled = true;
    }

    // Download card as image
    function downloadCard() {
        if (downloadBtn.disabled) return;

        // Add a temporary class for better download quality
        businessCard.style.transform = 'scale(2)';
        businessCard.style.transformOrigin = 'top left';
        
        // Use html2canvas if available, else use fallback
        if (typeof html2canvas !== 'undefined') {
            html2canvas(businessCard, {
                scale: 2,
                backgroundColor: businessCard.style.backgroundColor,
                allowTaint: true,
                useCORS: true
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `business-card-${nameInput.value || 'card'}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
                // Reset transform
                businessCard.style.transform = '';
            }).catch(err => {
                console.error('Error generating image:', err);
                fallbackDownload();
            });
        } else {
            fallbackDownload();
        }
    }

    // Fallback download method
    function fallbackDownload() {
        // Simple screenshot alternative using canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const rect = businessCard.getBoundingClientRect();
        
        canvas.width = rect.width * 2;
        canvas.height = rect.height * 2;
        ctx.scale(2, 2);

        // Fill background
        ctx.fillStyle = businessCard.style.backgroundColor || '#4A90E2';
        ctx.fillRect(0, 0, rect.width, rect.height);
        
        // Add rounded corners
        const radius = 16;
        ctx.beginPath();
        ctx.moveTo(radius, 0);
        ctx.lineTo(rect.width - radius, 0);
        ctx.quadraticCurveTo(rect.width, 0, rect.width, radius);
        ctx.lineTo(rect.width, rect.height - radius);
        ctx.quadraticCurveTo(rect.width, rect.height, rect.width - radius, rect.height);
        ctx.lineTo(radius, rect.height);
        ctx.quadraticCurveTo(0, rect.height, 0, rect.height - radius);
        ctx.lineTo(0, radius);
        ctx.quadraticCurveTo(0, 0, radius, 0);
        ctx.closePath();
        ctx.clip();

        // Draw text
        ctx.fillStyle = businessCard.style.color || '#FFFFFF';
        ctx.textAlign = 'left';
        
        // Title
        ctx.font = 'bold 24px "Segoe UI", sans-serif';
        ctx.fillText(cardName.textContent, 30, 50);
        
        ctx.font = '16px "Segoe UI", sans-serif';
        ctx.fillText(cardTitle.textContent, 30, 80);
        
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillText(cardCompany.textContent, 30, 110);
        ctx.fillText(cardEmail.textContent, 30, 135);
        ctx.fillText(cardPhone.textContent, 30, 160);
        ctx.fillText(cardWebsite.textContent, 30, 185);

        // Download
        const link = document.createElement('a');
        link.download = `business-card-${nameInput.value || 'card'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        // Reset transform
        businessCard.style.transform = '';
    }

    // Load html2canvas if not available
    function loadHtml2Canvas() {
        if (typeof html2canvas === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }

    // Event Listeners
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        generateCard();
    });

    // Real-time preview on input change
    [nameInput, titleInput, companyInput, emailInput, phoneInput, websiteInput, colorInput, textColorInput].forEach(input => {
        input.addEventListener('input', function() {
            generateCard();
        });
    });

    downloadBtn.addEventListener('click', downloadCard);
    resetBtn.addEventListener('click', resetForm);

    // Load html2canvas
    loadHtml2Canvas();

    // Keyboard shortcut: Enter to generate
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
            e.preventDefault();
            generateCard();
        }
    });

    console.log('Business Card Generator initialized successfully!');
});