import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Mid from '../Components/Mid'

function HomePage() {
  return (
    <div>
        <Header/>
        {/* <div className='h-0.5 bg-black'></div> */}
        <Mid type1={"movie"} name1={"Fast"} type2={"series"} name2={"Money"} head={"TRENDING"}/>
        <Footer/>
    </div>
  )
}

export default HomePage