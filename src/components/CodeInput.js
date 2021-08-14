import React, {useState} from "react";
import {useAtom} from 'jotai'
import {
  rssFeedAtom,
  getWidgetCodeAtom
} from '../jotai'
import './input.css'

const CodeInput = () => {

  const [code] = useAtom(getWidgetCodeAtom)
  const [copyButtonLabel, setCopyButtonLabel] = useState('Copy')

  const handleChange = (event) => {
    
  }

  const handleClick = () => {
    // setRssFeed(value);
    const copyText = document.querySelector(`#input-widget-code`);
    copyText.select();
    document.execCommand("Copy");
    setCopyButtonLabel('Copied');
    // change back to Copy in 3 seconds
    setTimeout(() => {
      setCopyButtonLabel("Copy");
    }, 3000)        
  }

  return (
    <div className="basic-input">
      <div className="css-79elbks">
        <input 
          type="search" 
          aria-label="Rss feed" 
          placeholder="Enter your RSS feed" 
          value={code} 
          className="css-1j9w4jl simple-input"
          id="input-widget-code"
          onChange={handleChange}/>
      </div>  
      <div className="button-container">
        <button className="css-s700uk" onClick={handleClick}>{copyButtonLabel}</button>
      </div>    
    </div>  
  )
}

export default CodeInput;