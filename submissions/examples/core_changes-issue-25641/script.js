var observerMap = new WeakMap();
var sharedObserver = null;

function getObserver(options) {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var cb = observerMap.get(entry.target);
        if (cb) cb(entry);
      });
    }, options);
  }
  return sharedObserver;
}

function observe(el, callback, options) {
  options = options || { threshold: 0, rootMargin: '0px', once: true };
  var observer = getObserver(options);
  observerMap.set(el, function(entry) {
    if (entry.isIntersecting) {
      callback(entry);
      if (options.once !== false) unobserve(el);
    }
  });
  observer.observe(el);
}

function unobserve(el) {
  if (sharedObserver) {
    sharedObserver.unobserve(el);
  }
  observerMap.delete(el);
}
