import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div>
        <h1>Lorem : {userid}</h1>
      
    </div>
  )
}

export default User