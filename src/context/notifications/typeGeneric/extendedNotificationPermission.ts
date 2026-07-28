export type ExtentedNotificationPermission =
  | NotificationPermission
  | 'not-supported'
  | 'unknown-error'
  | 'initial'
  | 'checking'
