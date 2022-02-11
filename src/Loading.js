import React from 'react'
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='loading'>
        <ReactLoading type={"bubbles"} color={"white"} height={50} width={50} />
    </div>
  )
}

export default Loading