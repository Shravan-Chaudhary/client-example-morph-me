'use server'

import { cookies } from 'next/headers'

const logout = async () => {
  const cookieStore = await cookies()
  if (cookieStore.has('accessToken')) {
    cookieStore.delete('accessToken')
  }
}

export default logout
