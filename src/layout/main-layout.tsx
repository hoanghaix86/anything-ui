import { AppHeader } from '@components/app-header'
import { AppSidebar } from '@components/app-sidebar'
import { SidebarProvider } from '@components/ui/sidebar'
import { Outlet } from '@tanstack/react-router'
import { useCookies } from 'react-cookie'
import { Fragment } from 'react/jsx-runtime'

const MainLayout = () => {
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

export { MainLayout }
