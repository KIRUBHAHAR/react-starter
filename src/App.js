import React, { useState } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

const App = (props) => {

  const [textLengthState, setTextLengthState] = useState(
    {
      textLength: 0,
      textValue: '',
    }
  );

  const [employeeOrgState, setEmployeeOrgState] = useState(
    {
      companyName: "Tiger Analytics"
    }
  );

  const textBoxLengthHandler = (event) =>{
    const textValue = event.target.value;
    let length = textValue.length;
    setTextLengthState({
      textLength: length,
      textValue: textValue,
    });
  };

  const removeLetterHandler = (index) =>{
    const textValue = textLengthState.textValue.split("");
    textValue.splice(index,1)
    const updatedText = textValue.join("");
    console.log('text value = ',textValue,'Updated Text : ', updatedText);
    setTextLengthState({
      textLength: updatedText.length,
      textValue: updatedText,
    });
  };

  let characters = null;

  if(textLengthState.textLength>0){
    let charArray = textLengthState.textValue.split("");
    characters = (
      <div>
        {
            charArray.map((character,index) =>{
            return <CharComponent letter={character} key={index} clickDelete={()=>removeLetterHandler(index)} />
            })
        }
      </div>
    );
  }


  return (
    <div className="App">
      <h1>Hi , this is my Assignment 2</h1>
      <input type="text" value={textLengthState.textValue} onChange={textBoxLengthHandler}/>
      <p>Length : {textLengthState.textLength}</p>
      <ValidationComponent length={textLengthState.textLength} />
      {characters}
    </div>
  );
}

export default App;
