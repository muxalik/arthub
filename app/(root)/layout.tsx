import Sidebar from '@/components/shared/sidebar'
import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayour = ({ children }: RootLayoutProps) => {
  return (
    <main className='root'>
      <Sidebar />

      <div className='root-container'>
        <div className='wrapper'>{children}</div>
      </div>
    </main>
  )
}

export default RootLayour
