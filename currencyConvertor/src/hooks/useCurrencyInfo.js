import { useState, useEffect } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect( () => {
        fetch(`https://cdn.jsdeliver.net/ghfawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]) )
        console.log(data)
    }, [currency])
    return data
}

export default useCurrencyInfo;