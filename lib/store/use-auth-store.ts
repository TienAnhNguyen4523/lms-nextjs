import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { User } from '@/types/auth'
import { authApi } from '@/lib/api/auth'

interface AuthState {
  user: User | null
  isLoading: boolean
  setUser: (user: User | null) => void
  setIsLoading: (loading: boolean) => void
  login: (user: User) => void
  logout: () => void
  initAuth: () => Promise<void>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: true,
      setUser: (user) => set({ user }),
      setIsLoading: (isLoading) => set({ isLoading }),
      login: (userData) => {
        set({ user: userData })
      },
      logout: () => {
        set({ user: null })
      },
      initAuth: async () => {
        set({ isLoading: true })
        try {
          // Check if there's a valid session on the server (handles social login redirects)
          const profile = await authApi.getProfile()
          if (profile) {
            set({ user: profile })
          } else {
            set({ user: null })
          }
        } catch (error) {
          // If profile fetch fails, check if we have a persisted user as fallback
          // or just clear it if the session is definitely invalid
          console.log("No active session found during initialization")
          // We keep the persisted user for a moment but ideally we should verify it
        } finally {
          set({ isLoading: false })
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      // We only want to persist the user object
      partialize: (state) => ({ user: state.user }),
    }
  )
)
