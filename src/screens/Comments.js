import React from "react";
import queryString from 'query-string'
import {Discast} from 'react-podcast-ninja'
import {useAtom} from 'jotai'
import {configsAtom} from '../jotai'
// import {JCPlayer} from '../components/jc-player'

const Comments = (props) => {
  // const values = queryString.parse(props.location.search); 
  // console.log(values['rss'])
  const [configs] = useAtom(configsAtom)
  const comments = [
    {  startSecond: 49, endSecond: 200, message: "How Spotify's podcasts are doing", author: ""},
  ]

  return (
    <Discast
      artworkUrl="https://storage.buzzsprout.com/variants/msxr1zhuym3zs26dle4bus000s1n/60854458c4d1acdf4e1c2f79c4137142d85d78e379bdafbd69bd34c85f5819ad.jpg"
      title="Apple: The Internet Explorer of podcast apps? Evo Terra on why podcast apps suck. How's Spotify doing and multiple new ways to discover podcasts."
      enclosureUrl="https://www.buzzsprout.com/1538779/9054909-what-happens-to-podcast-downloads-if-ip-addresses-go-away-interview-bryan-barletta-plus-automating-youtube-for-podcasting.mp3"
      configs={configs}
      comments={comments}
    />
  )
}

export default Comments;