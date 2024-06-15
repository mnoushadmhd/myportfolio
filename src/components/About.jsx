import React, { useEffect, useRef } from 'react'
import Skills from './Skills'

const About = () => {
  const ageRef=useRef()
  useEffect(()=>{
    const date = new Date();
    if(date.getMonth() +1 > 7 && date.getDate() >= 2 ){
      ageRef.current.innerHTML=date.getFullYear() - 1994 ;
    }
    else{
      ageRef.current.innerHTML=date.getFullYear() - 1994 -1;
    }
  })
  return (
   <section>
    <div className='flex flex-col items-start justify-center gap-2  pt-10 mt-10 '>
      <h1 className="lg:text-6xl md:4xl; sm:text-3xl dark:text-neutral-100">
        <span className="text-red-500">Hi</span>, I'm <span className="inline-flex">Noushad M.</span>
      </h1>
      <p className="leading-7 text-normal text-neutral-800 dark:text-neutral-400">I'm <span ref={ageRef}></span> years old, Web Developer living in Kerala, India.</p>
      <p className="leading-7 text-normal text-neutral-800 dark:text-neutral-400">I studied Bachelors in Computer Applications at Prist University, Pondicherry. I chose to focus on Web Development as well as learned several programming concepts, languages and frameworks &#9997;.</p>
      <p className="leading-7 text-normal text-neutral-800 dark:text-neutral-400">After Graduation , I started Exploring HTML, CSS, Javascript, React - Hooks, Redux and several other useful libraries.</p>
      <p className="leading-7 text-normal text-neutral-800 dark:text-neutral-400">Currently, I work as a frontend developer at 
      <a target='blank' href="https://www.maxwellgeosystems.com" className="text-gray-700 underline transition dark:text-neutral-300 underline-offset-4 hover:text-indigo-600 hover:dark:text-indigo-400"> Maxwell GeoSystems</a>
      </p>
    </div>
    <div className='mt-[80px]'>
      <h2 className='text-neutral-900 dark:text-neutral-100 my-5 text-2xl text-left md:text-3xl font-medium'>Education</h2>
      <div className='mt-10 grid gap-10 grid-cols-3 space-between sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
        <div className='group  flex gap-1 flex-col  justify-between md:items-start border border-neutral-300/40 p-5 rounded-md  bg-white dark:bg-neutral-900'>
          <div className='flex gap-3'>
            <div className='flex-none'>
              <img className='h-8' src={require("../images/PRIST_LOGO.png")}/>
            </div>
            <div className='flex flex-col items-start '>
                <span className=' text-base font-medium text-neutral-800 dark:text-neutral-300 group-hover:text-indigo-800 dark:group-hover:text-indigo-200 '>
                  PRIST University
                </span>
                <span className=' text-sm font-normal text-neutral-500 dark:text-neutral-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-500'>
                  Pondicherry,India
                </span>
            </div>
          </div>
          <span className=' text-base font-bold text-neutral-900 dark:text-neutral-200 group-hover:text-indigo-900 dark:group-hover:text-indigo-100'>
            B.Tech. Computer Science Engineering
          </span>
          <span className=' text-sm font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>
            2013-2017
          </span>
        </div>
        <div className='group  flex gap-1 flex-col  justify-between md:items-start border border-neutral-300/40 p-5 rounded-md  bg-white dark:bg-neutral-900'>
          <div className='flex gap-3'>
            <div className='flex-none'>
              <img className='h-8' src={require("../images/school.png")}/>
            </div>
            <div className='flex flex-col items-start '>
                <span className=' text-base font-medium text-neutral-800 dark:text-neutral-300 group-hover:text-indigo-800 dark:group-hover:text-indigo-200 '>
                  Labour India
                </span>
                <span className=' text-sm font-normal text-neutral-500 dark:text-neutral-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-500'>
                  Marangattupally, Pala
                </span>
            </div>
          </div>
          <span className=' text-base font-bold text-neutral-900 dark:text-neutral-200 group-hover:text-indigo-900 dark:group-hover:text-indigo-100'>
            Class 11-12
          </span>
          <span className=' text-sm font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>
            2010-2012
          </span>
        </div>
        <div className='group  flex gap-1 flex-col  justify-between md:items-start border border-neutral-300/40 p-5 rounded-md  bg-white dark:bg-neutral-900'>
          <div className='flex gap-3'>
            <div className='flex-none'>
              <img className='h-8' src={require("../images/school-10.png")}/>
            </div>
            <div className='flex flex-col items-start '>
                <span className=' text-base font-medium text-neutral-800 dark:text-neutral-300 group-hover:text-indigo-800 dark:group-hover:text-indigo-200 '>
                  Cochin Public School
                </span>
                <span className=' text-sm font-normal text-neutral-500 dark:text-neutral-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-500'>
                  Thrikkakara, Ernakulam
                </span>
            </div>
          </div>
          <span className=' text-base font-bold text-neutral-900 dark:text-neutral-200 group-hover:text-indigo-900 dark:group-hover:text-indigo-100'>
            Class 10
          </span>
          <span className=' text-sm font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>
            2010
          </span>
        </div>
      </div> 
    </div>
    <Skills/>
    
   </section>
  )
}

export default About