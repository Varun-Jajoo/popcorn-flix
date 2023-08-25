import './App.css';
import Navbar from './compo/Navbar';
import Smooth from './compo/Smooth';
import Top from './compo/Top';
import Tvshows from './compo/Tvshows';
import Trailer from './compo/Trailer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Review from './compo/Review';
import Search from './compo/Search';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={
                        <>
                            <div className="top "><Top /></div>
                            <Smooth  style={{backgrounColor : "white!important"}}/>
                            <div className="tv" >
                                <div className="trailer" >
                                    <Trailer />
                                </div>
                                <Tvshows />
                            </div>
                        </>
                    } />
                    <Route path="/review/:id/" element={<Review />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
