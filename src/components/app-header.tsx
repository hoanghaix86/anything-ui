import { SidebarTrigger } from '@components/ui/sidebar'
import { Button } from '@components/ui/button'
import { Grid2X2 } from 'lucide-react'
import { Bell } from 'lucide-react'
import { AvatarMenu } from '@components/menu-avatar'

const AppHeader = () => {
    return (
        <header className="h-16 w-full border-b flex justify-between items-center px-4">
            <div>
                <SidebarTrigger className="size-8" />
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <Grid2X2 />
                </Button>
                <Button variant="ghost" size="icon">
                    <Bell />
                </Button>
                <AvatarMenu />
            </div>
        </header>
    )
}

export { AppHeader }
