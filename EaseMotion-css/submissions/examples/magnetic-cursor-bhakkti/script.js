/**
 * Advanced Magnetic Cursor with Context-Aware Hover Distortion
 * EaseMotion CSS - GSSoC 2026
 */

class MagneticCursor {
  constructor() {
    // DOM Elements
    this.cursorDot = document.getElementById('cursorDot');
    this.cursorRing = document.getElementById('cursorRing');
    this.cursorTrail = document.getElementById('cursorTrail');
    
    // Cursor State
    this.mouseX = 0;
    this.mouseY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.ringX = 0;
    this.ringY = 0;
    this.trailX = 0;
    this.trailY = 0;
    this.isHovering = false;
    this.isClicking = false;
    this.trailPositions = [];
    this.maxTrailLength = 20;
    
    // Smoothness (0.1 = smooth, 0.5 = fast)
    this.smoothness = 0.15;
    this.ringSmoothness = 0.08;
    this.trailSmoothness = 0.05;
    
    // Bind events
    this.bindEvents();
  }
  
  bindEvents() {
    // Mouse move
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    
    // Hover on interactive elements
    const interactiveElements = document.querySelectorAll(
      '.magnetic-btn, .magnetic-card, .magnetic-item, button, a, .feature-card'
    );
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.isHovering = true;
        this.cursorRing.classList.add('hover');
        this.cursorDot.classList.add('hover');
        
        // Context-aware distortion
        this.handleDistortion(el);
      });
      
      el.addEventListener('mouseleave', () => {
        this.isHovering = false;
        this.cursorRing.classList.remove('hover', 'distort-button', 'distort-link', 'distort-image', 'distort-card');
        this.cursorDot.classList.remove('hover');
      });
    });
    
    // Click effect
    document.addEventListener('mousedown', () => {
      this.isClicking = true;
      this.cursorRing.classList.add('click');
      this.createRipple();
    });
    
    document.addEventListener('mouseup', () => {
      this.isClicking = false;
      this.cursorRing.classList.remove('click');
    });
    
    // Handle visibility
    document.addEventListener('mouseleave', () => {
      this.cursorDot.style.opacity = '0';
      this.cursorRing.style.opacity = '0';
      this.cursorTrail.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
      this.cursorDot.style.opacity = '1';
      this.cursorRing.style.opacity = '0.8';
      this.cursorTrail.style.opacity = '0.6';
    });
    
    // Start animation loop
    this.animate();
  }
  
  handleDistortion(element) {
    // Remove all distortion classes
    this.cursorRing.classList.remove(
      'distort-button', 'distort-link', 'distort-image', 'distort-card'
    );
    
    // Determine context
    const type = element.dataset.type || element.dataset.magnetic || '';
    
    if (type.includes('button') || element.tagName === 'BUTTON') {
      this.cursorRing.classList.add('distort-button');
    } else if (type.includes('link') || element.tagName === 'A') {
      this.cursorRing.classList.add('distort-link');
    } else if (type.includes('image') || type.includes('img')) {
      this.cursorRing.classList.add('distort-image');
    } else if (type.includes('card')) {
      this.cursorRing.classList.add('distort-card');
    } else if (type === 'strong') {
      this.cursorRing.classList.add('distort-button');
    } else if (type === 'medium') {
      this.cursorRing.classList.add('distort-card');
    } else if (type === 'weak') {
      this.cursorRing.classList.add('distort-link');
    }
    
    // Apply magnetic effect based on strength
    const strength = element.dataset.magnetic || 'medium';
    this.applyMagneticEffect(element, strength);
  }
  
  applyMagneticEffect(element, strength) {
    // Magnetic pull - moves cursor ring towards element center
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    let pullStrength = 0.3;
    if (strength === 'strong') pullStrength = 0.5;
    else if (strength === 'weak') pullStrength = 0.15;
    
    // Calculate pull
    const dx = centerX - this.mouseX;
    const dy = centerY - this.mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = Math.max(rect.width, rect.height) * 2;
    
    if (distance < maxDistance) {
      const pull = 1 - (distance / maxDistance);
      const pullX = dx * pull * pullStrength;
      const pullY = dy * pull * pullStrength;
      
      // Apply pull to ring position
      this.ringX = this.mouseX + pullX;
      this.ringY = this.mouseY + pullY;
    } else {
      this.ringX = this.mouseX;
      this.ringY = this.mouseY;
    }
  }
  
  createRipple() {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = this.mouseX + 'px';
    ripple.style.top = this.mouseY + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 800);
  }
  
  animate() {
    // Smooth cursor dot (fast following)
    this.currentX += (this.mouseX - this.currentX) * this.smoothness;
    this.currentY += (this.mouseY - this.currentY) * this.smoothness;
    
    // Update dot position
    this.cursorDot.style.left = this.currentX + 'px';
    this.cursorDot.style.top = this.currentY + 'px';
    
    // Ring position (with magnetic pull)
    if (this.isHovering) {
      this.ringX += (this.ringX - this.ringX) * this.ringSmoothness;
      this.ringY += (this.ringY - this.ringY) * this.ringSmoothness;
    } else {
      this.ringX = this.currentX;
      this.ringY = this.currentY;
    }
    
    // Update ring position with slight delay for smoothness
    const ringTargetX = this.isHovering ? this.ringX : this.currentX;
    const ringTargetY = this.isHovering ? this.ringY : this.currentY;
    
    const ringCurrentX = parseFloat(this.cursorRing.style.left) || ringTargetX;
    const ringCurrentY = parseFloat(this.cursorRing.style.top) || ringTargetY;
    
    const ringX = ringCurrentX + (ringTargetX - ringCurrentX) * this.ringSmoothness;
    const ringY = ringCurrentY + (ringTargetY - ringCurrentY) * this.ringSmoothness;
    
    this.cursorRing.style.left = ringX + 'px';
    this.cursorRing.style.top = ringY + 'px';
    
    // Trail effect
    this.trailPositions.push({ x: this.currentX, y: this.currentY });
    if (this.trailPositions.length > this.maxTrailLength) {
      this.trailPositions.shift();
    }
    
    // Update trail position (follows behind)
    if (this.trailPositions.length > 1) {
      const trailIndex = Math.floor(this.trailPositions.length * 0.7);
      const trailPos = this.trailPositions[trailIndex] || this.trailPositions[0];
      this.cursorTrail.style.left = trailPos.x + 'px';
      this.cursorTrail.style.top = trailPos.y + 'px';
    }
    
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new MagneticCursor();
});