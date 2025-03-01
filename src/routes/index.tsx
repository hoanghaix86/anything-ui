import { Button } from '@components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { EllipsisVertical, File, Folder } from 'lucide-react'

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-medium">Thư mục</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="border rounded p-2 flex gap-2 items-center min-w-fit"
                    >
                        <div>
                            <Folder />
                        </div>
                        <div className="flex-1">
                            <p className="line-clamp-1">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Nemo, in?
                            </p>
                        </div>
                        <div>
                            <Button variant="ghost">
                                <EllipsisVertical />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center mb-2 mt-2">
                <p className="text-lg font-medium">Tập tin</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="border rounded p-2 flex gap-2 items-center"
                    >
                        <div>
                            <File />
                        </div>
                        <div className="flex-1">
                            <p className="line-clamp-1">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Nemo, in?
                            </p>
                        </div>
                        <div>
                            <Button variant="ghost">
                                <EllipsisVertical />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
