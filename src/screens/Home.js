import React from "react";
import {NinjaPodcastPlayer} from 'react-podcast-ninja'
import {useAtom} from 'jotai'
import {
  rssFeedAtom,
  configsAtom,
} from '../jotai'
import {Input, ControlPanel} from './../components'
// import {JCPlayer} from '../components/jc-player'

const Home = () => {
  
  const [rssFeed] = useAtom(rssFeedAtom)
  const [configs] = useAtom(configsAtom);

  return (
    <div className="main">
      <div className="container">
        <ControlPanel/>
        <div className="demo-panel">
          <Input/>
          <div style={{padding: "24px 16px"}}>
          {
            rssFeed ? <NinjaPodcastPlayer rssFeedUrl={rssFeed} playerId="podcast-player" configs={configs}/> : <div></div>
          }
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home;