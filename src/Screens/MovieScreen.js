import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Mid from '../Components/Mid'

function MovieScreen() {
  return (
    <div>
        <Header/>
        <Mid type1={"movie"} name1={"Fast"} type2={"movie"} name2={"Iron-"} head={"MOVIES"}/>
        <Footer/>
    </div>
  )
}

export default MovieScreen