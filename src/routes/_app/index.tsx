import HomePage from '@src/pages/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/')({
    component: HomePage,
})
