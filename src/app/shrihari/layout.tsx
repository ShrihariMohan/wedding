import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shrihari Weds Anusha!',
  description: 'Join us for our special day!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://shriharianusha.life/og-1.jpeg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

