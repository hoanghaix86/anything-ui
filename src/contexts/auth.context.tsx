import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthState {
    isAuthenticated: boolean
}

interface AuthAction {
    signOut: () => void
}

export const useAuth = create<AuthState & AuthAction>()(
    devtools(
        persist(
            (set) => ({
                isAuthenticated: false,
                signOut: () => set({ isAuthenticated: false }),
            }),
            {
                name: 'auth',
            }
        )
    )
)
