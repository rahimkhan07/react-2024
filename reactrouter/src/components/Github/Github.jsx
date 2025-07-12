import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { data } from 'react-router-dom'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/rahimkhan07')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

  return (
    <div>
      <h1>GitHub.com</h1>
      <h3>Github Followers: {data.followers} </h3>
      <img src={data.avatar_url} alt="Git Picture" width={300} />
      <div>
        {data.email_url}
      </div>
    </div>
  )
}

export default Github
