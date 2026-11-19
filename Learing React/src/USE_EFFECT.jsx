// import React from 'react'
// import React from 'react'
import { useEffect, useState } from "react"

function USE_EFFECT() {
  
  
let [count ,setCount] = useState(0);
let [isFlag, setIsFlag] = useState(false);

useEffect(()=>{
console.log('hi')
}, [isFlag]); {/**If i were to remove dependency array from the useEffect and then increment the count, then on each rerender by the useState() the hi get printed. */}
{/*Now since we have provided isFlag in the dependency array, the effect will only run when isFlag changes. */}
  return (
    <div>
      <h1>{count}</h1>
      <h1>{isFlag && 'Hello'}</h1>
      <button onClick = {()=> setCount(count +1)}> + </button>  
      <button onClick = {()=> setIsFlag(!isFlag)}>Toggle Button </button>    
    </div>
  )
}

export default USE_EFFECT

// useEffect is a hook in react that allows you to perform side effects in functional components. 
// It is called inside a component and takes two arguments: a function that contains the side effect code, and an optional array of dependencies that determine when the effect should be re-run. 
// The useEffect hook can be used for tasks such as fetching data, updating the DOM, or subscribing to events.
// If we give an empty array as a second argument, the effect will only run once when the component mounts.
// If we provide any state variables in the array of dependencies, the effect will run whenever any of those state variableschange.