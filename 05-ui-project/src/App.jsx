import React from 'react';
import Navbar from './Comonenets/Section1/Navbar';
import Section1 from './Comonenets/Section1/Section1'
import Center from './Comonenets/Section1/Center';
import Section2 from './Comonenets/Section2/Section2'
import Page1content from './Comonenets/Section1/Page1content';

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1681666713689-cd1416a652f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'this firzst intro',
      tag: ' Satisfied',
    },
    {
      img: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'this second intro',
      tag: 'Undersarved',
    },
    {
      img: 'https://images.unsplash.com/photo-1753613648131-f8189bf05bcf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'this third intro',
      tag: 'Underbanked',
    },
    {
      img: 'https://images.unsplash.com/photo-1753613648131-f8189bf05bcf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'this fourth intro',
      tag: 'Underprogress',
    },
  ]


  return (

    <div>
      <Section1 users={users} />
      <Section2 />
    </div>


  )
}
export default App