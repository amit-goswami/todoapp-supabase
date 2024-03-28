export const ROUTES = {
  HOME: '/'
}

export enum AUTH_MESSAGE {
  USER_LOGGED_IN = 'User logged in successfully',
  USER_LOGGED_OUT = 'User logged out successfully'
}

export interface IUser {
  uid: string
  email: string
}
