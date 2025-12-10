import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar';
import Carousel from './Carousel';
import Card from './Card';

const App = () => {
  const [loading, setLaoding] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUserData] = useState([]);
  return (
    <>
<Navbar/>
<Carousel/>
<Card/>
<Card/>

</>
  )
}

export default App