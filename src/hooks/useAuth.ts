import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  user: {
    name: string
    email: string
  } | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

// In a real application, this would connect to a backend
export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: async (email: string, password: string) => {
        // This is a mock implementation, in a real app you would:
        // 1. Make an API call to verify credentials
        // 2. Receive and store a JWT token
        // 3. Set authenticated state based on API response

        // Mock validation (replace with actual API call)
        if (email === 'admin@example.com' && password === 'password123') {
          set({ 
            isAuthenticated: true, 
            user: {
              name: 'Admin User',
              email: email
            } 
          })
          return true
        }
        return false
      },
      logout: () => {
        set({ isAuthenticated: false, user: null })
      }
    }),
    {
      name: 'auth-storage'
    }
  )
)
