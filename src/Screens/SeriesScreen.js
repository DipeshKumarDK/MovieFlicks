import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Mid from '../Components/Mid'

function SeriesScreen() {
  return (
    <div>
        <Header/>
        <Mid type1={"series"} name1={"Money"} type2={"series"} name2={"Kill"} head={"SERIES"}/>
        <Footer/>
    </div>
  )
}

export default SeriesScreen