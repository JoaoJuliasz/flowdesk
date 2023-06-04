import { useCallback, useEffect, useState } from 'react';

const useFetchCurrencies = () => {

    const [currencies, setCurrencies] = useState<{ label: string, value: string }[]>([])
    const [currenciesLoading, setCurrenciesLoading] = useState<boolean>(false)

    const fetchCurrencies = useCallback(async () => {
        setCurrenciesLoading(true)
        try {
            const updtCurrencies = []
            const response = await fetch('https://data-api.binance.vision/api/v3/ticker/bookTicker')
            const data = await response.json()
            for (let i = 0; i < data.length; i++) {
                updtCurrencies.push({ label: data[i].symbol, value: data[i].symbol })
            }
            setCurrencies(updtCurrencies)
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setCurrenciesLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchCurrencies()
    }, [fetchCurrencies])

    return { currencies, currenciesLoading }

};

export default useFetchCurrencies;