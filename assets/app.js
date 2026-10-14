// AI生成
/* cloak — jsonversal · shared helpers (client-side only) */
(function () {
  'use strict';
  var toastEl;
  function toast(msg, isErr) {
    if (!toastEl) toastEl = document.getElementById('toast');
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.className = 'show' + (isErr ? ' err' : '');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.className = ''; }, 1900);
  }
  function copyText(text) {
    if (!text) return Promise.resolve(false);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; },
        function () { return fallbackCopy(text); });
    }
    return Promise.resolve(fallbackCopy(text));
  }
  function fallbackCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) { return false; }
  }
  function copyFrom(btn) {
    var sel = btn.getAttribute('data-copy');
    var node = sel ? document.querySelector(sel) : btn.previousElementSibling;
    var text = node ? (node.value || node.textContent || node.innerText || '') : '';
    if (!text.trim()) { toast('Nothing to copy', true); return; }
    copyText(text).then(function (ok) {
      toast(ok ? 'Copied to clipboard' : 'Copy failed', !ok);
    });
  }
  function initCookieBar() {
    var bar = document.getElementById('cookiebar');
    if (!bar) return;
    var KEY = 'cloaksite-cookie-notice';
    try { if (localStorage.getItem(KEY) === '1') return; } catch (e) {}
    bar.classList.add('show');
    var ok = document.getElementById('cookie-ok');
    if (ok) ok.addEventListener('click', function () {
      bar.classList.remove('show');
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
    });
  }
  // expose
  window.cloak = { toast: toast, copyText: copyText, copyFrom: copyFrom, initCookieBar: initCookieBar };
})();
