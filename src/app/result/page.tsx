'use client'

import { useUser } from '@/app/contexts/UserContext'

export default function Result() {
  const { user } = useUser()

  console.log(user)

  return (
    <div className="h-full">
      <h1>{user?.name}</h1>
    </div>
  )
}
