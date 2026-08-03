import { lazy } from 'react'

// pages
export const Landing = lazy(() => import('@/pages/landing/index'))
export const Login = lazy(() => import('@/pages/login/index'))
export const ErrorBoundary = lazy(() => import('@/providers/reactRouter/components/ErrorBoundary'))
export const Profile = lazy(() => import('@/pages/profile/index'))
export const Home = lazy(() => import('@/pages/home/index'))
export const Logout = lazy(() => import('@/pages/logout/index'))

// layout
export const Layout = lazy(() => import('@/providers/reactRouter/components/layout'))

// wrapper
export const MeWrapper = lazy(() => import('@/providers/reactRouter/components/meWrapper'))
export const PlsWait = lazy(() => import('@/pages/plsWait/index'))
