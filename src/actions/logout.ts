'use server'

import { cookies } from 'next/headers'

const logout = async () => {
  ;(await cookies()).set('accessToken', '', { maxAge: 0 })
  ;(await cookies()).delete('accessToken')
}

export default logout
