// import React from 'react'

function List() {
    let tempData = ['apple' , 'banana' , 'orange' , 'mango']
  
  
    return (
    <div>
        <h1>List of Fruits</h1>
        {tempData.map((item , index) =>
            <h2 key={index}>{item} - {index}</h2>
        )}


        

    </div>
  )
}

export default List
