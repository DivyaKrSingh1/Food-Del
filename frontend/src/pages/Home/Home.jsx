import React, { useState } from 'react'
import'./Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisoplay from '../../component/FoodDisplay/FoodDisoplay'

const Home = () => {

    const [category, setCategory] = useState("ALL");


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisoplay category={category}/>
    </div>
  )
}

export default Home
