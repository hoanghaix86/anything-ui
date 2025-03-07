import { client } from './client'

export type TSeachReq = {
    name?: string
}

// export interface Folder {
//     id: string
//     name: string
//     type: string
// }

// export interface File {
//     id: string
//     name: string
//     type: string
// }

export interface IObject {
    id: string
    name: string
    type: 'folder' | 'file'
}

export const searchService = {
    search: async () => {
        const { data } = await client.get<IObject[]>('/search')

        const folders = data.filter((item) => item.type === 'folder')
        const files = data.filter((item) => item.type === 'file')

        return [folders, files]
    },
}
