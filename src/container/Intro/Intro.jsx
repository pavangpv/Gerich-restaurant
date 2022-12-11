import React, { useRef, useState } from 'react';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const[playVideo,setPlayVideo] = useState(false);
  const vidRef = useRef();
return(
  <div className='app__video'>
  <video 
  src={meal}
  ref={vidRef}
  type="video/mp4"
  loop
  controls={false}
  muted
  />
  </div>
)}
export default Intro;
