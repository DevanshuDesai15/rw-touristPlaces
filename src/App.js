import React, {useState, useEffect} from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import './App.css'
const url = 'https://course-api.com/react-tours-project';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    const newTour = tours.filter((tour)=> tour.id !== id)
    setTours(newTour)
  }

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

  }

  useEffect(() => {
    fetchData();
  }, [])
  

  if(loading){
    return(
      <div className="LoadArea">
        <Loading/>
      </div>
    )
  }

  if(tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>Sorry there are no Places left...</h2>
          <button onClick={()=> fetchData()} className='btn' >Show Places...</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
