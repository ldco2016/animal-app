import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = [
    'bird',
    'cat',
    'cow',
    'dog',
    'gator',
    'horse',
    'lion',
    'leopard',
  ];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    /**
     * This modifies a piece of state
     * and we never want to modify
     * a piece of state directly.
     */
    // animals.push(getRandomAnimal())
    // To update a piece of state that is a variable
    // use pattern below.
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default App;
