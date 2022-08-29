import { useState } from "react";

const Info = () => {
  const [info, setInfo] = useState({
    name: "Eze",
    age: 23,
  });

  const changeInfo = () => {
    setInfo({
      ...info,
      name: "Ezequiel",
      lastName: "Hornos",
    });

    console.log(info);
  };

  const { name, age } = info;

  return (
    <div className="container mt-5">
      <h3>Info:</h3>
      <h5>Name: {name}</h5>
      <h5>Age: {age}</h5>
      <button className="btn btn-success mb-5" onClick={changeInfo}>
        Change Info
      </button>
    </div>
  );
};

export default Info;
