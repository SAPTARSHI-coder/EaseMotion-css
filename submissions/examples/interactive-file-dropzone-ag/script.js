/**
 * EaseMotion CSS - Interactive SaaS File Upload Dropzone
 * Handles drag-and-drop state toggles and simulated file upload previews
 */

document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('file-input');
  const fileList = document.getElementById('file-list');
  const fileCount = document.getElementById('file-count');

  if (!dropzone || !fileInput || !fileList) return;

  // Prevent default browser drag behaviors
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
    }, false);
  });

  // Highlight dropzone on drag enter / drag over
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, () => {
      dropzone.classList.add('is-dragover');
    }, false);
  });

  // Remove highlight on drag leave / drop
  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, () => {
      dropzone.classList.remove('is-dragover');
    }, false);
  });

  // Handle dropped files
  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  });

  // Handle file input selection
  fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
  });

  // Handle click on dropzone (trigger file input if not clicking button label)
  dropzone.addEventListener('click', (e) => {
    if (!e.target.closest('.browse-btn') && e.target !== fileInput) {
      fileInput.click();
    }
  });

  // Enable keyboard activation (Enter or Space)
  dropzone.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInput.click();
    }
  });

  // Handle delegate remove buttons
  fileList.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.remove-btn');
    if (!removeBtn) return;

    const fileCard = removeBtn.closest('.file-card');
    if (fileCard) {
      fileCard.style.opacity = '0';
      fileCard.style.transform = 'scale(0.9) translateY(10px)';
      fileCard.style.transition = 'all 0.3s ease';

      setTimeout(() => {
        fileCard.remove();
        updateFileCount();
      }, 300);
    }
  });

  function handleFiles(files) {
    if (!files || files.length === 0) return;

    Array.from(files).forEach(file => {
      createFilePreview(file);
    });

    updateFileCount();
  }

  function createFilePreview(file) {
    const card = document.createElement('div');
    card.className = 'file-card file-card-uploading';

    const isPdf = file.name.endsWith('.pdf');
    const isImage = file.type.startsWith('image/');

    let iconClass = 'file-icon-gen';
    let iconSvg = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    `;

    if (isPdf) {
      iconClass = 'file-icon-pdf';
      iconSvg = `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      `;
    } else if (isImage) {
      iconClass = 'file-icon-img';
      iconSvg = `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      `;
    }

    const fileSizeFormatted = formatFileSize(file.size);

    card.innerHTML = `
      <div class="file-icon-box ${iconClass}">
        ${iconSvg}
      </div>
      <div class="file-details">
        <div class="file-header">
          <span class="file-name" title="${file.name}">${file.name}</span>
          <span class="file-size">${fileSizeFormatted}</span>
        </div>
        <div class="progress-track">
          <div class="progress-bar progress-bar-animated" style="width: 15%;"></div>
        </div>
        <div class="file-footer">
          <span class="status-tag status-uploading">
            <span class="spinner"></span>
            Uploading 15%
          </span>
          <span class="time-stamp">Est. 2s</span>
        </div>
      </div>
      <button class="remove-btn" title="Remove file" aria-label="Remove ${file.name}">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;

    fileList.prepend(card);

    // Simulate progress completion over 1.8 seconds
    let progress = 15;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 25) + 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        markFileComplete(card);
      } else {
        const progressBar = card.querySelector('.progress-bar');
        const statusTag = card.querySelector('.status-tag');
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (statusTag) {
          statusTag.innerHTML = `
            <span class="spinner"></span>
            Uploading ${progress}%
          `;
        }
      }
    }, 400);
  }

  function markFileComplete(card) {
    card.classList.remove('file-card-uploading');
    card.classList.add('file-card-complete');

    const progressBar = card.querySelector('.progress-bar');
    const statusTag = card.querySelector('.status-tag');
    const timeStamp = card.querySelector('.time-stamp');

    if (progressBar) {
      progressBar.classList.remove('progress-bar-animated');
      progressBar.style.width = '100%';
    }

    if (statusTag) {
      statusTag.className = 'status-tag status-success';
      statusTag.innerHTML = `
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        Complete
      `;
    }

    if (timeStamp) {
      timeStamp.textContent = 'Just now';
    }
  }

  function updateFileCount() {
    const totalFiles = fileList.querySelectorAll('.file-card').length;
    fileCount.textContent = `${totalFiles} file${totalFiles === 1 ? '' : 's'}`;
  }

  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }
});
