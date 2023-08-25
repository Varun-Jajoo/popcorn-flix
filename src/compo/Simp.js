
import React, { useEffect, useState } from 'react';
import Slider from "react-slick"
import "~slick-caraousel/slick/slick.css"
import "~slick-caraousel/slick/slick-theme.css"
import Slide from './Slide'

export default function Slider() {
    const [results, setresult] = useState([])
    useEffect(()=>{
    async function mount() { 
        let url="https://api.themoviedb.org/3/trending/all/day?api_key=8f62dc1c436eaa30faf4aaab8ae3212f"
        let data =await fetch(url)
        let pdata= await data.json()
        setresult(pdata.results)
    }
    mount()
},[])
  return (
    <div className="slide">
    {results.map((elements)=>{
        return(
     <Slide title={elements.title} overview={elements.overview}/>)
    })
}
</div>
  )
}
