import React from 'react';

export default function tvShow(props) {

  const handleClick = () => {    
    props.selectShow(props.show)
  }
  
  return (
    <div>
      <br/>
      <img src={props.show.image.medium} onClick={handleClick} alt=""/>
    </div>
  );
}

