import CodeSpace from '@/lib/codeSpace/codeSpace'
import DocTitle from '@/lib/docTitle/docTitle'
import PageUi from '@/lib/pageUi/PageUi'
import React from 'react'

function page() {
    return (
        <PageUi>
            <DocTitle
                title='loops'
                className=''
            />
            <div>
                <h2 className='text-center text-lg justify-center items-center flex flex-col h-max my-auto text-slate-500'>
                    Loops
                </h2>
            </div>
            <div>
                <CodeSpace
                    codeTitle='Looping through a list'
                    codeHtmlElement={
                        <div
                            className="text-center justify-center items-center flex flex-col h-max my-auto "
                        >
                            <code>
                                <div className='flex flex-row'>
                                    <p className='text-green-400'>list</p>
                                    <span className='text-red-400'> = </span>
                                    [1, 2, 3, 4, 5]
                                </div>
                                <div>
                                    <p className='text-gray-700'>
                                        # This is a list of numbers
                                    </p>
                                </div>
                            </code>

                            <code>
                                <div className='flex flex-row'>
                                    <p className='text-green-400'>for</p>
                                    <span className='text-red-400'> </span>
                                    <p className='text-green-400'>i</p>
                                    <span className='text-red-400'> </span>
                                    <p className='text-green-400'>in</p>
                                    <span className='text-red-400'> </span>
                                    <p className='text-green-400'>list</p>
                                </div>
                                <div>
                                    <p className='text-gray-700'>
                                        # This is a loop
                                    </p>
                                </div>

                            </code>
                            <code>
                                <div className='flex flex-row'>
                                    <p className='text-green-400'>print</p>
                                    <span className='text-red-400'>(</span>
                                    <p className='text-green-400'>i</p>
                                    <span className='text-red-400'>)</span>

                                </div>

                            </code>
                        </div>
                    }
                    outputCode='1\n2\n3\n4\n5'
                    copyCode={`list = [1, 2, 3, 4, 5]\nfor i in list:\n    print(i)`}
                    style=' h-[330px]'
                />


            </div>
        </PageUi>
    )
}

export default page