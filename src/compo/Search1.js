import React from 'react'

export default function Search1(props) {
    const { title1, date1, poster_path1, name1} = props;
    
  return (
    <div className="card h-100 my-3"  style={{ border: "none", width: "12rem", backgroundColor: "transparent", textAlign: "left" }}>
      <img src={poster_path1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "white" }}>{!title1 ? name1 : title1} </h5>
        <div className="h" style={{ color: "gray", textAlign: "left" }}>
          {date1}
        </div>
      </div>
    </div>
  )
}
