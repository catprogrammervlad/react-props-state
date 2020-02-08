import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Vlad', age: 17 },
      { name: 'Ruslan', age: 17 },
      { name: 'Paul', age: 18 }
    ]
  })

  

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Vladislav', age: 17 },
        { name: 'Ruslan', age: 17 },
        { name: 'Paul Plett', age: 18 }
      ]
    })
  }

  return (
    <div className='App'>
      <h1>Hello everyone</h1>
      <button onClick={switchNameHandler}>click!</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
      <div></div>
    </div>
  )
}

export default App
