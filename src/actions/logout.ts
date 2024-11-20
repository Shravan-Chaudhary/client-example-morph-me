'use server'

import { cookies } from 'next/headers'

const logout = async () => {
  const cookieStore = await cookies()
  cookieStore.delete('accessToken')
}

export default logout
