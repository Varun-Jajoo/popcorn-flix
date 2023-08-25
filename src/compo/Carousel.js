import React from 'react'

export default function Carousel(props) {
   let {backdrop_path}=props
  return (
    <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img key= ""src= "https://image.tmdb.org/t/p/w500/VA50wq7gguuxXVZUoRL9WkqGiY.jpg"className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img key="id" src={backdrop_path} className="d-block w-100" alt="..." />
    </div>
    {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div> */}
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    {/* <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span> */}
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    {/* <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span> */}
  </button>
</div>

  )
}
