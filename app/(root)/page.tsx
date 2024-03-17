import { UserButton } from '@clerk/nextjs'

const HomePage = () => {
  return (
    <div>
      <p>HomePage</p>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default HomePage
