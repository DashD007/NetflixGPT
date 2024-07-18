import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="font-black absolute top-0 min-w-[100%] h-[100vh] aspect-video flex flex-col justify-center ">
      <div className="w-1/3  bg-gradient-to-r from-black flex flex-col gap-4 pl-16 py-5 select-none ">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-md font-medium">{overview}</p>
        <div className="flex gap-3">
          <button className="text-black bg-white rounded-md px-8 py-2 font-bold text-lg opacity-95 hover:opacity-75">Play</button>
          <button className="text-black bg-gray-300 rounded-md px-6  font-bold text-lg opacity-60"> More info</button>
        </div>
      </div>
      
    </div>
  )
}

export default VideoTitle