// Terminal-flavoured extras: matrix rain, typewriter titles, boot sequence, keyboard navigation.
// Everything here is optional and light; nothing loads from elsewhere.
(function () {
  var doc = document, root = doc.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };
  // Effects (typewriter titles, blinking cursor, glitch hover, boot screen) are on by default. The footer button or
  // the "f" key turns them off, and the choice is remembered. We deliberately don't follow the system's "reduce
  // motion" flag: remote desktops and VMs report it even when the person wants the effects.
  var fxOff = store.get('fx') === 'off';
  var reduce = fxOff; // read once at load by the typewriter and boot code below
  root.classList.toggle('fx-off', fxOff);
  var fxb = doc.getElementById('fx-toggle');
  function paintFx() { if (fxb) fxb.textContent = 'effects: ' + (fxOff ? 'off' : 'on'); }
  function setFx(off) { fxOff = off; store.set('fx', off ? 'off' : 'on'); root.classList.toggle('fx-off', off); paintFx(); }
  if (fxb) fxb.addEventListener('click', function () { setFx(!fxOff); });
  paintFx();
  var isTyping = function (el) { return el && (/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable); };

  /* ---------- fit the ASCII logo to the column, whatever monospace font the device has ---------- */
  function fitBanner() {
    var b = doc.querySelector('.banner'); if (!b) return;
    var box = b.parentNode, avail = box.clientWidth; if (!avail) return;
    var keep = [b.style.display, b.style.width];
    b.style.fontSize = '10px'; b.style.display = 'inline-block'; b.style.width = 'auto';
    var natural = b.offsetWidth;
    b.style.display = keep[0]; b.style.width = keep[1];
    if (!natural) return;
    var fs = Math.floor((10 * avail / natural) * 4) / 4; // quarter-pixel steps, rounded down so it never overflows
    b.style.fontSize = Math.max(3, Math.min(19.2, fs)) + 'px';
  }
  fitBanner();
  var fitTimer; addEventListener('resize', function () { clearTimeout(fitTimer); fitTimer = setTimeout(fitBanner, 80); });
  addEventListener('orientationchange', function () { setTimeout(fitBanner, 120); });
  if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(fitBanner);

  /* ---------- the prompt: visitor@<os> ---------- */
  var who = store.get('name') || 'visitor';
  var host = (function () {
    var p = ((navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '') + ' ' + (navigator.userAgent || '');
    if (/android/i.test(p)) return 'android';
    if (/iphone|ipad|ipod/i.test(p)) return 'ios';
    if (/win/i.test(p)) return 'windows';
    if (/mac/i.test(p)) return 'macos';
    if (/cros/i.test(p)) return 'chromeos';
    if (/linux|x11/i.test(p)) return 'linux';
    return 'gunderson.io';
  })();
  function paintPrompt() {
    Array.prototype.forEach.call(doc.querySelectorAll('.who'), function (w) {
      w.textContent = who; w.title = 'click to set your name'; w.tabIndex = 0; w.setAttribute('role', 'button');
    });
    Array.prototype.forEach.call(doc.querySelectorAll('.host'), function (e) { e.textContent = host; });
  }
  function askName() {
    var n = window.prompt('What should the prompt call you? (letters, numbers, - and _; leave empty for "visitor")', who === 'visitor' ? '' : who);
    if (n === null) return;
    n = n.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 16);
    store.set('name', n); who = n || 'visitor'; paintPrompt();
  }
  doc.addEventListener('click', function (e) { if (e.target.classList && e.target.classList.contains('who')) askName(); });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('who')) askName(); });
  paintPrompt();

  /* ---------- matrix rain ---------- */
  var canvas, ctx, raf, cols, drops, last = 0, size = 16;
  var glyphs = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789'.split('');
  function sizeCanvas() {
    canvas.width = innerWidth; canvas.height = innerHeight;
    cols = Math.ceil(canvas.width / size);
    drops = []; for (var i = 0; i < cols; i++) drops[i] = Math.random() * -50;
  }
  function frame(t) {
    raf = requestAnimationFrame(frame);
    if (t - last < 55) return; // ~18 fps
    last = t;
    ctx.fillStyle = 'rgba(21,21,21,0.14)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = size + 'px monospace';
    for (var i = 0; i < cols; i++) {
      var ch = glyphs[(Math.random() * glyphs.length) | 0];
      ctx.fillStyle = Math.random() > 0.97 ? '#e8ffb0' : '#b5e853';
      ctx.fillText(ch, i * size, drops[i] * size);
      if (drops[i] * size > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  var resizeHooked = false;
  function matrix(on, auto) {
    if (on && !canvas) {
      canvas = doc.createElement('canvas');
      canvas.id = 'matrix';
      canvas.setAttribute('aria-hidden', 'true');
      doc.body.insertBefore(canvas, doc.body.firstChild);
      ctx = canvas.getContext('2d');
      sizeCanvas();
      if (!resizeHooked) { resizeHooked = true; addEventListener('resize', function () { if (canvas) sizeCanvas(); }); }
    }
    if (on) { root.classList.add('matrix-on'); if (!raf) raf = requestAnimationFrame(frame); }
    else { root.classList.remove('matrix-on'); if (raf) cancelAnimationFrame(raf); raf = 0; if (canvas) { canvas.remove(); canvas = null; ctx = null; } }
    if (!auto) store.set('matrix', on ? 'on' : 'off'); // the automatic default start doesn't count as a choice
    var b = doc.getElementById('matrix-toggle'); if (b) b.textContent = 'matrix: ' + (on ? 'on' : 'off');
  }
  doc.addEventListener('visibilitychange', function () {
    if (!root.classList.contains('matrix-on')) return;
    if (doc.hidden) { cancelAnimationFrame(raf); raf = 0; } else if (!raf) raf = requestAnimationFrame(frame);
  });
  var mb = doc.getElementById('matrix-toggle');
  if (mb) mb.addEventListener('click', function () { matrix(!root.classList.contains('matrix-on')); });
  if (store.get('matrix') !== 'off') matrix(true, true); // on by default until the visitor turns it off

  /* ---------- typewriter title (post pages) ---------- */
  var h1 = doc.querySelector('article h1');
  if (h1 && !reduce && !location.hash) {
    var full = h1.textContent;
    h1.setAttribute('aria-label', full);
    h1.textContent = '';
    var i = 0, caret = doc.createElement('span');
    caret.className = 'caret'; caret.textContent = '█'; caret.setAttribute('aria-hidden', 'true');
    h1.appendChild(caret);
    (function tick() {
      if (i < full.length) { caret.insertAdjacentText('beforebegin', full.charAt(i++)); setTimeout(tick, 22 + Math.random() * 28); }
      else setTimeout(function () { caret.remove(); }, 900);
    })();
  }

  /* ---------- first-visit boot sequence ---------- */
  var home = doc.body.hasAttribute('data-home');
  var demo = false;
  try { demo = sessionStorage.getItem('demo') === '1'; sessionStorage.removeItem('demo'); } catch (e) {}
  // The browser tells us how this page was reached: 'navigate' (a click or a typed address) or 'reload' (F5 / Ctrl+F5).
  // The boot screen plays on a refresh, on the first-ever visit to the home page, and never when clicking around the site.
  var navEntry = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
  var reloaded = navEntry ? navEntry.type === 'reload' : !!(performance.navigation && performance.navigation.type === 1);
  if (!reduce && (demo || reloaded || (home && !store.get('booted')))) {
    var lines = [
      'BIOS v1.0.2003 ........................ OK',
      'memtest: 640K ......................... OK  (should be enough for anybody)',
      'mounting /dev/blog as /home/josh ...... done',
      'indexing posts ........................ done',
      'loading theme: hacker ................. done',
      'starting dial-up ...................... skipped',
      '',
      'toggles: matrix [m]   crt [c]   effects [f]   help [?]   (or use the footer)',
      'welcome. press any key.',
    ];
    var boot = doc.createElement('div');
    boot.id = 'boot'; boot.setAttribute('role', 'presentation');
    var pre = doc.createElement('pre'); boot.appendChild(pre); doc.body.appendChild(boot);
    var li = 0, done = false;
    var finish = function () { if (done) return; done = true; store.set('booted', '1'); boot.classList.add('bye'); setTimeout(function () { boot.remove(); }, 400); removeEventListener('keydown', finish); boot.removeEventListener('click', finish); };
    addEventListener('keydown', finish); boot.addEventListener('click', finish);
    (function next() {
      if (done) return;
      if (li < lines.length) { pre.textContent += lines[li++] + '\n'; setTimeout(next, reloaded ? 100 : 170); }
      else setTimeout(finish, reloaded ? 450 : 700);
    })();
  }

  /* ---------- keyboard navigation ---------- */
  var base = (doc.querySelector('#a-title') || {}).getAttribute ? doc.querySelector('#a-title').getAttribute('href') : '/';
  var go = function (path) { location.href = base + path; };
  var items = function () { return Array.prototype.slice.call(doc.querySelectorAll('.card h2 a, .ls a, .post-list a')); };
  var cur = -1;
  function focusItem(n) {
    var list = items(); if (!list.length) return;
    cur = Math.max(0, Math.min(list.length - 1, n));
    list.forEach(function (a) { a.classList.remove('kbd'); });
    list[cur].classList.add('kbd'); list[cur].focus({ preventScroll: true });
    list[cur].scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
  }
  var filter = doc.getElementById('filter');
  if (filter) filter.addEventListener('input', function () {
    var q = filter.value.toLowerCase();
    Array.prototype.forEach.call(doc.querySelectorAll('.ls li'), function (li) { li.style.display = li.textContent.toLowerCase().indexOf(q) < 0 ? 'none' : ''; });
    Array.prototype.forEach.call(doc.querySelectorAll('h2.dir'), function (h) {
      var ul = h.nextElementSibling; var any = ul && Array.prototype.some.call(ul.children, function (li) { return li.style.display !== 'none'; });
      h.style.display = any || !q ? '' : 'none'; if (ul) ul.style.display = any || !q ? '' : 'none';
    });
  });
  var help;
  function toggleHelp() {
    if (help) { help.remove(); help = null; return; }
    help = doc.createElement('div'); help.id = 'help'; help.setAttribute('role', 'dialog'); help.setAttribute('aria-label', 'Keyboard shortcuts');
    help.innerHTML = '<pre>' +
      ' j / k     next / previous item in a list\n' +
      ' n / p     newer / older post (on a post page)\n' +
      ' /         filter the archive (grep)\n' +
      ' g h       go home          g a   archive\n' +
      ' g c       categories       g t   tags\n' +
      ' m         toggle matrix    c     toggle crt\n' +
      ' f         toggle effects (typing, glitch, boot screen)\n' +
      ' ?         this help        esc   close\n</pre>';
    help.addEventListener('click', toggleHelp); doc.body.appendChild(help);
  }
  var pendingG = 0;
  addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey || isTyping(e.target)) { if (e.key === 'Escape' && filter && e.target === filter) { filter.blur(); } return; }
    if (doc.querySelector('.lb:not([hidden])') || doc.getElementById('boot')) return;
    var k = e.key;
    if (pendingG && Date.now() - pendingG < 900) {
      pendingG = 0;
      if (k === 'h') return go('');
      if (k === 'a') return go('archive/');
      if (k === 'c') return go('categories/');
      if (k === 't') return go('tags/');
    }
    if (k === 'g') { pendingG = Date.now(); return; }
    if (k === 'j') { e.preventDefault(); focusItem(cur + 1); }
    else if (k === 'k') { e.preventDefault(); focusItem(cur - 1); }
    else if (k === '/' && filter) { e.preventDefault(); filter.focus(); }
    else if (k === 'n') { var a = doc.querySelector('a[rel=next]'); if (a) location.href = a.href; }
    else if (k === 'p') { var b = doc.querySelector('a[rel=prev]'); if (b) location.href = b.href; }
    else if (k === 'm') matrix(!root.classList.contains('matrix-on'));
    else if (k === 'c') { var t = doc.getElementById('crt-toggle'); if (t) t.click(); }
    else if (k === 'f') setFx(!fxOff);
    else if (k === '?') toggleHelp();
    else if (k === 'Escape' && help) toggleHelp();
  });

  /* secret: type "matrix" anywhere */
  var secret = 'matrix', typed = '';
  addEventListener('keydown', function (e) {
    if (isTyping(e.target) || e.key.length !== 1) return;
    typed = (typed + e.key.toLowerCase()).slice(-secret.length);
    if (typed === secret) matrix(true);
  });
})();
