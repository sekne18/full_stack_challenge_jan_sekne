import React, { useEffect, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import ImageCard from '../image/ImageCard';
import CircularProgress from '@mui/material/CircularProgress';
import './content.css';

function Content() {
  const [images, setImages] = useState([]); // Stored images
  const [text, setText] = useState(''); // Stored search text
  const [btnPressed, setBtnPressed] = useState(false); // stored boolean value to trigger

  useEffect(() => {
    /* 
      It gets called upon building component. 
      Will trigger each time there is a change in "btnPressed" variable (dependencies).
      Could also add text to dependencies but we would call server for images on each change in input.
    */
    setImages([]); // clears array
    fetch(`/api/${text}`)
      .then((res) => res.json())
      .then((data) => setImages(JSON.parse(data).items));
    setBtnPressed(false);
  }, [btnPressed]);

  return (
    <section className='main'>
      <div className="search-container">
        <p>Coding Challenge</p>
        <div className='search'>
          <input type="text" onChange={(e) => setText(e.target.value)}/>
          <button className='searchButton' type='button' onClick={() => setBtnPressed(true)}><FcSearch size={35}/></button>
        </div>
      </div>
      <div className='content-container'>
      { 
      /* Checks if there are no images. If its true it renders <p> tag, otherwise <ImageCard/> */
      images.length === 0 ? <div className='progress-bar'><CircularProgress size={70} color="inherit"/></div> :

      /* map function goes through each item and allows us to create <ImageCard/> components. Item contains all the information about the selected image */
      images.map((item) => (
        <ImageCard key={item.media.m} url={item.media.m} title={item.title} source={item.link}/>
      ))
      }
      </div>
    </section>
    
  )
}

export default Content