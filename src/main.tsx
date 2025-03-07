import '@styles/index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

// Import the generated route tree
import { CookiesProvider } from 'react-cookie'
import { routeTree } from './routeTree.gen'

export interface RouterContext {
    isAuthenticated: boolean
}

// Create a new router instance
const router = createRouter({
    routeTree,
    context: {
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    },
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <CookiesProvider defaultSetOptions={{ path: '/' }}>
                <RouterProvider router={router} />
            </CookiesProvider>
        </StrictMode>
    )
}
