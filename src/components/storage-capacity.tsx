import { Progress } from '@components/ui/progress'

export interface StorageCapacityProps {
    used: number
    total: number
}

export const StorageCapacity = ({ used, total }: StorageCapacityProps) => {
    const percentage = Math.min(100, Math.round((used / total) * 100))

    return (
        <div className="px-3 py-4">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">Storage</span>
                <span className="text-xs text">{percentage}%</span>
            </div>
            <Progress value={percentage} />
            <p className="mt-2 text-xs ">
                {used} GB of {total} GB used
            </p>
        </div>
    )
}
