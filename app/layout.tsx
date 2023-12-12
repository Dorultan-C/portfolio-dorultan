import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dorultan | Portfolio Software Engineer  ',
  description: 'Dorultan Cristian is a software engineer based in United Kingdom.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-orange-50 text-gray-950 relative`}>
        <div className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        {children}
        </body>
    </html>
  )
}
