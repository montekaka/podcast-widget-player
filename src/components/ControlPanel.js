import React from "react";
import {useAtom} from 'jotai'
import {
  rssFeedAtom,
  configsAtom,
  playerSkinOptions,
  updateColorAtom
} from '../jotai'
import './control-panel.css'
import ColorPickerCard from './ColorPickerCard'

const ControlPanel = () => {

  const [options] = useAtom(playerSkinOptions);
  // const [configs] = useAtom(configsAtom);
  const [configs, setConfigs] = useAtom(updateColorAtom)
  
  const handleChange = (x) => {
    setConfigs(x);
  }

  return (
    <div className="control-panel">
      <div>
        <div style={{fontSize: "20px", fontWeight: 500, marginBottom: 30}}>Customize</div>
        <div className="control-panel-options">
          {
            options.map((option ) => {
              const {id, label} = option;
              const color = configs[id];
              return <ColorPickerCard 
                key={id}
                id={id}
                name={label}
                color={color}
                handleColorChange={handleChange}
              />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ControlPanel