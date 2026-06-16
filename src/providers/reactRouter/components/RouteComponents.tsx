import { lazy } from 'react'

// pages
export const Home = lazy(() => import('@/pages/home/index'))
export const Login = lazy(() => import('@/pages/login/index'))
export const ErrorBoundary = lazy(() => import('@/providers/reactRouter/components/ErrorBoundary'))
