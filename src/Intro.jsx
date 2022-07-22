import React from 'react'
import { Routes,Route} from 'react-router-dom';
import ContactMe from './ContactMe';
import Operation from './Operation';
import Forms from './Forms';
const Intro = () => {
  return (
    <div><h1>Welcome to Our Introduction Page </h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae similique eius laborum necessitatibus atque sed tempore facilis, dicta ipsum aperiam quia iste. Consectetur qui quia mollitia assumenda pariatur natus quos, sit consequatur, architecto reiciendis nulla, ab dignissimos inventore. Hic.</p>
    <Routes>
        <Route path='/forms' element={<Forms/>} />
        <Route path='/contactme' element={<ContactMe/>} />
        <Route path='/operation' element={<Operation/>} />
      </Routes>
      </div>
  )
}

export default Intro