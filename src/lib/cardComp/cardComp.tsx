'use client'
import React from 'react'
import { cn } from '../utils'
import Image from 'next/image';
interface CardCompProps {
    contentArray: {
        title: string;
        content: string
        className?: string
        titleFont?: string
        contentFont?: string
        bgImage?: string
    }[]
}

function CardComp({ contentArray }: CardCompProps) {
    console.log(contentArray[0]);

    return (
        <div
            className='flex  flex-wrap  mx-auto'
        >
            {contentArray && contentArray.map((content, index) => (
                <div
                    key={index}
                    className={cn('  justify-center items-center text-center w-[350px] h-[220px]  mt-2 mx-auto gap-4 border-slate-600 border border-solid rounded-md p-4 bg-gray-900 font-jetbrains cursor-pointer hover:bg-slate-600 hover:rounded-xl transition-all duration-300 animate-out', content.className)}
                >
                    <p
                        className={cn('text-2xl  text-white bg-slate-800 rounded-xl  h-[25%] justify-center items-center ', content.titleFont)}
                    >
                        {content.title || 'Title:'}
                    </p>
                    {!content.bgImage ?
                        <div className='h-[75%] justify-center items-center;'>
                            <p className={cn('h-max my-auto text-center justify-center', content.contentFont)}>
                                {content.content || 'Content:'}
                            </p>
                        </div>
                        :
                        <div className='h-[75%] justify-center items-center;'>
                            <Image
                                src={content.bgImage}
                                className='h-full w-full object-cover'
                                alt="bgImage"
                            />
                        </div>


                    }
                </div>
            ))}

        </div>
    )
}

export default CardComp