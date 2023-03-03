import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import RootLayout from "@/app/layout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

      // eslint-disable-next-line react/jsx-no-undef
      <RootLayout>
        <h1 className='text-red-500'>HELLO</h1>
      </RootLayout>

  )
}
