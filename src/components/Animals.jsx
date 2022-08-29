import { useState } from "react";

const Animals = () => {
  const [animals, setAnimals] = useState(["Raccoon"]);

  const addAnimals = () => {
    setAnimals([...animals, "Lion", "Tortoise", "Cat", "Jaguar", "Tiger"]);
  };

  const printAnimals = animals.map((animal, i) => (
    <li key={animal}>{animals[i]}</li>
  ));

  return (
    <>
      <p>##################_________###############</p>
      <h3>Animals:</h3>
      <ul>
      {printAnimals}
      {console.log(animals)}
      </ul>
      <button className="btn btn-primary mb-4" onClick={addAnimals}>
        Add Animals
      </button>
    </>
  );
};

export default Animals;
