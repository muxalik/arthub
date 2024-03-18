import MenuNav from '@/components/shared/menu-nav'
import Sidebar from '@/components/shared/sidebar'
import { Toaster } from '@/components/ui/toaster'
import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main className='root'>
      <Sidebar />
      <MenuNav />

      <div className='root-container'>
        <div className='wrapper'>{children}</div>
      </div>

      <Toaster />
    </main>
  )
}

export default RootLayout
