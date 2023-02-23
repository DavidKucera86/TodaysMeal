import React from 'react'
import { useParams } from 'react-router-dom'


const Detail = () => {
  const {idDetail} = useParams();
  

  return (
    <main>
      <p>Detail page</p>
      
    </main>
  )
}

export default Detail