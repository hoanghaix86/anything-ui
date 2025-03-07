import SignInPage from '@src/pages/auth/signin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/auth/signin')({
    component: SignInPage,
})
