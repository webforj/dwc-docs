(function () {
  var versions = [
    { label: 'Latest', path: '/docs/' },
    { label: 'BBj 25', path: '/25-docs/' },
    { label: 'BBj 24', path: '/24-docs/' },
    { label: 'BBj 23', path: '/23-docs/' }
  ];

  function getCurrentVersion() {
    var path = window.location.pathname;
    for (var i = 0; i < versions.length; i++) {
      if (path.indexOf(versions[i].path) !== -1) {
        return versions[i];
      }
    }
    return versions[0];
  }

  function create() {
    var current = getCurrentVersion();

    var select = document.createElement('select');
    select.className = 'version-selector';
    select.setAttribute('aria-label', 'Select documentation version');

    versions.forEach(function (v) {
      var option = document.createElement('option');
      option.value = v.path;
      option.textContent = v.label;
      if (v.path === current.path) {
        option.selected = true;
      }
      select.appendChild(option);
    });

    select.addEventListener('change', function () {
      var hash = window.location.hash || '';
      window.location.href = select.value + hash;
    });

    // Insert into sidebar before the search box
    var sidebar = document.querySelector('.sidebar');
    var search = sidebar ? sidebar.querySelector('.search') : null;
    if (search) {
      search.parentNode.insertBefore(select, search);
    } else if (sidebar) {
      var nav = sidebar.querySelector('.sidebar-nav');
      if (nav) {
        nav.parentNode.insertBefore(select, nav);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', create);
  } else {
    setTimeout(create, 100);
  }
})();
