const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    port: 8081
  },
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js', // Punto de entrada para la página principal
      template: 'public/index.html', // Plantilla HTML para la página principal
      filename: 'index.html' // Nombre del archivo de salida
    },
    prueba_each: {
      entry: 'src/prueba_each.js', // Punto de entrada para la nueva página "prueba_each"
      template: 'public/prueba_each.html', // Plantilla HTML para la nueva página
      filename: 'prueba_each.html' // Nombre del archivo de salida
    },
    funcion_bind: {  // Nueva configuración para la página funcion_bind
      entry: 'src/funcion_bind.js',
      template: 'public/funcion_bind.html',
      filename: 'funcion_bind.html'
    },
    Login: {
      entry: 'src/Login.js',
      template: 'public/Login.html',
      filename: 'Login.html'
    },
    funcion_logo: {
      entry: 'src/pagina_principal.js',
      template: 'public/pagina_principal.html',
      filename: 'pagina_principal.html'
    }
  }
})
