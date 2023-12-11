import { useEffect, useState } from 'react';
import './App.css';
import Item from './assets/Item';

const BASE_URL = "http://localhost:9000/"

const App = () => {
  const [data, setData] = useState()
  const [filteredData, setFilteredData] = useState(null)

  
  useEffect(()=> {
    const fetchFoodData = async() => {
      try {
        const response = await fetch(BASE_URL)
      const json = await response.json()
      setData(json)
      setFilteredData(json)
    } catch (error) {
    }
  }
  fetchFoodData()
}, [])

const searchFood = (e) => {
  const searchValue = e.target.value
  const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))
  setFilteredData(filter)
}

const selectedBtn = (e) => {
  if(e.target.value === 'all') {
    setFilteredData(data)
    return
  }
  const filter = data?.filter((food) => food.type.toLowerCase().includes(e.target.value))
  setFilteredData(filter)
}

  return <div className='main'>
  <div className='subMain'>
    <div>
      <img src="/images/food.svg" className="mLogo" alt="logo" />
    </div>
    <div className="search">
      <input onChange={searchFood} type="text" placeholder="Search Food....." />
    </div>
  </div>
  <div className='catagoryMain'>
  <div className='catagory'>
       <button onClick={selectedBtn} value={'all'}>All</button>
       <button onClick={selectedBtn} value={'breakfast'}>Breakfast</button>
       <button onClick={selectedBtn} value={'lunch'}>Lunch</button>
       <button onClick={selectedBtn} value={'dinner'}>Dinner</button>
    </div>
  </div>
  <div className='bgImage'>
    {filteredData?.map((itm)=>{
      return (<Item itm={itm}/>)
    })}
        
  </div>
    
  </div>;
};

export default App;
