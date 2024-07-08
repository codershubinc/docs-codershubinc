'use client'
import React from 'react'

function PageUi({children}: {children: React.ReactNode}) {
  return (
    <main
    className=' bg-slate-500 dark:bg-black dark:text-white min-h-screen h-max'
    >
        {children}
    </main>
  )
}

export default PageUi