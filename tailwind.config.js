module.exports = {
  purge: [],
  darkMode: true, // o 'media' o 'class'
  theme: {
    extend: {
      backgroundColor: {
        dark: '#2d3748', // Define un color personalizado para el fondo oscuro
      },
      textColor: {
        light: '#ffffff', // Define un color personalizado para la letra bonita
      },
    },
    container: {
      center: true, // Centra el contenido del contenedor
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
