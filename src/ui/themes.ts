/**
 * Nashiuso Portfolio
 * Author: Nashiuso
 * GitHub: https://github.com/nashiuso
 * License: MIT
 */

import type { Theme } from '../types';

const THEMES: Theme[] = ['blue', 'retro'];

export function initTheme(): void {
  const themeBtn = document.getElementById('theme-toggle') as HTMLButtonElement;

  const savedTheme   = localStorage.getItem('nashiuso-theme') as Theme;
  const initialTheme = THEMES.includes(savedTheme) ? savedTheme : 'blue';

  document.body.setAttribute('data-theme', initialTheme);
  if (themeBtn) themeBtn.innerText = `[ THEME: ${initialTheme.toUpperCase()} ]`;

  themeBtn?.addEventListener('click', () => {
    const currentTheme = (document.body.getAttribute('data-theme') as Theme) || 'blue';
    const nextIdx      = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
    const newTheme     = THEMES[nextIdx] as Theme;

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('nashiuso-theme', newTheme);
    themeBtn.innerText = `[ THEME: ${newTheme.toUpperCase()} ]`;
  });
}
