import React, { useEffect, useState } from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Trail from './Trail'
import { motion } from 'framer-motion';


export default function Trailer(props) {

    let {bgc} =props
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
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
      }


    const [items, setresult] = useState([])
  const [api, setapi] = useState("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&videoCategory=trailer&chart=mostPopular&maxResults=100&key=AIzaSyDzjfjioBFW-APXPJgtUj6IqaaiA17roog")
 
    useEffect(() => {
        async function fetchData(){
            const response = await fetch(api)
            const data = await response.json()
            setresult(data.items)

        }
        fetchData()
      }, [api])
      function redirect(){
        window.open("www.youtube.com","_blank")
    
     }
  
  return (
    <div>
  <div class="d-flex mb-3">
  <div class="p-2"> 
  <h1 className='' style={{marginLeft:"7vw", marginTop: '20px', fontSize: "6vh",fontFamily :" Recoleta-SemiBold, Georgia, serif",color :"white",fontWeight:"bolder"}}>
       
       Whats Popping? Check Out Latest Videos On  </h1></div>
       <div className='mx-0 ' onClick={redirect} style={{color :"rgb(228, 21, 21)", marginTop: '21px', fontSize: "6vh",fontFamily :" Recoleta-SemiBold, Georgia, serif" ,fontWeight:"bolder"}}>YOUTUBE </div>
  {/* <div class="p-2"><button className="switch" style={style} onClick={onToday}>Today</button></div>
  <div class="p-2"><button className="switch" style={style} onClick={onWeek}>This Week</button></div> */}
</div>
<motion.div   class="d-flex justify-content-around" style={{marginTop :"9vh"}}>
<div className="tt" style={{marginTop :"6vh",color :"white",fontSize :"5vh" ,fontWeight:"700"}}>
  <p style={{color :"yellow",  fontSize: "6vh",fontFamily :" Recoleta-SemiBold, Georgia, serif" ,fontWeight:"bold"}}>Serving You The Absolute Best.</p>
<p style={{fontWeight :"lighter"}}>Yo, get ready to binge-watch videos like a boss! </p>
<p className="p" style={{fontWeight :"lighter"}}> Our content is lit, we've got something for everyone, no matter what you're into.</p>
        </div>
<div className="smg"  style={{marginBottom :"6vw",width :"20vw",height:"35vh",outline :"none"}}>
  <img src="https://www.clerksy.co/assets/scenes-01-77fecc86a1baf84f1270d2527f36e2d6f452c4088ff8d65d0f6b555961804322.svg" alt="" />
</div>
</motion.div>
        <Slider {...settings}>

    {items.map((elements)=>{
        return(
            
          < div >
            <Trail
            bgc={elements.snippet.thumbnails.high.url}
            url={elements.snippet.thumbnails.medium.url}
            link={`//www.youtube.com/embed/${elements.id}`}
            title={elements.snippet.title}
            >
            </Trail>
         
            </div>
            
        )
    })}
    </Slider>
  
  </div>


  )
}
