import React, { useEffect, useState } from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

import Slide from './Slide'

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function Smooth() {
    const [style, setstyle] = useState({color:'#2aff0e',backgrounColor:'black'})
  const [results, setresult] = useState([])
  const [api, setapi] = useState("https://api.themoviedb.org/3/tv/popular?api_key=8f62dc1c436eaa30faf4aaab8ae3212f&language=en-US&page=1")
 
  const onToday = () => {
   setapi(
      'https://api.themoviedb.org/3/trending/tv/day?api_key=8f62dc1c436eaa30faf4aaab8ae3212f'
    );
  
  };
  
  const onWeek = () => {
    setapi(
      'https://api.themoviedb.org/3/trending/tv/week?api_key=8f62dc1c436eaa30faf4aaab8ae3212f'
    );
  };
  
  const onpop=()=>{
    setapi("https://api.themoviedb.org/3/tv/popular?api_key=8f62dc1c436eaa30faf4aaab8ae3212f&language=en-US&page=1")
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api)
      const data = await response.json()
      setresult(data.results)
    }
    fetchData()
  }, [api])

  return (
    <>
    <div style={{backgroundColor : "white"}}>
    <div >
  <div class="tt text-center my-5"> 
  <div className='boo mx-3' style={{ paddingTop: '4vh', fontSize: "6vh", color: '#198c36'}}>
  Want to escape into a world of Drama and Intrigue? 
  <p className="p" style={{color :"#198c36", marginLeft :"15vw",marginRight:"18vw", fontWeight :"lighter"}}>Discover captivating dramas and suspenseful thrillers in our TV show section. From gripping crime dramas to heart-wrenching character studies, our selection will keep you on the edge of your seat. Share your thoughts and insights with other viewers on our review app and discover your next favorite show today!</p>
  </div>
</div>

</div>
<div>
  <img src="https://www.clerksy.co/assets/costumes-abd118ad91aa06b1c81d6d60fb20d46984141687ee31a3fdfcc6a72ad65e5b5a.svg" alt="" style={{paddingBottom :"10vh"}} />
</div>
<div class="d-flex justify-content-center" style={{marginBottom :"3vh"}}>
        <div class="p-2">
          <motion.button whileHover={{color : "yellow",scale :1.1}} animate={{}} className="switch" style={{fontSize :"3vh"}} onClick={onToday}>
            Today
          </motion.button>
        </div>
        <div class="p-2">
          <motion.button whileHover={{color :"yellow",scale :1.1}} className="switch" style={{fontSize :"3vh"}} onClick={onWeek}>
            This Week
          </motion.button>
        </div>
        <div class="p-2">
          <motion.button whileHover={{color :"yellow",scale :1.1}} className="switch" style={{fontSize :"3vh"}} onClick={onpop}>
            Popular
          </motion.button>
        </div>
      </div>
      <Slider {...settings}>
        {results.map((elements) => {
          return (
            <Slide
             title={!elements.title?elements.name:elements.title} 
             date={elements.release_date} 
             overview={elements.overview.slice(0,50)} 
             poster_path={`https://image.tmdb.org/t/p/w500${elements.poster_path}`} />
          )
        })}
      </Slider>
      
    </div>
    <div className="contact">
      
      </div>
   </>
    
  )
}
