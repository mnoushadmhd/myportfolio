import React from 'react'

const ErrorPage = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center mt-20'>
        <h1 className='text-red-700 text-xl'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
    </div>
  )
}

export default ErrorPage