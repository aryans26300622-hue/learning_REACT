//Learning to use useStae in react.
//useState is a hook in react, hooks are in-built functions in react that does a certain type of job.

// if we wnat ot change a value shown to us on browser page its difficult to do it by vanilla js, so we use hooks .



import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  const [name , setName] = useState('myname');
  const [isVisible , setIsVisible] = useState(true);


  function handleName() {
    // name ="something you want to show";
     //doesn't work as it is not triggering the rerender on the screen
    setName('YourName')
}
  function handleVisibility(){
    setIsVisible(!isVisible)
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me
      </button>
      <p>Yor name {name}</p>
      <button onClick={handleName}>Click to change name</button>
      <p>Click to change button</p>
      <button onClick={handleVisibility}>
        {isVisible ? 'hide content' : 'show content'}
      </button>
    </div>
  )
}

export default Counter

/**
 * Hooks - To use React feature we have to use hooks
 * 1.  useState - when state change then react tirgger re-render.
 * 2 . useState return a array of two values
 * 3. first refers a current value second value is a setterFunction for update the state.
 */