// Toggle.js
import React from 'react'
import { func, string } from 'prop-types';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import BlurOffIcon from '@material-ui/icons/BlurOff';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { ToggleContainer } from '../style/Toggle.styled.js'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    // <button onClick={toggleTheme} >
    //   <BlurOffIcon />
    //   <BlurOnIcon />
    // </button>
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      {/* <img src="https://svgsilh.com/svg/1710300.svg" width="50" height="50" alt="Sun free icon" title="Sun free icon" style={{ color: 'white' }}/> */}
      <svg height="12" width="12">
        <circle cx="10" cy="10" r="8" stroke="black" stroke-width="3" fill="black" />
        <h2>.</h2>  
      </svg> 
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;