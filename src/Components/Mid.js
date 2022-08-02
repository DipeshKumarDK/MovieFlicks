import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios';
import Card from './Card';


function Mid(props) {
  const {type1 , name1 ,type2, name2 , head , hide} = props;
  const [movieList1, setMovieList1] = useState({})
  const [movieList2, setMovieList2] = useState({})

  const fetchData1 = async() => {
     const res = await Axios.get(`https://omdbapi.com/?apikey=547a1223&s=${name1}&type=${type1}&page=1`)
     setMovieList1(res.data.Search)
     console.log(res)
  }
  const fetchData2 = async() => {
    const res = await Axios.get(`https://omdbapi.com/?apikey=547a1223&s=${name2}&type=${type2}&page=1`)
    setMovieList2(res.data.Search)
    console.log(res)
 }

  useEffect(() => {
    fetchData1();
    fetchData2();
  }, []);


  return (
    <div className='pt-3 pb-10 sm:pr-28 sm:pl-28 wq:pl-16 wq:pr-16 bg-cyan-900'>
        <div className='flex flex-row w-full justify-center items-center'>
        <div className={`lg:text-3xl ${props.hide==="Y"?"hidden":""} text-white sm:text-xl text-lg`}>TOP {head} NOW</div>
        </div>
        <div className={`pt-2 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full items-baseline`}>
        {movieList1?.length ? (
          movieList1.map((movie, index) => (
            <Card
              key={index}
              movie={movie}
              title={movie.Title.slice(0,16)}
              poster={movie.Poster}
              year={movie.Year}
              type={type1}
            />
          ))
        ) : (
          <Card yes=""yes/>
        )}
        </div>
        <div className={`${hide==="Y"?"hidden":""} pt-2 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full items-baseline`}>
        {movieList2?.length ? (
          movieList2.map((movie, index) => (
            <Card
              key={index}
              movie={movie}
              title={movie.Title.slice(0,16)}
              poster={movie.Poster}
              year={movie.Year}
              type={type2}
            />
          ))
        ) : (
          <Card yes="yes"/>
        )}
        </div>
    </div>
  )
}

export default Mid
