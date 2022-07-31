import HomePage from './Screens/HomePage';
import SearchPage from './Screens/SearchPage';
import MoviePage from './Screens/MoviePage';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import MovieScreen from './Screens/MovieScreen';
import SeriesScreen from './Screens/SeriesScreen';

function App() {

  return (
    <div className="w-screen bg-cyan-900 overflow-x-clip">
      <BrowserRouter>
      <div>
      <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/movies" element = {<MovieScreen/>}/>
          <Route exact path="/series" element = {<SeriesScreen/>}/>
          <Route exact path="/search" element={<SearchPage />}/> 
          <Route exact path="/info" element={<MoviePage />}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
