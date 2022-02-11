import React from 'react'
import Tour from './Tour'

const Tours = ({tours, deleteTour}) => {
  return (
    <section>
        <div className='title'>
            <h2 className='pageHeading'>Tourist Places</h2>
            <div className='underline'></div>
        </div>
        <div className='outerCard'>
            {
                tours.map((tour)=>{
                    return <Tour key={tour.key} {...tour} deleteTour={deleteTour}/>
                })
            }
        </div>
    </section>
  )
}

export default Tours