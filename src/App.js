import { useState } from "react"
import React from 'react'
import Products from "./Products";

const App = () => {
  const [search,setSearch]=useState('');
  const [data,setData]=useState([]);
  const YOUR_APP_ID= "37bedcef";
  const YOUR_APP_KEY= "6b1fbb75189a8331d2c55d5d15d4a052";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`).then(
     response => response.json()
    ).then(
      data =>  setData(data.hits)
    )
  }
  return (
    <div>
      <center>
        <h4>Food Recipe App</h4><br />
        <form onSubmit={submitHandler}>
          <input type="text" value={search}  onChange={(e)=>setSearch(e.target.value)}/> <br/> 
          <input type="submit" value="Search" className="btn btn-primary"/>
        </form>
        {data.length>=1 ? <Products data={data} />:null}
      </center>
    </div>
  )
}

export default App
