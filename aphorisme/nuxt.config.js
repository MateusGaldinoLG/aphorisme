export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aphorisme',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // for phone testing
  // server: {
  //   host: '0.0.0.0'
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap-vue'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // for google fonts
    '@nuxtjs/google-fonts',
    // for global scss variables
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3030'
  },

  auth: {
    localStorage: {
      prefix: 'auth'
    },
    // cookie: {
    //   options: {
    //     expires: 7
    //   }
    // },
    // Nuxt-auth configuration
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: 'api/auth/login', method: 'post' },
          logout: { url: 'api/auth/logout', method: 'delete' },
          user: { url: '/user', method: 'get' }
        }
      }
    }
  },

  // google-fonts module configuration
  googleFonts: {
    families: {
      Merriweather: true
    },
    useStylesheet: true
  },

  // scss variables module configuration
  styleResources: {
    scss: [
      './assets/scss/utilities/main.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
