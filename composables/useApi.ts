// composables/useApi.ts
interface ApiResponse<T> {
  data: T
  message: string
  status: string
}

interface Product {
  id: number
  name: string
  subtitle: string
  description: string
  thumbnails: string[]
  galleries: string[]
  features: string
  is_figma: number
  is_sketch: number
  file?: string
}

export const useApi = () => {
  const config = useRuntimeConfig()
  
  const apiFetch = $fetch.create({
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      const token = useCookie('auth-token')
      
      // Type-safe headers menggunakan Record<string, string>
      const headers: Record<string, string> = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(options.headers as Record<string, string> || {})
      }
      
      if (token.value) {
        headers['Authorization'] = `Bearer ${token.value}`
      }
      
      options.headers = headers
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        const authToken = useCookie('auth-token')
        authToken.value = null
        if (process.client) {
          navigateTo('/login')
        }
      }
    }
  })

  return { apiFetch }
}

// Specific composable untuk products
export const useProductApi = () => {
  const { apiFetch } = useApi()
  
  const getProduct = async (id: string | number): Promise<ApiResponse<Product>> => {
    return await apiFetch('/products', {
      params: { id }
    })
  }
  
  return { getProduct }
}