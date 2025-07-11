import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const option = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>
      <h1 className='text-3xl bg-orange-500'>Allah Hu-Akbar</h1>
      <div className="w-full h-scren flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "none" }}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={option}
                  onCurrencyChange={(currency) =>
                    setAmount(amount)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        border-white rounded-md
                        bg-blue-600 text-white px-2
                        py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={option}
                  onCurrencyChange={(currency) => 
                    setTo(currency)}
                  selectCurrency={from}
                  amountDisable
                />
              </div>
                    <button type="submit"
                    className="w-full bg-blue-600
                    text-white px-4 py-3 rounded-lg"
                    >
                      convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
