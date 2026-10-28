

import { useState } from 'react'

function LearnEvent() {
  /**
   * Normal js -click
   * React js -onClick , onChange, onInput, onSubmit, onKeypress , onMouseover
   */

const [text , setText] = useState('')

function handleClick(){
    alert('Hello World')
}  

function handleChange(e){
    console.log(e); {/*This function prints the exact text the user types into the input box to the browser's developer console in real time.
                     Every single time a user presses a key, deletes a character, or pastes text into that box, this function runs and executes the console.log() statement. */}

    setText(e.target.value)
}

function RemoveOutput(){
    setText(''); {/* We have created a function which is connected to the button clear all, when we click the btoon this function gets invoked and it replaces all the text from the output with an empty string , making it loo klike the data got cleared. */}
}
function RemoveEverything(){

}
  return (
    <div>
      {/*Click */}
      {/* You can either direct the onClick to a function you have already made by write the name of the function inside curly braces or use arrow function to make the function on the spot for making.*/}
      <button onClick={handleClick}>Show Alert</button>
      {/* onChange */}
        {/* This code is a React text input element that runs a JavaScript function named handleChange whenever the user types or changes what is inside the box*/}
      <input type="text" onChange={handleChange} value={text} />
      console.log(input)
      <h1>{text}</h1> {/**Shows the text typed in the input box. It is helpful as now we can show output directly in h1 tag. */}
      <button onClick={RemoveOutput}>RemoveOutput</button><br/>
      <button onClick = {RemoveEverything}>Click To remove Both From Input And The Outputt</button>
    </div>
  )
}

export default LearnEvent
