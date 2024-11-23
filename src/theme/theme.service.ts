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
      this.setDarkMode(prefersDark.matches);
  
      prefersDark.addEventListener('change', (e) => {
        this.setDarkMode(e.matches);
      });
    }
  
    setDarkMode(isDarkMode: boolean) {
      if (isDarkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
}
