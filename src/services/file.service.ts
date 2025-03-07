import { client } from "./client"

export const fileService = {
    uploadFile: async () => {},
    renameFile: async (id: string, newName: string) => {
        const {data} = await client.patch(`/files/${id}`, {newName})
        return data
    },
    moveFile: async (id: string, targetId: string) => {
        const {data} = await client.patch(`/files/${id}/move`, {targetId})
        return data
    },
    softDeleteFile: async (id: string) => {
        const {data} = await client.delete(`/files/${id}`)
        return data
    },
    hardDeleteFile: async (id: string) => {
        const {data} = await client.delete(`/files/${id}/permanent`)
        return data
    }
}