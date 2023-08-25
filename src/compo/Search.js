import React, { useState, useEffect } from 'react';
import Search1 from './Search1';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import InfiniteScroll from "react-infinite-scroll-component";


export default function Search(props) {
  const { input } = props;
  const [results, setResults] = useState([]);
  const [api, setApi] = useState(
    'https://api.themoviedb.org/3/search/movie?api_key=8f62dc1c436eaa30faf4aaab8ae3212f&query=&page=1'
  );
  const [words, setWords] = useState('');

  function handleInputChange(event) {
    setWords(event.target.value);
  }

  const search = () => {
    setApi(
      `https://api.themoviedb.org/3/search/movie?api_key=8f62dc1c436eaa30faf4aaab8ae3212f&query=${words}&page=1`,
       setwords(""),
      setimage("")

      );
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      setResults(data.results);
    }
    fetchData();
  }, [api]);

 const [word, setwords] = useState(     
   <><ReactTypingEffect
   speed={100}
   eraseSpeed={50}
   eraseDelay={300}
   loop={false}
  text={["The answer to your wildest searches 🔍🌟",
  "No search too big or small - we got you! 🔎🤝",
  "Find your search squad here! 🔍👥",
  "Search like a boss - we won't judge your weird queries! 👑🔎",
  "Find your happy place with our search bar! 🌈🔍",
  "Your search, our pleasure! Let's find it together 🔍❤️",
  "The search is overrated? Not with us! 🔍🙅‍♂️",
  "We don't just search, we find the magic! ✨🔎",
  "Don't wait for answers, search them! ⏳🔍",
  "Looking for something specific? Our search bar speaks your language! 🤙🔍"]}
  cursorRenderer={cursor => <h1>{cursor}</h1>}
  displayTextRenderer={(text, i) => {

    return (
      <h1>
        {text.split('').map((char, i) => {
          const key = `${i}`;
          
          return (
            <span
              key={key}
              style={{ color: 'yellow'}}
            >{char}</span>
          );
        })}
      </h1>
    );
  }}        
/>

</>
)
const [page, setPage] = useState(2); // set initial page number to 2 since page 1 is loaded in useEffect

async function fetchMoreData() {
  const nextPage = page + 1;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=8f62dc1c436eaa30faf4aaab8ae3212f&query=${words}&page=${nextPage}`;
  const response = await fetch(url);
  const data = await response.json();
  setResults(prevResults => [...prevResults, ...data.results]); // concatenate new results with existing results
  setPage(nextPage);
}
const [image, setimage] = useState(
  <motion.div style={{marginBottom :"0",paddingBottom :"0", width :"50vh",marginLeft:"35vw"}} className="text-center">
  <img src="https://www.clerksy.co/assets/login-9c50120470df85bc9b8dd1664f20a8b97a6fa59af320a738563b193322a5800f.svg" alt="" />
  </motion.div>
)
  return (
    <>
     <InfiniteScroll
          style={{overflow :"visible"}}
          dataLength={results.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
      <div className="d-flex justify-content-center">
        <motion.input animate={{border :"2px solid yellow",color :"#6cb186;",padding :"2vh",fontSize :"6vh" ,borderTopLeftRadius: "5vh",borderBottomLeftRadius : "5vh"}} type="text" value={words} onChange={handleInputChange} placeholder="Search for a movie..." />

        <motion.button style={{color :"yellow",backgroundColor :"#135c30",border :"2px solid yellow",paddingRight :"3vw" ,paddingLeft : "3vw" ,paddingTop :"2vh",paddingBottom :"0",borderTopRightRadius :"5vh" , borderBottomRightRadius :"5vh" ,fontSize :"6vh" }} onClick={search}>Search <motion.svg animate={{marginTop :"25px",marginBottom:"0"}} xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-search" viewBox="0 0 30 30">
       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </motion.svg></motion.button>
        
      </div>
      <motion.div animate={{fontSize:"10vh", marginLeft :"22vw",marginTop :"7vh",fontFamily:"Recoleta-SemiBold, Georgia, serif",fontWeight :"lighter"}} className="no">
        {word}
      </motion.div>
     
       {image}
      
      
    
      <div className="card-container">
        <div className="card-grid">
          {results.map((elements) => (
            <Search1
              key={elements.id}
              title1={elements.title}
              date1={elements.release_date}
              overview1={elements.overview.slice(0, 50)}
              poster_path1={`https://image.tmdb.org/t/p/w500${elements.poster_path}`}
            />
          ))}
        </div>
      </div>
      </InfiniteScroll>
    </>
  );
}
