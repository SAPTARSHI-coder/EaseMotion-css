/**
 * Multi-Cloud Infrastructure Command Center
 * JavaScript Application
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    initAnimations();
    initInteractiveElements();
});

/**
 * Initialize all Charts using Chart.js
 */
function initCharts() {
    // Chart.js default configuration
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.08)';
    Chart.defaults.font.family = "'Inter', sans-serif";

    // Color palette
    const colors = {
        primary: 'rgba(59, 130, 246, 1)',
        primaryLight: 'rgba(59, 130, 246, 0.2)',
        secondary: 'rgba(139, 92, 246, 1)',
        secondaryLight: 'rgba(139, 92, 246, 0.2)',
        success: 'rgba(16, 185, 129, 1)',
        successLight: 'rgba(16, 185, 129, 0.2)',
        warning: 'rgba(245, 158, 11, 1)',
        warningLight: 'rgba(245, 158, 11, 0.2)',
        danger: 'rgba(239, 68, 68, 1)',
        dangerLight: 'rgba(239, 68, 68, 0.2)',
        info: 'rgba(6, 182, 212, 1)',
        infoLight: 'rgba(6, 182, 212, 0.2)',
        aws: '#ff9900',
        azure: '#0078d4',
        gcp: '#4285f4',
        private: '#6366f1'
    };

    // Growth Chart
    const growthCtx = document.getElementById('growthChart');
    if (growthCtx) {
        new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Infrastructure Growth',
                    data: [1200, 1450, 1680, 1920, 2100, 2450, 2847],
                    borderColor: colors.primary,
                    backgroundColor: colors.primaryLight,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        titleColor: '#f8fafc',
                        bodyColor: '#94a3b8',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // CPU Chart
    const cpuCtx = document.getElementById('cpuChart');
    if (cpuCtx) {
        new Chart(cpuCtx, {
            type: 'doughnut',
            data: {
                labels: ['Used', 'Available'],
                datasets: [{
                    data: [67, 33],
                    backgroundColor: [colors.primary, colors.primaryLight],
                    borderWidth: 0,
                    cutout: '70%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        cornerRadius: 8
                    }
                }
            }
        });
    }

    // Memory Chart
    const memoryCtx = document.getElementById('memoryChart');
    if (memoryCtx) {
        new Chart(memoryCtx, {
            type: 'doughnut',
            data: {
                labels: ['Used', 'Available'],
                datasets: [{
                    data: [82, 18],
                    backgroundColor: [colors.secondary, colors.secondaryLight],
                    borderWidth: 0,
                    cutout: '70%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Storage Chart
    const storageCtx = document.getElementById('storageChart');
    if (storageCtx) {
        new Chart(storageCtx, {
            type: 'bar',
            data: {
                labels: ['AWS S3', 'Azure Blob', 'GCP Storage', 'Local NAS'],
                datasets: [{
                    label: 'Storage (TB)',
                    data: [18, 12, 9, 6],
                    backgroundColor: [
                        colors.aws,
                        colors.azure,
                        colors.gcp,
                        colors.private
                    ],
                    borderRadius: 8,
                    barThickness: 24
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Cost Trend Chart
    const costCtx = document.getElementById('costChart');
    if (costCtx) {
        new Chart(costCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Monthly Cost',
                    data: [920000, 895000, 870000, 845000, 852000, 847293],
                    borderColor: colors.warning,
                    backgroundColor: colors.warningLight,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return '$' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000) + 'K';
                            }
                        }
                    },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Network Traffic Chart
    const networkCtx = document.getElementById('networkChart');
    if (networkCtx) {
        new Chart(networkCtx, {
            type: 'line',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                datasets: [
                    {
                        label: 'Inbound',
                        data: [1.2, 0.8, 2.1, 3.5, 4.2, 3.8, 2.4],
                        borderColor: colors.success,
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        pointRadius: 3
                    },
                    {
                        label: 'Outbound',
                        data: [0.9, 0.6, 1.8, 2.9, 3.6, 3.2, 2.0],
                        borderColor: colors.info,
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        pointRadius: 3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12,
                            padding: 16
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: {
                            callback: function(value) {
                                return value + ' TB/s';
                            }
                        }
                    },
                    x: { grid: { display: false } }
                }
            }
        });
    }
}

/**
 * Initialize Animations
 */
function initAnimations() {
    // Animate numbers on scroll
    const animateValue = (element, start, end, duration) => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                element.textContent = end.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    };

    // Observe KPI cards for animation
    const observerOptions = {
        threshold: 0.5
    };

    const kpiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const kpiValue = entry.target.querySelector('.kpi-value');
                if (kpiValue && !kpiValue.classList.contains('animated')) {
                    kpiValue.classList.add('animated');
                    // Parse numeric value and animate
                    const text = kpiValue.textContent.replace(/[^0-9.]/g, '');
                    const value = parseFloat(text);
                    if (!isNaN(value)) {
                        // Simple animation without changing text
                        entry.target.classList.add('visible');
                    }
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.kpi-card').forEach(card => {
        kpiObserver.observe(card);
    });

    // Animate progress bars
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-fill, .allocation-bar .fill');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                progressObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.dashboard-card').forEach(card => {
        progressObserver.observe(card);
    });
}

/**
 * Initialize Interactive Elements
 */
function initInteractiveElements() {
    // Time filter buttons
    document.querySelectorAll('.time-filter button').forEach(button => {
        button.addEventListener('click', function() {
            const parent = this.closest('.time-filter');
            parent.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Trigger chart update
            const card = this.closest('.dashboard-card');
            const chartContainer = card.querySelector('.chart-container canvas');
            if (chartContainer) {
                // Simulate chart data update
                chartContainer.style.opacity = '0.5';
                setTimeout(() => {
                    chartContainer.style.opacity = '1';
                }, 300);
            }
        });
    });

    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Action buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            showNotification(`${action} triggered`, 'info');
        });
    });

    // Notification system
    window.showNotification = function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification-toast ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(17, 24, 39, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 16px 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 0.9rem;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        // Add animation keyframes if not exists
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    };

    // Simulate live data updates
    simulateLiveUpdates();
}

/**
 * Simulate Live Data Updates
 */
function simulateLiveUpdates() {
    setInterval(() => {
        // Update KPI values slightly
        const kpiValues = document.querySelectorAll('.kpi-value');
        kpiValues.forEach(value => {
            const text = value.textContent;
            if (text.includes('%')) {
                const num = parseFloat(text);
                const change = (Math.random() - 0.5) * 0.5;
                value.textContent = (num + change).toFixed(1) + '%';
            } else if (text.includes('$')) {
                const num = parseFloat(text.replace(/[$,]/g, ''));
                const change = (Math.random() - 0.5) * 1000;
                value.textContent = '$' + (num + change).toLocaleString(undefined, {maximumFractionDigits: 0});
            }
        });
    }, 5000);

    // Update health ring animation
    const healthRing = document.querySelector('.health-ring .progress');
    if (healthRing) {
        const circumference = 283;
        healthRing.style.strokeDasharray = circumference;
        
        setInterval(() => {
            const health = 98 + (Math.random() - 0.5) * 0.5;
            const offset = circumference * (1 - health / 100);
            healthRing.style.strokeDashoffset = offset;
        }, 3000);
    }
}

// Add SVG gradient definition for health ring
document.addEventListener('DOMContentLoaded', function() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.innerHTML = `
        <defs>
            <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#10b981"/>
                <stop offset="100%" stop-color="#3b82f6"/>
            </linearGradient>
        </defs>
    `;
    svg.style.position = 'absolute';
    svg.style.width = '0';
    svg.style.height = '0';
    document.body.appendChild(svg);
});
