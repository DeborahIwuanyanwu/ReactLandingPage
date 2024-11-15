import React, { useState } from 'react'

const Contact = () => {
  const [num, setNum] = useState(false)
  const [ val, setVal ] = useState('red')

  const increment = () =>{
    setNum(!num)
  }
  console.log(num)
  console.log(val)
  return (
    <div>
      {/* <div>{ num ? 'true' : 'false'}</div> */}
      <input placeholder='enter color' value={val} onChange={(e)=> setVal (e.target.value)} />
      <button style={{backgroundColor: `${val}`}} onClick={increment}>Add</button>
    </div>
  )
}

export default Contact