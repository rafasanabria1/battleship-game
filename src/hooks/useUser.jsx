import { useEffect, useState } from 'react'
import { onAuthStateChanged } from '../firebase/client'

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}

export default function useUser () {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    if (user === USER_STATES.NOT_LOGGED) console.log('no logueado')
    else if (user === USER_STATES.NOT_KNOWN) console.log('no sabemos')
    else console.log(user)
  })

  return user
}
