import { Navigate, Outlet, Route,Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { Food } from './Components/Food';
import { useState } from 'react';
function App() {
  const [foodName,setFoodName] = useState("");
  const [url, setUrl] = useState( "https://www.themealdb.com/api/json/v1/1/search.php?f=a");

  return (
    <div className="App">
      <Header foodName={foodName} setFoodName={setFoodName} url={url} setUrl={setUrl}/>
      <Food foodName={foodName} setFoodName={setFoodName}  url={url} setUrl={setUrl}/>
      <Routes>
        <Route path="/" element={<Navigate to="header"/>}/>
        {/* <Route path="header" element={<Header/>}/> */}
        <Route path="Food" element={<Food foodName={foodName} setFoodName={setFoodName}/>}/>
      </Routes>

    
     
    </div>
  );
}

export default App;
