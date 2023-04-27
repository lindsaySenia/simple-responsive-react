import { useState } from 'react';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];

}

function App () {

    
    
    const handleClick = () => {
   
    };

    return (
    <div>
        <button onClick={handleClick}>Add Animal</button>
        
    </div>
    );
}

export default App;