import React from "react";
import { useSelector} from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios';

function MovieInfo() {

  const [myMovie, setMyMovie] = useState({})

  const myState=useSelector((state)=>
  state.changeNum
);

const fetchData1 = async() => {
   const res = await Axios.get(`https://omdbapi.com/?apikey=547a1223&t=${myState}`)
   setMyMovie(res.data)
}

useEffect(() => {
  fetchData1();
}, []);
  return (
    <div className="w-screen pt-6 pl-12 md:pl-20 pb-4 md:flex flex-row bg-cyan-900 text-white">
      <div className="h-4/5 pr-12 md:w-5/12">
        <img
          src={
            myMovie.Poster?
            myMovie.Poster : "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__340.jpg"
          }
          className="md:h-102 h-96 w-full border-0 rounded"
          alt="..."
        />
      </div>
      <div className="pl-12 w-11/12 md:pr-20 pr-12">
        <div className="pt-3 md:pt-0 flex flex-row justify-center items-center md:justify-start md:items-start">
        <div className="text-3xl md:text-4xl">{myMovie.Title}</div>
        </div>
        <div className="bg-cyan-900 mt-4 h-44 md:h-52 w-full border-2 border-slate-500 rounded-lg p-2">
          {myMovie.Plot}
        </div>
        <div className="w-full pt-3 grid grid-cols-1 items-baseline">
          <div>Type : {myMovie.Type}</div>
          <div>Release Date : {myMovie.Released}</div>
          <div>Run Time : {myMovie.Runtime}</div>
          <div>Genre : {myMovie.Genre}</div>
          <div>Language(s) : {myMovie.Language}</div>
          <div>Director(s) : {myMovie.Director}</div>
          <div>Writer(s) : {myMovie.Writer}</div>
          <div>Leading Actors : {myMovie.Actors}</div>
          <div>Awards : {myMovie.Awards}</div>
          <div>Box Office : {myMovie.BoxOffice?myMovie.BoxOffice:"N/A"}</div>
          <div className="text-lg pt-2 text-slate-400">Ratings by Different Platforms</div>
          <div>IMDb Rating : {myMovie.imdbRating}</div>
          <div>IMDb Votes : {myMovie.imdbVotes}</div>
          <div>Metacritic Score : {myMovie.Metascore}</div> 
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
