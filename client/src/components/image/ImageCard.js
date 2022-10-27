
import React from 'react';
import './image.css';

/* Card receives all the props from selected image */
function ImageCard({url, title, source}) {
  return (
      <div className='image'>
        <img src={url} alt={title} width="250px" height="250px"/>
        <div className='info'>
          <h1>{title}</h1>
          <button><a href={source}>More</a></button>
        </div>
      </div>
  )
}

export default ImageCard