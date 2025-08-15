import { defineStore } from 'pinia'
import axios from 'axios'
export interface User {
  id: number
  name: string
  email: string
  profile_photo_url?: string
}

export interface UserState {
  user: User | null
  loading: boolean
}

export const useMyUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    loading: false
  }),

  getters: {
    isLoggedIn: (state): boolean => state.user !== null,
    getUser: (state): User | null => state.user
  },

  actions: {
    setUser(user: User | null) {
      this.user = user
    },

    setLoading(loading: boolean) {
      this.loading = loading
    },

    async fetchUser() {
      // Skip di server-side
      if (process.server) return

      this.loading = true

      try {
        const tokenType = localStorage.getItem('token_type')
        const accessToken = localStorage.getItem('access_token')

        if (!tokenType || !accessToken) {
          this.user = null
          this.loading = false
          await navigateTo('/login')
          return
        }
        
        const { data } = await axios.get('http://zullkit-backend-main.test/api/user', {
          headers: {
            Authorization: `${tokenType} ${accessToken}`
          }
        })
        this.user = data.data
      } catch (error) {
        console.error('Fetch user error:', error)
        this.user = null
        
        // Clear tokens
        if (process.client) {
          localStorage.removeItem('token_type')
          localStorage.removeItem('access_token')
        }
        
        await navigateTo('/login')
      } finally {
        this.loading = false
      }
    },

    async logout() {
      if (process.server) return

      this.user = null
      
      if (process.client) {
        localStorage.removeItem('token_type')
        localStorage.removeItem('access_token')
      }
      
      await navigateTo('/login')
    }
  }
})