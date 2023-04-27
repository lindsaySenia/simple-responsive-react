import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];

}

function App () {

    const [animals, setAnimals] = useState([]);
    
    const handleClick = () => {
        //create new array put all existing animals from previous array in then add random animal
        // don;t use push bc modifies state directly
        setAnimals([...animals, getRandomAnimal()]);
    };

    //use map function to transform array of elements to an array of components
    const renderedAnimals = animals.map((animal, i) => {
        return <AnimalShow type={animal} key={i} />
    });

    return (
    <div>
        <button onClick={handleClick}>Add Animal</button>
        <div>{renderedAnimals}</div>
        
    </div>
    );
}

export default App;