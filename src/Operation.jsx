import React from 'react'

function Operation() {
    const cars=[{id:1,value:'BMW'},
    {id:2,value:"SuperCars"},
    {id:3,value:"Tank"},
    {id:4,value:"SpaceShip"},
    {id:5,value:"Ship"},
    {id:6,value:"Rome"}];
    const numbers=[2,6,7,2,9,10,22,54,69,13,2,7,9,33,4,5,8,2,6,9,38,5,6];
    const doubleNumbers=cars.map((cars)=>
    <li key={cars.id}>
    {cars.value}
    </li>);

  return (<>
  <h1 align="center">My Cars :-</h1>
  <div align="center">
    <ul type="none">{doubleNumbers}</ul>

    {/* <h1 align="center">Operations in React </h1> 
    {cars.length >1 && 
    <h2>"Yes! Yes! Yes! Yes!"</h2>} */}
    </div>
    </>
  )
}


export default Operation