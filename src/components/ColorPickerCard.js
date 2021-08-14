import React, {useState} from "react";
import { SketchPicker } from 'react-color'

const swatch = {
  padding: '5px',
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
  display: 'inline-block',
  cursor: 'pointer',  
}

const popover = {
  position: 'absolute',
  zIndex: '2',  
}

const cover = {
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
}


const ColorPickerControl = ({color, handleChange, displayColorPicker, handleClick}) => {
  if(displayColorPicker) {
    return (
      <div style={popover}>
        <div style={ cover } onClick={ handleClick }/>
        <SketchPicker color={ color } onChange={ handleChange } />
      </div>
    )
  }
  
  return null;
}

const ColorPickerCard = ({
  color, 
  name, 
  handleColorChange, 
  id, 
  width, 
  height
}) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  }

  const handleChange = (selectedColor) => {
    handleColorChange({[id]: selectedColor.hex})
  }  

  return (
    <div style={{
      display: 'flex', 
      // alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '5px 0',
      // width: "180px", 

      }}>      
      <div>
        <div style={swatch} onClick={handleClick}>
          <div style={ {
            backgroundColor: color ? color : "#fff",
            width: width ? width : '48px',
            height: height ? height : '42px',
            borderRadius: '10px'
          } } />
        </div>  
        <ColorPickerControl color={color ? color : "#fff"} handleChange={handleChange} displayColorPicker={displayColorPicker} handleClick={handleClick}/>    
      </div>
      <div style={{
        display: 'flex',
        // alignContent: 'center',
        alignItems: 'center',
        width: 220,
        height: 50,  
        paddingLeft: 10, 
        paddingRight: 10, 
        backgroundColor: '#2f363d',
        // borderStyle: 'solid',
        // borderWidth: '1px',
        borderRadius: '10px',
        // borderColor: '#ccc'             
      }}>{name}</div>
    </div>
  )
}

export default ColorPickerCard