import React from "react";
import queryString from 'query-string'
import {NinjaPodcastPlayer} from 'react-podcast-ninja'
import {useAtom} from 'jotai'
import {playerSkinOptions} from '../jotai'
// import {JCPlayer} from '../components/jc-player'

const Player = (props) => {
  const values = queryString.parse(props.location.search); 
  // console.log(values['rss'])
  const [options] = useAtom(playerSkinOptions)

  if(values && values['rss']) {
    const configs = {}
    for(let i = 0; i < options.length; i++) {
      const id = options[i]['id'];
      const color = values[id];
      configs[id] = `#${color}`;
    }
    return (
      <div style={{height: "100vh", width: "100%", margin: 0, padding: 0, boxSizing: 'border-box'}}>
        <NinjaPodcastPlayer
          rssFeedUrl={values['rss']}
          playerId="podcast-player"
          configs={configs}
          proxy={process.env['REACT_APP_PROXY']}
        />
      </div>
    )
  }

  return null;
}

export default Player;