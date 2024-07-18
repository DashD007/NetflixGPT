import React from 'react'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = ({movie}) => {
    const {title,id,overview} = movie;

    return (
    <div className="h-screen">
        <VideoBackground id={id}/>
        <VideoTitle title={title} overview={overview} />
    </div>
  )
}

export default MainContainer