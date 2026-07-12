const zone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const progressBar = document.getElementById('progressBar');
const fileStatus = document.getElementById('fileStatus');
const uploadBtn = document.getElementById('uploadBtn');
const resetBtn = document.getElementById('resetBtn');

let selectedFile = null;

zone.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', () => {
  selectedFile = fileInput.files[0];
  if (selectedFile) showFileInfo(selectedFile);
});

zone.addEventListener('dragover', e => {
  e.preventDefault();
  zone.classList.add('drag-over');
});

zone.addEventListener('dragleave', () => {
  zone.classList.remove('drag-over');
});

zone.addEventListener('drop', e => {
  e.preventDefault();
  zone.classList.remove('drag-over');
  selectedFile = e.dataTransfer.files[0];
  if (selectedFile) showFileInfo(selectedFile);
});

uploadBtn.addEventListener('click', simulateUpload);
resetBtn.addEventListener('click', resetAll);

function showFileInfo(file) {
  fileName.textContent = file.name;
  fileSize.textContent = formatSize(file.size);
  fileInfo.hidden = false;
  uploadBtn.disabled = false;
  fileStatus.textContent = '';
  fileStatus.className = 'file-status';
  progressBar.style.width = '0%';
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}

function simulateUpload() {
  uploadBtn.disabled = true;
  fileStatus.textContent = 'Uploading…';
  progressBar.style.width = '0%';

  let pct = 0;
  const interval = setInterval(() => {
    pct += 4;
    if (pct >= 100) {
      pct = 100;
      clearInterval(interval);
      progressBar.style.width = '100%';
      fileStatus.textContent = '✓ Upload complete';
      fileStatus.className = 'file-status success';
    } else {
      progressBar.style.width = pct + '%';
    }
  }, 80);
}

function resetAll() {
  selectedFile = null;
  fileInput.value = '';
  fileInfo.hidden = true;
  uploadBtn.disabled = true;
  progressBar.style.width = '0%';
  fileStatus.textContent = '';
  fileStatus.className = 'file-status';
}
