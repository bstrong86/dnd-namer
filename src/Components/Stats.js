import React, {useState, useEffect} from 'react'

export default function Stats(){
  const [strength, setStrength] = useState(0)
  const [constitution, setConstitution] = useState(0)
  const [dexterity, setDexterity] = useState(0)
  const [intelligence, setIntelligence] = useState(0)
  const [wisdom, setWisdom] = useState(0)
  const [charisma, setCharisma] = useState(0)


  useEffect(() => {
    console.log('mounted')
  },[])

  function randomNumber(){
    let newStat = 0
    newStat = Math.floor(Math.random()*(18-0) + 0)
    console.log(newStat)
    return newStat
  }

  function rollStats(){
    setStrength(randomNumber())
    setConstitution(randomNumber())
    setDexterity(randomNumber())
    setIntelligence(randomNumber())
    setWisdom(randomNumber())
    setCharisma(randomNumber());   
  }

  return (
    <>
      <button onClick={rollStats}>Strength:{strength}</button>
      <div>Constitution:{constitution}</div>
      <div>Dexterity:{dexterity}</div>
      <div>Intelligence:{intelligence}</div>
      <div>Wisdom:{wisdom}</div>
      <div>Charisma:{charisma}</div>
      <button onClick={rollStats}>Stats</button>

    </>
  )
}