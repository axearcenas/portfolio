/* Apply before styles load to avoid a flash of the wrong theme. */
(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved = null;
  try { saved = localStorage.getItem('portfolio-theme'); } catch {}
  if (saved !== 'light' && saved !== 'dark') saved = null;
  function apply(theme) {
    root.dataset.theme = theme;
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.textContent = `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`;
      button.setAttribute('aria-label', `Theme: ${theme}. Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#17191d' : '#f8f9fb';
  }
  apply(saved || (preference.matches ? 'dark' : 'light'));
  preference.addEventListener('change', () => {
    if (!saved) apply(preference.matches ? 'dark' : 'light');
  });
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme-toggle');
    button.hidden = false;
    apply(root.dataset.theme);
    button.addEventListener('click', () => {
      saved = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('portfolio-theme', saved); } catch {}
      apply(saved);
    });
  });
})();
