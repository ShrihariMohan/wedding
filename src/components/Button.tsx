import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
}

export function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href} target='_blank'
      className=" text-center bg-orange-500 text-white px-4 py-2 rounded-xl text-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    >
      {children}
    </Link>
  )
}

