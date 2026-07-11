import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Section1 from './Components/Section1';


const users = [
  {
    date: "March 20 2026",
    info: "beatiful river and mountains are available for exploration and give a peace dark black and white view.",
  },
  {
    date: "March 20 2026",
    info: "beatiful river and mountains are available for exploration and give a peace dark black and white view.",
  },
  {
    date: "March 20 2026",
    info: "beatiful river and mountains are available for exploration and give a peace dark black and white view.",
  },
  {
    date: "March 20 2026",
    info: "beatiful river and mountains are available for exploration and give a peace dark black and white view.",
  },
  {
    date: "March 20 2026",
    info: "beatiful river and mountains are available for exploration and give a peace dark black and white view.",
  },
  {
    date: "March 20 2026",
    info: "beatiful river and mountains are available for exploration and give a peace dark black and white view.",
  },

];

const App = () => {

  return (
    <div  >
      <Navbar />
      <Section1 users = {users} />    
    </div>

  )
}
export default App;