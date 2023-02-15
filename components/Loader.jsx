import React from 'react'
import Spinner from '../public/spinner.gif'

function Loader() {
  return (
    <>
        
        <Image className="w-[200px] m-auto block" src={Spinner} alt={loading}/>
    
    </>
  )
}

export default Loader