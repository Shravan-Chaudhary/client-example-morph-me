'use client'

import { GoogleOAuthProvider } from '@react-oauth/google'

export function OAuthProvider({ children }: { children: React.ReactNode }) {
  if (!process.env.NEXT_PUBLIC_CLIENT_ID) {
    throw new Error('Missing NEXT_PUBLIC_CLIENT_ID')
  }
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  )
}
