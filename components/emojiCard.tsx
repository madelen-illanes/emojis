import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export interface EmojiCardProps {

    code?: string,
    emoji: string,
    name: string,
    category?: string,
    group?: string,
    subgroup?: string,

}
const EmojiCard:React.FunctionComponent<EmojiCardProps> =({
                                                              code,
                                                              emoji,
                                                              name,
                                                              category,
                                                              group,
                                                              subgroup
                                                          }) => {
    return(
        <React.Fragment>
            <div className='bg-[#F7F6F3] p-2 rounded-xl shadow-md flex flex-col text-center'>
                <span className='text-4xl md:text-5xl mb-2'role={'img'} aria-label={emoji}>{emoji}</span>
                <h3 className='font-bold text-gray-700' >{name}</h3>
<button className='text-blue-500 text text-sm pt-3'>
    more info
</button>
            </div>

        </React.Fragment>
    )
}
export default EmojiCard;