import React, {useState, useEffect} from 'react'

export default function Stats(){
  const [strength, setStrength] = useState(0)
  const [constitution, setConstitution] = useState(0)
  const [dexterity, setDexterity] = useState(0)
  const [intelligence, setIntelligence] = useState(0)
  const [wisdom, setWisdom] = useState(0)
  const [charisma, setCharisma] = useState(0)


  function rollStats(){
    let newStat = 0
    newStat = Math.floor()*(18-0) + 0
    console.log(newStat)
  }

  return (
    <button onClick={rollStats}>Stats</button>
  )
}