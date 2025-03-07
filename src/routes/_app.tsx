import { useAuth } from '@src/contexts/auth.context'
import { MainLayout } from '@src/layout/main-layout'
import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/_app')({
    component: () => <MainLayout />,
})
