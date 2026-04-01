(function () {
  var sunSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="12" cy="12" r="5"></circle>' +
    '<line x1="12" y1="1" x2="12" y2="3"></line>' +
    '<line x1="12" y1="21" x2="12" y2="23"></line>' +
    '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>' +
    '<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>' +
    '<line x1="1" y1="12" x2="3" y2="12"></line>' +
    '<line x1="21" y1="12" x2="23" y2="12"></line>' +
    '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>' +
    '<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>' +
    '</svg>';

  var moonSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>' +
    '</svg>';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-app-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function createToggle() {
    var isDark = localStorage.getItem('theme') === 'dark';

    // Apply saved theme on load
    applyTheme(isDark ? 'dark' : 'light');

    var toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    if (isDark) toggle.classList.add('dark');
    toggle.setAttribute('aria-label', 'Toggle dark mode');

    var thumb = document.createElement('div');
    thumb.className = 'theme-toggle__thumb';
    thumb.innerHTML = isDark ? moonSvg : sunSvg;
    toggle.appendChild(thumb);

    toggle.addEventListener('click', function () {
      var goingDark = !toggle.classList.contains('dark');
      var newTheme = goingDark ? 'dark' : 'light';

      // Get toggle center for circle origin
      var rect = toggle.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;

      // Inject keyframes with toggle position
      var kfEl = document.getElementById('theme-reveal-kf');
      if (kfEl) kfEl.remove();

      var kfStyle = document.createElement('style');
      kfStyle.id = 'theme-reveal-kf';
      kfStyle.textContent =
        '@keyframes theme-reveal {' +
        '0% { clip-path: circle(0% at ' + cx + 'px ' + cy + 'px); }' +
        '100% { clip-path: circle(150% at ' + cx + 'px ' + cy + 'px); }' +
        '}';
      document.head.appendChild(kfStyle);

      if (document.startViewTransition) {
        document.startViewTransition(function () {
          applyTheme(newTheme);
          toggle.classList.toggle('dark', goingDark);
          thumb.innerHTML = goingDark ? moonSvg : sunSvg;
        });
      } else {
        applyTheme(newTheme);
        toggle.classList.toggle('dark', goingDark);
        thumb.innerHTML = goingDark ? moonSvg : sunSvg;
      }
    });

    document.body.appendChild(toggle);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createToggle);
  } else {
    createToggle();
  }
})();
