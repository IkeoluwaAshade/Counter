import React, { useState } from 'react'

const App = () => {
  const [counterValue, setcounterValue] = useState (0);

  

  return (
    <div className='overall-body'>

      <div className='about-the-app'>
        <p>
          Hi Dear! Thank you for checking this out. I hope you got some values.
        </p>
      </div>

      <div className='counter-holder'>

        <div className='result-display'>
          <div className={`counter-display`}>{counterValue}</div>
        </div>

        <div className='button-holder'>

         <button onClick={() => setcounterValue(counterValue + 1)} className='positive-increment'>+</button>

          <button onClick={() => setcounterValue (counterValue - 1)} className='negative-increment'>-</button>

        </div>
      </div>
    </div>
  )
}

export default App