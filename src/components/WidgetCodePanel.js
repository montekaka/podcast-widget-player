import React from "react";
import {useAtom} from 'jotai'
import {
  rssFeedAtom,
  getWidgetCodeAtom
} from '../jotai'
import './widget-code-panel.css'
import CodeInput from './CodeInput'

const WidgetCodePanel = () => {
  const [rssFeed] = useAtom(rssFeedAtom)
  const [code] = useAtom(getWidgetCodeAtom)

  if(code) {
    return (
      <div className="widget-code-container">
        <h3>Here's what the embed code looks like:</h3>
        <CodeInput/>
      </div>
    )
  }  

  return null;
}

export default WidgetCodePanel;