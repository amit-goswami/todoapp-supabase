import './globals.css'
import type { Metadata } from 'next'
import { ErrorBoundary } from '@/templates/error-boundary'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { SupaBaseProvider } from '@/providers/SupaBaseProvider'
import { ProtectedBoundary } from '@/templates/protected-boundary'
import { Layouts } from '@/layouts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Awesome todoapp to store your awesome todos'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <ErrorBoundary>
          <SupaBaseProvider>
            <Layouts>
              <ProtectedBoundary>{children}</ProtectedBoundary>
            </Layouts>
          </SupaBaseProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
