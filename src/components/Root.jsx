import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Root = () => {
  const[mode,setMode]=useState("light")
  const selectRef = useRef(null);
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if(savedMode === 'dark')
    {
      setMode("dark");
      document.documentElement.classList.add('dark')
     }
     else{
      setMode("light")
      document.documentElement.classList.remove('dark')
     }
  }, []);

  useEffect(() => {
   
    localStorage.setItem('darkMode', mode.toString());
  }, [mode]);
  const toggleMode=()=>{
   if(selectRef.current.value === 'dark')
   {
    setMode("dark");
    document.documentElement.classList.add('dark')
   }
   else{
    setMode("light")
    document.documentElement.classList.remove('dark')
   }

  }
  return (
   <>
    <header className='z-[1000] bg-neutral-50 dark:bg-gray-800 fixed w-full  px-5  flex  justify-center items-center '>
        <nav className='w-full flex gap-2  flex-row  items-center justify-between mx-auto max-w-[1300px] border-b md:border-0 border-neutral-300/40'>
          <div className="flex items-center-justify-center py-4">
           <img className='h-7 rotating-image' src={require('../images/N.png')} alt="" />
            <a href="" className='flex items-center gap-2  font-semibold transition group text-md text-neutral-900 dark:text-neutral-50  hover:text-indigo-500 dark:hover:text-indigo-300 font-title'>
              <span className='sm:hidden md:block'>&nbsp;Noushad M</span>
            </a>
          </div>
          <div className="flex justify-center items-center gap-5">
            <Link to="" className='font-medium text-sm  flex items-center transition group text-md text-neutral-900 dark:text-neutral-50  hover:text-indigo-500 dark:hover:text-indigo-300 font-title'>
              Home
            </Link>
            <Link to="/about" className='font-medium text-sm flex items-center transition group text-md text-neutral-900 dark:text-neutral-50  hover:text-indigo-500 dark:hover:text-indigo-300 font-title'>
              About
            </Link>
            <div className="relative flex items-center mb-1 ">
          {
            mode==='light'?
            <span className="pl-4 absolute inline-flex pointer-events-none transition">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" font-medium text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path></svg>
          </span>:
              <span className="pl-4 absolute inline-flex pointer-events-none transition">
              <svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 16 16" className=" font-medium text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path></svg>
            </span>
          }


          <select ref={selectRef} onChange={toggleMode} className="text-black dark:text-white bg-transparent  text-sm font-medium rounded-md  px-10 py-1 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent">
            <option className='text-black dark:text-white dark:bg-black' value="light"> Light</option>
            <option className='text-black dark:text-white dark:bg-black' value="dark"> Dark</option>
          </select>
        </div>
          </div>
        </nav>
    </header>
    <main className='lg:pt-[92px] md:pt-[64px] sm:pt-[64px] w-full bg-white dark:bg-neutral-900'>
       <div className=' max-w-[1300px] mx-auto px-5'>
        <Outlet/>
       </div>
    </main>
    <section className='bg-white dark:bg-neutral-900'>
      <footer className='  py-3 pt-10 flex flex-col-reverse md:flex-row w-full mx-auto px-5 items-center  justify-center md:justify-between max-w-[1300px] '>
        <div className="py-2 md:py-0 font-medium text-sm text-neutral-900 dark:text-neutral-100">© Copyright 2023 - Noushad M</div>
        <div className='flex flex-row items-start justify-start gap-3 p-0 '>
            <a href="https://www.linkedin.com/in/noushad-m-9b8a98289" target="blank" className='text-indigo-700 dark:text-indigo-500 hover:text-[#0A66C2] dark:hover:text-[#0A66C2]   p-2 bg-white dark:bg-neutral-800  rounded-md transition duration-300 ease-in-out hover:scale-95 border border-neutral-300/40 aspect-square'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-lg " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
            </a>
            <a aria-label="Instagram handle of Noushad M" target="_blank" rel="noreferrer" href="https://www.instagram.com/deepjunglewalkk/" className="text-indigo-700 dark:text-indigo-500 hover:text-[#E4405F] dark:hover:text-[#E4405F]   p-2 bg-white dark:bg-neutral-800  rounded-md transition duration-300 ease-in-out hover:scale-95 border border-neutral-300/40 aspect-square"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-lg " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg></a>
            <a href="https://github.com/mnoushadmhd" target="blank" className='text-indigo-700 dark:text-indigo-500 hover:text-[#0A66C2] dark:hover:text-[#0A66C2]   p-2 bg-white dark:bg-neutral-800  rounded-md transition duration-300 ease-in-out hover:scale-95 border border-neutral-300/40 aspect-square'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
            </a>
        </div>

      </footer>
    </section>

   </>
  )
}

export default Root