import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import Slide from './Slide';
import { color } from 'framer-motion';

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
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Smooth() {
  const [style, setstyle] = useState({ color: 'white', backgrounColor: 'black' });
  const [results, setresult] = useState([]);
  const [api, setapi] = useState('https://api.themoviedb.org/3/trending/all/day?api_key=8f62dc1c436eaa30faf4aaab8ae3212f');
  const navigate = useNavigate();

  const onToday = () => {
    setapi('https://api.themoviedb.org/3/trending/all/week?api_key=8f62dc1c436eaa30faf4aaab8ae3212f');
  };

  const onWeek = () => {
    setapi('https://api.themoviedb.org/3/trending/all/day?api_key=8f62dc1c436eaa30faf4aaab8ae3212f');
  };

  const handleClick = (id) => {
    navigate(`/review/${id}`);
  };

  const onpop= ()=>{
    setapi("https://api.themoviedb.org/3/movie/popular?api_key=8f62dc1c436eaa30faf4aaab8ae3212f&language=en-US&page=1")
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      setresult(data.results);
    }
    fetchData();
  }, [api]);

  return (
    <div style={{backgroundColor : "white"}}>
    
      <div class="" >
        <div class="p-2">
          {' '}
          <h1 className=" tt text-center mx-3" style={{ marginTop: '20px', fontSize: "6vh", color: '#198c36' }}>
           Wanna Know Whats Trending?{' '}
          </h1>
        </div>
        <div class="d-flex justify-content-around" style={{marginTop :"9vh"}}>
        <div className="img2">
        <img src="https://www.clerksy.co/assets/juggling-506e5fa90e303f1c744b60b761942c86d14ba04d4ec7f2f1c7d5135a376ed929.svg" className="object-fit-cover rounded " alt="..." style={{marginLeft :"6vw",width :"20vw",height:"35vh",outline :"none"}}/>
        </div>
        <div className="tt" style={{marginTop :"7vh",color :"#163a24",fontSize :"5vh"}}>
        Ready to level up your entertainment game?
        <p className='p' style={{color :"#163a24",fontWeight :"lighter"}}> Check out our trending movies and TV shows - </p>
        <p className='p' style={{color :"#163a24",fontWeight :"lighter"}}> Handpicked for the coolest crowd in town. From viral hits to hidden gems, we've got the buzz you don't wanna miss. </p>
          </div>
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
            key={elements.id}
            id={elements.id}
            title={!elements.title && elements.name ? elements.name : elements.title}
            poster_path={`https://image.tmdb.org/t/p/w500${elements.poster_path}`}
            date={!elements.release_date ? elements.first_air_date:elements.release_date}
            handleClick={() => handleClick(elements.id)}
            />)})}
            </Slider>
</div>
</div>
  )}
