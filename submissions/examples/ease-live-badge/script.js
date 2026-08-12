const liveBadge = document.getElementById('liveBadge');
const statusLabel = document.getElementById('statusLabel');
const viewerCount = document.getElementById('viewerCount');
const toggleLiveButton = document.getElementById('toggleLive');
const increaseViewersButton = document.getElementById('increaseViewers');
const decreaseViewersButton = document.getElementById('decreaseViewers');

let currentViewers = 12400;
let isLive = true;

const formatViewerCount = (count) => {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  }

  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  }

  return String(count);
};

const updateViewerCount = (nextCount) => {
  currentViewers = Math.max(0, nextCount);

  if (!isLive) {
    viewerCount.textContent = '';
    viewerCount.setAttribute('aria-hidden', 'true');
    return;
  }

  viewerCount.textContent = `• ${formatViewerCount(currentViewers)}`;
  viewerCount.setAttribute('aria-hidden', 'false');
};

const setBadgeState = () => {
  liveBadge.classList.toggle('offline', !isLive);
  liveBadge.classList.toggle('live', isLive);
  statusLabel.textContent = isLive ? '🔴 LIVE' : '⚪ OFFLINE';
  toggleLiveButton.textContent = isLive ? 'Go Offline' : 'Go Live';

  updateViewerCount(currentViewers);
};

const changeViewerCount = (delta) => {
  const step = currentViewers >= 1000 ? 100 : 1;
  updateViewerCount(currentViewers + delta * step);
};

const increaseViewers = () => changeViewerCount(1);
const decreaseViewers = () => changeViewerCount(-1);

const toggleLive = () => {
  isLive = !isLive;
  setBadgeState();
};

increaseViewersButton.addEventListener('click', increaseViewers);
decreaseViewersButton.addEventListener('click', decreaseViewers);
toggleLiveButton.addEventListener('click', toggleLive);

// Initialize the badge with the correct starting state.
setBadgeState();
