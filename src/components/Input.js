import React, {useState} from "react";
import {useAtom} from 'jotai'
import {
  rssFeedAtom,
} from '../jotai'
import './input.css'

const Input = () => {

  const [value, setValue] = useState('');
  const [rssFeed, setRssFeed] = useAtom(rssFeedAtom);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleClick = () => {
    setRssFeed(value);
  }

  return (
    <div className="css-68bi76">
      <div className="css-79elbk">
        <div className="css-1jo5a5k">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-1hy7qas"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <input type="search" aria-label="Rss feed" placeholder="Enter your RSS feed" value={value} className="css-1j9w4jl" onChange={handleChange}/>        
      </div>  
      <div className="button-container">
        <button className="css-s700uk" onClick={handleClick}>Search</button>
      </div>    
    </div>  
  )
}

export default Input;