import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'

export default function Trail(props) {
let {url,link,title}= props
 function redirect(){
    window.open(link,"_blank")

 }

  return (
    <div  className="card mb-3 mx-4" style={{backgroundColor : "transparent"}}>
  <img onDoubleClick={redirect }  src={url} className="card-img-top" alt="..." />
  <div className="card-body" style={{color:"white",backgroundColor : "#198c36"}}>{title}</div>
</div>
  )
}
