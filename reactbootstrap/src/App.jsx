import React from 'react'
import { useState } from 'react'

const App = () => {
  const [loading, setLaoding] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUserData] = useState([]);
  return (
 <h1>hello world</h1>
  )
}

export default App