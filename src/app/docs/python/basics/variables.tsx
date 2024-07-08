import CodeSpace from '@/lib/codeSpace/codeSpace'
import React from 'react'

function Variables() {
    return (
        <div id="types-of-variables">
            <h2 className='text-center text-lg justify-center items-center flex flex-col h-max my-auto text-slate-500'>
                Types of Variables
            </h2>
            <CodeSpace
                codeTitle='Types of Variables'
                codeHtmlElement={
                    <div
                        className="text-center justify-center items-center flex flex-col h-max my-auto "
                    >
                        <code>
                            <div className='flex flex-row'>
                                <p className='text-green-400'>name</p>
                                <span className='text-red-400'> = </span>&quot;World!&quot;
                            </div>
                            <div>
                                <p className='text-gray-700'>
                                    # This is a string
                                </p>
                            </div>

                        </code>
                        <code>
                            <div className='flex flex-row'>
                                <p className='text-green-400'>number</p>
                                <span className='text-red-400'> = </span>100
                            </div>
                            <div>
                                <p className='text-gray-700'>
                                    # This is a number
                                </p>
                            </div>

                        </code>
                        <code>
                            <div className='flex flex-row'>
                                <p className='text-green-400'>arr</p>
                                <span className='text-red-400'> = </span>
                                [1, 2, 3, 4, 5]
                            </div>
                            <div>
                                <p className='text-gray-700'>
                                    # This is a array of numbers
                                </p>
                            </div>

                        </code>
                        <code>
                            <div className='flex flex-row'>
                                <p className='text-green-400'> array_of_multiple_data_type  </p>
                                <span className='text-red-400'> = </span>
                                {`[1, 2, 3, "Hello", 4, 5, "World!"]`}
                            </div>
                            <div>
                                <p className='text-gray-700'>
                                    # This is a array of  different data types
                                </p>
                            </div>

                        </code>
                    </div>
                }
                copyCode={`name = "World!"\nnumber = 100\narr = [1, 2, 3, 4, 5]\narray_of_multiple_data_type = [1, 2, 3, "Hello", 4, 5, "World!"]\n# Try to print all the variables`}
                style=' h-[330px]'
            />
        </div>
    )
}

export default Variables