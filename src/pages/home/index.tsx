import { Button } from '@components/ui/button'
import { IObject, searchService } from '@src/services/search.service'

import { EllipsisVertical, FileUp, Folder, FolderUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ObjectItem } from './item'
import { CreateFolderDialog } from './create-folder-dialog'
import { DropdownMenu } from '@components/ui/dropdown-menu'

const HomePage = () => {
    const [folders, setFolders] = useState<IObject[]>([])
    const [files, setFiles] = useState<IObject[]>([])

    useEffect(() => {
        ;(async () => {
            const [folders, files] = await searchService.search()
            setFolders(folders)
            setFiles(files)
        })()
    }, [])

    return (
        <>
            <div className="p-4">
                <div className="flex gap-2">
                    {/* <CreateFolderDialog /> */}
                    <Button variant="outline">
                        <FileUp />
                        Tải tệp lên
                    </Button>
                    <Button variant="outline">
                        <FolderUp />
                        Tải thư mục lên
                    </Button>
                </div>
            </div>
            <div className="p-4">
                <DropdownMenu>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-lg font-medium select-none">
                            Thư mục
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1">
                        {folders.map((folder, index) => (
                            <div
                                key={index}
                                className="border rounded p-2 flex gap-2 items-center min-w-fit"
                            >
                                <div>
                                    <Folder />
                                </div>
                                <div className="flex-1">
                                    <p className="line-clamp-1 select-none">
                                        {folder.name}
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
                        <p className="text-lg font-medium select-none">
                            Tập tin
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1">
                        {files.map((file, index) => (
                            <ObjectItem key={index} {...file} />
                        ))}
                    </div>
                </DropdownMenu>
            </div>
        </>
    )
}

export default HomePage
