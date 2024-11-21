module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}',
    './node_modules/@ionic/angular/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        iosLight: '#F2F2F7',
        iosDark: '#1C1C1E',
        cardLight: '#FFFFFF',
        cardDark: '#2C2C2E',
        textLight: '#1C1C1E',
        textDark: '#F2F2F7'
      }
    }
  },
  plugins: []
};
