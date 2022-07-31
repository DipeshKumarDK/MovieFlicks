import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {getTitle} from "../actions/index"


function Card(props) {
const dispatch = useDispatch();
  let {title , poster , year , type} = props;
  console.log(poster)
    return (
      // <div>
      <Link className={`p-1 mb-3 hover:animate-pulse transition ease-in-out hover:-translate-y-1 hover:scale-110 text-white bg-black border-2 hover:text-black border-black hover:bg-white hover:border-white ml-2 mr-2 mt-1 rounded`} to="/info" onClick={()=>dispatch(getTitle(title))}> 
      <div className="" >
      <img
          src={
            poster && poster !== "N/A"  ? poster : "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__340.jpg"
          }
          className="h-60 w-full border-0 rounded" alt=".."
          />
        </div>
          
      <div className={`pt-1`}>
      <div className="flex flex-row w-full justify-center items-center">
      <div className={`lg:text-xl text-lg pb-1`}>{title}...</div>
      </div>
      <div className="w-full flex flex-row justify-between">
      <div className={`pr-2 font-normal text-sm `}>{type}</div>
      <div className={`font-normal text-sm `}>Year : {year}</div>
      </div>
      </div>
      </Link>
      );    
  }
  
  export default Card;