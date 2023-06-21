import React from 'react'

const Card = ({thumbnail,title}) => {
  return (
    <div className="p-2 m-2 w-[350px] shadow-lg items-center justify-center ">
      <img src={thumbnail} className="w-full" />
      <ul>
        <li>{title}</li>
        <li>Channel Name</li>
        <li>Views</li>
      </ul>
    </div>
  );
}

export default Card