import React from "react"
import { useState } from "react"
import useCurrencyInfo from "./Hooks/useCurrencyInfo"

function App() {
  const [currency, setCurrency] = useState('')

  // currencyOption = []
  const currencyInfo = useCurrencyInfo('')
  const options = Object.keys(currencyInfo)

  return (
    <>
      <div>
        <input 
        type="text" 
        value={currencyInfo}
        currencyOption = {options}
        onChange={(e) => {setCurrency(e.target.value)}}
        />
        <select>
          {options.map((currency) => {
            <option key={currency} value={currency}>
              {currency}
            </option>
          })}
        </select>
        
      </div>
    </>
  )
}

export default App
