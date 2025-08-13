// plugins/auth.client.ts
export default defineNuxtPlugin(async () => {
  const userStore = useMyUserStore()

  // Hanya jalankan di client
  if (process.client) {
    const tokenType = localStorage.getItem('token_type')
    const accessToken = localStorage.getItem('access_token')

    // Jika ada token, coba fetch user
    if (tokenType && accessToken && !userStore.user) {
      try {
        await userStore.fetchUser()
      } catch (error) {
        console.log('Auto-login failed:', error)
      }
    }
  }
})