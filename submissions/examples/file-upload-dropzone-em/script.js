/* =============================================================
   Interactive Drag & Drop File Upload Target with Ripple Progress
   EaseMotion — Vanilla JS Logic
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('file-input');
  const fileList = document.getElementById('file-list');

  // Prevent default drag behaviors
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // Highlight dropzone when item is dragged over it
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, highlight, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, unhighlight, false);
  });

  function highlight(e) {
    dropzone.classList.add('is-dragover');
  }

  function unhighlight(e) {
    dropzone.classList.remove('is-dragover');
  }

  // Handle dropped files
  dropzone.addEventListener('drop', handleDrop, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  }

  // Handle files selected via fallback input
  fileInput.addEventListener('change', function() {
    handleFiles(this.files);
    // Reset input so same file can be selected again
    this.value = '';
  });

  function handleFiles(files) {
    ([...files]).forEach(uploadFile);
  }

  function uploadFile(file) {
    // Basic validation
    if (file.size > 50 * 1024 * 1024) {
      alert(`File ${file.name} exceeds the 50MB limit.`);
      return;
    }

    const item = createFileItem(file);
    fileList.appendChild(item);
    simulateProgress(item);
  }

  function createFileItem(file) {
    const li = document.createElement('div');
    li.className = 'file-item';
    
    // Format file size
    const sizeInKB = (file.size / 1024).toFixed(1);
    const sizeText = sizeInKB > 1024 ? `${(sizeInKB / 1024).toFixed(2)} MB` : `${sizeInKB} KB`;

    li.innerHTML = `
      <div class="file-item__progress-bg"></div>
      <div class="file-item__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
          <polyline points="13 2 13 9 20 9"></polyline>
        </svg>
      </div>
      <div class="file-item__info">
        <div class="file-item__name" title="${file.name}">${file.name}</div>
        <div class="file-item__size">${sizeText}</div>
      </div>
      <button type="button" class="file-item__remove" aria-label="Remove file">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;

    // Remove event
    const removeBtn = li.querySelector('.file-item__remove');
    removeBtn.addEventListener('click', () => {
      li.style.animation = 'none';
      li.style.opacity = '0';
      li.style.transform = 'translateY(10px)';
      li.style.transition = 'all 0.2s';
      setTimeout(() => li.remove(), 200);
    });

    return li;
  }

  function simulateProgress(item) {
    const progressBg = item.querySelector('.file-item__progress-bg');
    let progress = 0;
    
    // Simulate upload speed
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5; // increment by 5-20%
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Complete state
        setTimeout(() => {
          item.classList.add('is-complete');
          // Swap icon to checkmark
          const iconWrapper = item.querySelector('.file-item__icon');
          iconWrapper.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          `;
        }, 200);
      }
      
      progressBg.style.width = `${progress}%`;
    }, 200);
  }
});
