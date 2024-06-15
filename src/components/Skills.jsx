import React from 'react'

const Skills = () => {
  return (
    <>
            <div className='mt-[80px]'>
      <h2 className="text-neutral-900 dark:text-neutral-100 my-5 text-2xl text-left md:text-3xl font-medium">Skills</h2>
      <div className='mt-10 grid gap-10 grid-cols-4 space-between sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  '>
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/html.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>HTML</p>
        </div>   
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/css.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>CSS</p>
        </div>    
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/bootstrap.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>Bootstrap</p>
        </div> 
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/tailwind.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>Tailwind</p>
        </div> 
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/materialUI.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>Material UI</p>
        </div> 
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/javascript.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>Javascript</p>
        </div> 
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/jquery.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>JQuery</p>
        </div> 
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/react.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>React</p>
        </div> 
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/nextjs-icon.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>Next Js</p>
        </div> 
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/mongo-db.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>Mongo DB</p>
        </div>
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/redux.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>Redux</p>
        </div>
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/github.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>GitHub</p>
        </div> 
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/nodejs.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>Node (Express)</p>
        </div> 
        <div className='p-8 transition ease-in-out delay-150  flex flex-col justify-center items-center shadow-lg shadow-indigo-500/40  hover:shadow-rose-600'>
            <img className='h-[124px]' src={require("../images/firebase.png")} alt="" />
            <p className='font-semibold text-normal text-neutral-800 dark:text-neutral-400 mt-3'>Firebase</p>
        </div> 
  
  
      </div>
    </div>
    </>
  )
}

export default Skills