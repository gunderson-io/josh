// Minimal lightbox: every <a href="image"> in a post that wraps an <img> opens in an overlay,
// and ← / → (or swipe, or the buttons) move through all such images on the page.
(function () {
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.post-body a[href]')
  ).filter(function (a) {
    return /\.(jpe?g|png|gif|webp)(\?.*)?$/i.test(a.getAttribute('href')) && a.querySelector('img');
  });
  if (!links.length) return;

  var index = 0;
  var opener = null;
  var root = document.createElement('div');
  root.className = 'lb';
  root.hidden = true;
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Image viewer');
  root.innerHTML =
    '<button class="lb-btn lb-close" aria-label="Close">&times;</button>' +
    '<button class="lb-btn lb-prev" aria-label="Previous image">&#8249;</button>' +
    '<figure class="lb-fig"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>' +
    '<button class="lb-btn lb-next" aria-label="Next image">&#8250;</button>';
  document.body.appendChild(root);

  var img = root.querySelector('.lb-img');
  var cap = root.querySelector('.lb-cap');
  var prev = root.querySelector('.lb-prev');
  var next = root.querySelector('.lb-next');

  function show(i) {
    index = (i + links.length) % links.length;
    var a = links[index];
    var thumb = a.querySelector('img');
    img.src = a.getAttribute('href');
    img.alt = (thumb && thumb.alt) || '';
    cap.textContent = links.length > 1 ? index + 1 + ' / ' + links.length : '';
    prev.hidden = next.hidden = links.length < 2;
    // warm the neighbours
    [index - 1, index + 1].forEach(function (j) {
      var n = links[(j + links.length) % links.length];
      new Image().src = n.getAttribute('href');
    });
  }

  function open(i, from) {
    opener = from;
    show(i);
    root.hidden = false;
    document.documentElement.classList.add('lb-open');
    root.querySelector('.lb-close').focus();
  }

  function close() {
    root.hidden = true;
    img.removeAttribute('src');
    document.documentElement.classList.remove('lb-open');
    if (opener) opener.focus();
  }

  links.forEach(function (a, i) {
    a.addEventListener('click', function (e) {
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      open(i, a);
    });
  });

  prev.addEventListener('click', function () { show(index - 1); });
  next.addEventListener('click', function () { show(index + 1); });
  root.querySelector('.lb-close').addEventListener('click', close);
  root.addEventListener('click', function (e) {
    if (e.target === root || e.target.classList.contains('lb-fig')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (root.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(index - 1);
    else if (e.key === 'ArrowRight') show(index + 1);
    else if (e.key === 'Tab') {
      // keep focus inside the dialog
      var f = Array.prototype.filter.call(root.querySelectorAll('button'), function (b) { return !b.hidden; });
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  var x0 = null;
  root.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  root.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
  });
})();
