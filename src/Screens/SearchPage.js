import React , {useState} from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Mid from '../Components/Mid'

function SearchPage() {
  const [top,setTop] = useState("")

let value;

const handleInputs = () =>{
  value = document.getElementById('val').value
   setTop(value)
}

const setBlank = () => {
  setTop("")
}

  const [type,setType] = useState("movie")
  const mySeries = () =>{
      setType("series")
  }
  const myMovie = () =>{
    setType("movie")
}
  return (
    <div className='bg-cyan-900'>
        <Header/>
        <div className='w-screen text-white pt-6 md:pl-28 md:pr-28 sm:pl-16 sm:pr-16 wq:pl-6 wq:pr-6 pr-2 pl-2'>
        <div className='w-full pb-2 flex flex-row'>
            <input type="text" id="val" name={top} placeholder='Search' className='p-3 border-0 border-b-2 border-white bg-slate-600 w-full' onChange={setBlank}/>
            <img src="https://cdn.pixabay.com/photo/2021/10/11/00/59/search-6699087__340.png" className='h-12 ml-4 border-0 rounded w-12 bg-white' onClick={handleInputs} alt=""/>
        </div>
        <div className='flex flex-row pt-4'>
            <button onClick={myMovie} className={`p-3 sm:pl-16 sm:pr-16 wq:pl-8 wq:pr-8 pl-3 pr-3 sm:text-base text-sm border-0 ${type==="movie"?'border-b-2':""} border-white`}>SEARCH MOVIES</button>
            <button onClick={mySeries} className={`p-3 sm:pl-16 sm:pr-16 wq:pl-8 wq:pr-8 pl-3 pr-3 sm:text-base text-sm border-0 ${type==="series"?'border-b-2':""} border-white`}>SEARCH SERIES</button>
        </div>
    </div>
    { top!==""?
        <Mid hide="Y" type1={type} name1={top} type2={type} name2={top}/> : ""
    }   
        <Footer/>
    </div>
  )
}

export default SearchPage