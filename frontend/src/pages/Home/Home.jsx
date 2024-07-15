import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/foodDisplay'
import AppDowload from '../../components/AppDowload/AppDowload'

const Home = () => {
    const [category,setCategory]=useState("All");   
  return (
    <div>
        <Header></Header>
        <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
        <FoodDisplay category={category}></FoodDisplay>
        <AppDowload></AppDowload>
    </div>
  )
}

export default Home