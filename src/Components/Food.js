import React, { useEffect,useState } from 'react'

export const Food = ({foodName,setFoodName,url, setUrl}) => {
    const [data,setData] = useState([]);
    const [hoverCard,setHoverCard] = useState(null);
    useEffect(()=>{
        
      const getFoods = async() =>{
        try{
        const response = await fetch(url);
        const dat = await response.json();
        console.log(dat);
        if(dat.meals)
        {
        setData(dat.meals);

        }else{
            alert("fetch error");
        }

      }
    catch (error)
    {
        console.log(error.message);
    }}
      getFoods();
    },[url]);

  return (
    <div className='col-12 container'>
        <div className='row hh'>
           {data && data.map((d,index) =>(
            <div className='col-md-4 col-sm-1 col-xs-1 col-lg-4 col-xl-4 nn'>
                <div class="card" onMouseEnter={() =>setHoverCard(index)} onMouseLeave={()=>setHoverCard(null)}>
                  {hoverCard !=index?(<>
                <img src={d.strMealThumb} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">{d.strMeal}</p>
                </div></>):(<p class="card-text recepie">{d.strInstructions}</p>)
                }
                </div>
            </div>
           ))}
        </div>
    </div>
  )
}
