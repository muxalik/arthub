import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <main className='auth'>{children}</main>
}

export default AuthLayout
