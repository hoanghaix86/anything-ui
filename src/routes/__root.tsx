import { Fragment } from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { SidebarProvider } from '@src/components/ui/sidebar'
import { AppSidebar } from '@src/components/app-sidebar'
import { useCookies } from 'react-cookie'
import { AppHeader } from '@components/app-header'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    const [cookies] = useCookies(['sidebar_state'])
    const defaultOpen = cookies['sidebar_state']
    return (
        <Fragment>
            <SidebarProvider defaultOpen={defaultOpen}>
                <AppSidebar />
                <main className="flex-1 flex flex-col">
                    <AppHeader />
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 overflow-auto">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </SidebarProvider>
        </Fragment>
    )
}
