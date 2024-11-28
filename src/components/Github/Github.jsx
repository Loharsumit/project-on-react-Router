import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Loharsumit')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white 
    p-4 text-3xl'>User Name: {data.name}
     <div className='text-center m-4 bg-gray-600 text-white 
    p-4 text-3xl'>User Id: {data.login}
    <div >
     Github following: {data.following}
    </div>
    <div >
     
     Github follwers: {data.followers}
    </div>
    <img className='-mt-20' src={data.avatar_url} alt='Git picture' width={300}/>
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/Loharsumit')
   return response.json()
}