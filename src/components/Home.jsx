import React, { useContext } from 'react'
import { useGlobalContext } from '../contexts/context';

const Home = () => {
  const name = useGlobalContext();
  return (
    <>
      <div>My Home Page</div>
      <p>{name}</p>
    </>
  )
}

export default Home