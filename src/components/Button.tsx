import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
}

export function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href} target='_blank'
      className="inline-block text-center bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-colors hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
    >
      {children}
    </Link>
  )
}

