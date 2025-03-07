import { Button } from '@components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { IObject } from '@src/services/search.service'
import { EllipsisVertical, File, Folder } from 'lucide-react'

export type ObjectItemProps = IObject

export const ObjectItem = (props: ObjectItemProps) => {
    return (
        <div className="border rounded p-2 flex gap-2 items-center">
            <div>
                <Folder />
            </div>
            <div className="flex-1">
                <p className="line-clamp-1 select-none">{props.name}</p>
            </div>
            <div>
                {/* <DropdownMenu> */}
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                        <EllipsisVertical />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuItem>Tải xuống</DropdownMenuItem>
                    <DropdownMenuItem>Đổi tên</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Chia sẻ</DropdownMenuItem>
                </DropdownMenuContent>
                {/* {/* </DropdownMenu> */}
            </div>
        </div>
    )
}
