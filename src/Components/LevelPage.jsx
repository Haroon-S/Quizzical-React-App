import React from 'react'

export default function LevelPage (props)
{
    return (
        <div className=' h-screen w-full flex flex-col justify-center items-center transition-all'>
            <h1 className=' text-5xl text-[#293264] p-2 font-bold md:text-5xl'>Quizzical</h1>
            <h1 className=' text-2xl text-[#293264] p-1 font-semibold'>Choose Level</h1>
            <div className=' flex flex-col gap-5 md:flex md:gap-6 md:flex-row p-6'>
            <button onClick={() => props.levelSelect(props.id[0])} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium md:font-bold md:text-xl rounded-lg text-lg px-6 py-2.5 md:px-10 md:py-3 text-center mr-2 mb-2 ">Easy</button>
            <button onClick={() => props.levelSelect(props.id[1])} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium md:font-bold md:text-xl rounded-lg text-lg px-6 py-2.5 md:px-10 md:py-3 text-center mr-2 mb-2 ">Medium</button>
            <button onClick={() => props.levelSelect(props.id[2])} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium md:font-bold md:text-xl rounded-lg text-lg px-6 py-2.5 md:px-10 md:py-3 text-center mr-2 mb-2 ">Hard</button>
            </div>
        </div>
    )
}