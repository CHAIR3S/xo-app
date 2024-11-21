import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {
    this.initializeTheme();
  }

  private initializeTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.toggleDarkTheme(prefersDark.matches);

    prefersDark.addEventListener('change', (e) => {
      this.toggleDarkTheme(e.matches);
    });
  }

  toggleDarkTheme(shouldEnable: boolean) {
    document.body.classList.toggle('dark', shouldEnable);
  }
}
