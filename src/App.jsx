import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952'
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796'
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355'
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776'
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4'
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2'
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2'
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc'
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537'
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e'
    }
  ])

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      alert('Not enough money to add this fighter!')
      return
    }
    setTeam([...team, { ...fighter, instanceId: Date.now() }])
    setZombieFighters(zombieFighters.filter((z) => z.id !== fighter.id))
    setMoney(money - fighter.price)
    setTotalStrength(totalStrength + fighter.strength)
    setTotalAgility(totalAgility + fighter.agility)
  }

  const handleRemoveFighter = (fighterRemove) => {
    setTeam(
      team.filter((fighter) => fighter.instanceId !== fighterRemove.instanceId)
    )

    if (!zombieFighters.some((z) => z.id === fighterRemove.id)) {
      setZombieFighters([...zombieFighters, fighterRemove])
    }

    setMoney(money + fighterRemove.price)
    setTotalStrength(totalStrength - fighterRemove.strength)
    setTotalAgility(totalAgility - fighterRemove.agility)
  }

  return (
    <div className="App">
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>

      <h3>Your Team</h3>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter) => (
            <li key={fighter.instanceId}>
              <img src={fighter.img} alt={fighter.name} />
              <h4>{fighter.name}</h4>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total Team Stats</h3>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>

      <h3>Available Fighters</h3>
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <h4>{fighter.name}</h4>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
