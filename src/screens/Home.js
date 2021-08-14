import React from "react";
import {NinjaPodcastPlayer} from 'react-podcast-ninja'
// import {useAtom} from 'jotai'
// import {podcastRssAtom, episodesAtom, playingIdAtom, chaptersAtom, playerSkinAtom} from '../jotai'
// import {JCPlayer} from '../components/jc-player'

const Home = () => {
    
  return (
    <div>
      <NinjaPodcastPlayer
        rssFeedUrl="https://feed.justcast.com/shows/readcast/audioposts.rss"
        playerId="podcast-player"
      />
      <div>

      </div>
    </div>
  )
}

export default Home;