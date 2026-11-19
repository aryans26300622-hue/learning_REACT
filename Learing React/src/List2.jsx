// import React from 'react'
//This part covers conditional rendering
const List2 = () => {
  const tempData = ['apple', 'banana', 'orange', 'mango']

  return (
    <div>
      {tempData.length === 0 ? (
        <h1>No Data Found</h1>
      ) : (
        tempData.map((item, index) => {
          if (index === 1) {
            return <i>{item}</i>
          }
          return <h1 key={index}>{item}</h1>
        })
      )}
    </div>
  )
}

export default List2