module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif']
      },
      extend: {
        fontFamily: {
          'rosario': ['Rosario', 'Roboto', 'sans-serif']
        }
      }
    },
    variants: {},
    plugins: [],
}