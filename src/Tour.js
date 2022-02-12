import React, { useState } from 'react'

const Tour = ({id, name, info, price, image, deleteTour}) => {

    const [readmore, setReadmore] = useState(false);

  return (
    <article className='single-tour'>
        <img src={image} alt={name}/>
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
            </div>
                <div className='tour-price'>${price}</div>
            <p className='description'>{readmore ? info : `${info.substring(0, 200)}...`}
                <button onClick={()=> setReadmore(!readmore)}>{readmore ? 'show less' : 'read more'}</button>
            </p>
            <button className='delete-btn' onClick={() => deleteTour(id)}>Skip this trip...</button>
        </footer>
    </article>
  )
}

export default Tour