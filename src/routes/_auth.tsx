import { useAuth } from '@src/contexts/auth.context'
import {
    createFileRoute,
    Outlet,
    redirect,
    useNavigate,
} from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/_auth')({
    component: () => <Outlet />,
})
