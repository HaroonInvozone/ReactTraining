import React from "react";
import { useState } from "react";

const Form = () =>{
    const[inputs, setInputs] = useState({});
    const [myCar, setMyCar] = useState("Volvo");
    const handleChange = (event) => {
        const name = event.target.name;
        // eslint-disable-next-line no-unused-vars
        const value = event.target.value;
        setInputs(value => ({...value , [name] : value}));
    };
    const handleCar= (event) => {
        setMyCar(event.target.value);
      };
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(inputs);
    };

    return (
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
          <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
            />
          </label>
          <label>Enter your age:
            <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
                onChange={handleChange}
            />
        </label>
        <select value={myCar} onChange={handleCar}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
        </select>
          <input type = "submit"/>
        </form>
      );
};

export default Form;