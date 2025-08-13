// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
  const userStore = useMyUserStore()

  // Skip di server
  if (process.server) return

  // Jika tidak ada user dan bukan halaman public
  if (!userStore.user) {
    const hasTokens = process.client && 
      localStorage.getItem('token_type') && 
      localStorage.getItem('access_token')

    if (!hasTokens) {
      return navigateTo('/login')
    }
  }
})