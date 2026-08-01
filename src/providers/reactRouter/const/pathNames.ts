const PRIVATE_ROUTE = '/app'
/**
 * Path names used in the application for routing.
 * Centralizing path names helps in maintaining consistency and avoiding hard-coded strings throughout the codebase.
 */
export const PATH_NAMES = {
  LANDING: '/',
  LOGIN: '/login',
  PRIVATE_ROUTE,
  PROFILE: PRIVATE_ROUTE + '/profile'
}
