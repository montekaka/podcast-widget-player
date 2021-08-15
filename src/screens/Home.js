import React from "react";
import {NinjaPodcastPlayer} from 'react-podcast-ninja'
import {useAtom} from 'jotai'
import {
  rssFeedAtom,
  configsAtom,
} from '../jotai'
import {Input, ControlPanel, WidgetCodePanel} from './../components'
// import {JCPlayer} from '../components/jc-player'

const Home = () => {
  
  const [rssFeed] = useAtom(rssFeedAtom)
  const [configs] = useAtom(configsAtom);

  return (
    <div className="main">
      <div className="hero">
        <div style={{textAlign: 'center'}}>
          <h1>Open source podcast 2.0 widget player</h1>
          <div>
            <a href="https://github.com/montekaka/react-podcast-ninja" className="primary-button" target="_blank" style={{marginRight: 20}}>Get started</a>
            <a href="https://justcast.com" className="secondary-button" target="_blank">by JustCast</a>
          </div>          
        </div>
      </div>
      <div className="container">        
        <div className="demo-panel">
          <Input/>
          <WidgetCodePanel/>
          <div style={{padding: "24px 16px"}}>
          {
            rssFeed ? <NinjaPodcastPlayer rssFeedUrl={rssFeed} playerId={`podcast-player`} configs={configs} proxy={process.env['REACT_APP_PROXY']}/> : <div className="empty-message"><h3>☝️ Enter your RSS to get started</h3></div>
          }
          </div>          
        </div>
        <ControlPanel/>
      </div>
    </div>
  )
}

export default Home;