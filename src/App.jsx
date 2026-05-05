import React from 'react'
import Card from './Card'
import NFt from './assets/image-equilibrium.jpg'



const App = () => {

const card =  [
  {
    img: NFt,
    name: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm",
    price: 0.041,
    made: "Jules Wyvern"
  }
]

  return (
    <div>
      <Card CardDetails = {card}/>
    </div>
  )
}

export default App