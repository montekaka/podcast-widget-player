import React from "react";
import {useAtom} from 'jotai'
import {
  rssFeedAtom,
  getWidgetCodeAtom
} from '../jotai'
import './input.css'

const CodeInput = () => {

  const [code] = useAtom(getWidgetCodeAtom)

  const handleChange = (event) => {
    
  }

  const handleClick = () => {
    // setRssFeed(value);
  }

  return (
    <div className="basic-input">
      <div className="css-79elbks">
        <input type="search" aria-label="Rss feed" placeholder="Enter your RSS feed" value={code} className="css-1j9w4jl simple-input" onChange={handleChange}/>        
      </div>  
      <div className="button-container">
        <button className="css-s700uk" onClick={handleClick}>Copy</button>
      </div>    
    </div>  
  )
}

export default CodeInput;