import React from "react";
import {NinjaPodcastPlayer} from 'react-podcast-ninja'
import {useAtom} from 'jotai'
import {
  rssFeedAtom,
  configsAtom,
  playerSkinOptions,
  updateColorAtom
} from '../jotai'
// import {JCPlayer} from '../components/jc-player'

const Home = () => {
  
  const [rssFeed] = useAtom(rssFeedAtom)
  const [configs] = useAtom(configsAtom);

  return (
    <div className="main-container">
      <div className="demo-panel">
        {
          rssFeed ? <NinjaPodcastPlayer rssFeedUrl={rssFeed} playerId="podcast-player" configs={configs}/> : <div></div>        
        }
      </div>
      <div className="control-panel">

      </div>
    </div>
  )
}

export default Home;