import { SITE_CONFIG } from '@/config'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Inter } from 'next/font/google'
import { OAuthProvider } from './providers/googleOauthProvider'
import { Toaster } from '@/components/ui/toaster'

const font = Inter({ subsets: ['latin'] })
export const metadata = SITE_CONFIG

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden text-neutral-800',
          font.className,
        )}
      >
        <OAuthProvider>{children}</OAuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
