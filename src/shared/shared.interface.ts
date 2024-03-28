export const ROUTES = {
  HOME: '/'
}

export enum AUTH_MESSAGE {
  USER_LOGGED_IN = 'User logged in successfully',
  USER_LOGGED_OUT = 'User logged out successfully',
  USER_LOGIN_FAILED = 'User login failed',
  EMAIL_SENT = 'Email sent successfully'
}

export interface IUser {
  uid: string
  email: string
}

export enum LAYOUT {
  LAYOUT = 'layout',
  DEFAULT = 0,
  CUSTOM = 1
}

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark'
}
