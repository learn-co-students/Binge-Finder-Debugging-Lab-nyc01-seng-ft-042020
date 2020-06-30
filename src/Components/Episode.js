import React from 'react';

export default function Episode(props) {
  
  let { eachEpisode } = props

  return (
    <div>
      Episode {eachEpisode.number} - {eachEpisode.name}
    </div>
  )
}

