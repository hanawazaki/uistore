import axios from 'axios';
import { defineStore } from 'pinia'

interface User{
  id: Number,
  name:String,
  email:String
}

interface MyUserState {
  user: User | false;
  loading: boolean;
}

export const useMyUserStore = defineStore('user',{
  state:  (): MyUserState => ({
    user:false,
    loading: false
   }),
 getters:{
  isLoggedIn: (state): boolean => state.user !== false,
    getUser: (state): User | false => state.user,
 },
 actions: {
    async fetchUser(): Promise<void> {
      const router = useRouter()

      try {
        this.loading = true
        const { data } = await axios.get<User>('http://zullkit-backend-main.test/api/user', {
          headers: {
            Authorization: `${localStorage.getItem('token_type') || ''} ${localStorage.getItem('access_token') || ''}`
          },
        })
        this.user = data
      } catch (error) {
        this.user = false
        router.push('/login')
      } finally {
        this.loading = false
      }
    },
  },
})
