import { Button } from '@components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@components/ui/dialog'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { useForm } from '@tanstack/react-form'
import { FolderPlus } from 'lucide-react'

export const CreateFolderDialog = () => {
    // const form = useForm({
    //     defaultValues: {
    //         name: '',
    //     },
    //     onSubmit: async ({ value }) => {},
    // })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <FolderPlus />
                    Thư mục mới
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Thư mục mới</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input placeholder="..." />
                    </div>
                </div>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Hủy
                        </Button>
                    </DialogClose>
                    {/* <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Tạo
                        </Button>
                    </DialogClose> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
