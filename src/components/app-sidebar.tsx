import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@components/ui/sidebar'
import {
    FileUp,
    FolderPlus,
    FolderUp,
    HardDrive,
    Plus,
    Trash,
    UsersRound,
} from 'lucide-react'
import { StorageCapacity } from '@components/storage-capacity'
import { Button } from '@components/ui/button'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'

const items = [
    {
        title: 'My Drive',
        url: '#',
        icon: HardDrive,
    },
    {
        title: 'Shared with me',
        url: '#',
        icon: UsersRound,
    },
    {
        title: 'Trash',
        url: '#',
        icon: Trash,
    },
]

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader className="h-16">
                <span className="text-2xl font-bold w-full h-full flex items-center justify-center">
                    Anything
                </span>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    {/* <SidebarGroupContent>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    className="w-full justify-start"
                                    variant="ghost"
                                >
                                    <Plus />
                                    Mới
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuItem>
                                    <FolderPlus />
                                    Thư mục mới
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <FileUp />
                                    Tải tệp lên
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <FolderUp />
                                    Tải thư mục lên
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarGroupContent> */}
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <StorageCapacity used={25} total={100} />
            </SidebarFooter>
        </Sidebar>
    )
}

export { AppSidebar }
