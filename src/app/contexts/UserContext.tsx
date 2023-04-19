'use client'

import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'

import { calculateWithdrawFgtsAmount } from '@/utils'

interface User {
  name: string
  birthdayMonth: string
  balanceFgts?: number
  withdrawFgts?: number
}

interface UserContextType {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext({} as UserContextType)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    name: '',
    birthdayMonth: '',
    balanceFgts: 0,
    withdrawFgts: 0,
  })

  useEffect(() => {
    if (user.balanceFgts && user.balanceFgts > 0) {
      const totalWithdrawAmount = calculateWithdrawFgtsAmount(
        user.balanceFgts,
        user.birthdayMonth,
      )

      setUser((prevUser) => {
        if (prevUser.withdrawFgts !== totalWithdrawAmount) {
          return {
            ...prevUser,
            withdrawFgts: totalWithdrawAmount,
          }
        }

        return prevUser
      })
    }
  }, [user.balanceFgts, user.birthdayMonth])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  return context
}
