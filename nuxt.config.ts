// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Runtime config untuk environment variables
  runtimeConfig: {
    // Server-side only (private)
    apiSecret: process.env.API_SECRET,
    
    // Public (exposed to client-side)
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3001',
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'UIStore',
      environment: process.env.NODE_ENV || 'development'
    }
  },

   // Alternatif: Menggunakan appConfig (static)
  appConfig: {
    // Ini akan di-compile saat build time
    apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3001'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-aos', '@pinia/nuxt', '@nuxtjs/color-mode'],
  ssr: false,
  nitro: {
    experimental: {
      wasm: true
    }
  },
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error',
        'brand'
      ]
    }
  },
     loading: false,
})

// Type declaration untuk autocompletion
declare module '@nuxt/schema' {
  interface RuntimeConfig {
    apiSecret: string
  }
  interface PublicRuntimeConfig {
    apiBase: string
    appName: string
    environment: string
  }
}