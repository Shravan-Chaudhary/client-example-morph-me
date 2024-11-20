'use server'

import { cookies } from 'next/headers'

const logout = async () => {
  const cookieStore = await cookies()
  if (cookieStore.has('accessToken')) {
    cookieStore.delete({
      name: 'accessToken',
      path: '/',
      domain: 'morph-me.vercel.app', // Same domain you used when setting
      secure: true,
      httpOnly: true,
      sameSite: 'none',
    })
  }
}

export default logout
