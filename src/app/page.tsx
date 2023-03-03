import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import RootLayout from "@/app/layout";
import EmojiCard from "../../components/emojiCard";
import List from "../../components/list";
import emojisData from "../../data/emojis (1)";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (

      <RootLayout>
          <h1 className='text-2xl md:text-5xl fond-bold text-gray-600 text-center tracking-wide'>Welcome to Infoji</h1>
          <div>
              <input
              className='w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1'
              id='name'
              type={'text'}
              placeholder='Search for emoji'
              />
          </div>
        <List emojis={emojisData.slice(0, 100)}
        />

      </RootLayout>

  )
}
