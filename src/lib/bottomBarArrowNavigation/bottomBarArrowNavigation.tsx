'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LeftAngleIcon, RightAngleIcon } from '@/assets/images/index'
interface BottomBarArrowNavigationProps {
    nextLink: string
    prevLink: string
    nextLinkTitle?: string
    prevLinkTitle?: string
}

function BottomBarArrowNavigation({ nextLink, prevLink, nextLinkTitle, prevLinkTitle }: BottomBarArrowNavigationProps) {
    return (
        <div  >
            <div
                className={'text-blue-400 cursor-pointer  bg-slate-800 hover:bg-slate-700  border border-solid border-slate-700 rounded-2xl text-center justify-center items-center  p-2 m-2  hover:underline fixed left-0 bottom-2 min-w-[80px] w-max ' + (!prevLinkTitle? 'hidden' : '')}
            >
                <Link
                    href={prevLink}
                    className='flex justify-between items-center text-center'
                >
                    <Image
                        src={LeftAngleIcon}
                        alt="LeftAngleIcon"
                        width={20}
                        height={20}
                        className='m-2 invert transition-transform duration-700 hover:bg-slate-100  rounded-lg'
                    />
                    {prevLinkTitle}
                </Link>
            </div>


            <div
                className={'text-blue-400 cursor-pointer  bg-slate-800 hover:bg-slate-700  border border-solid border-slate-700 rounded-2xl text-center justify-center items-center  p-2 m-2  hover:underline fixed right-0 bottom-2 min-w-[80px] w-max ' + (!nextLinkTitle? 'hidden' : '' )}
            >

                <Link
                    href={nextLink}
                    className='flex justify-between items-center text-center'
                >
                    {nextLinkTitle}
                    <Image
                        src={RightAngleIcon}
                        alt="RightAngleIcon"
                        width={20}
                        height={20}
                        className=' m-2 invert transition-transform duration-700 hover:bg-slate-100  rounded-lg'
                    />
                </Link>
            </div>
        </div>
    )
}

export default BottomBarArrowNavigation