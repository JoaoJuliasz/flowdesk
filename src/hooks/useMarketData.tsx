import { useCallback, useState } from 'react';

const BASE_URL = 'https://api.binance.com/api/v3/'

const useMarketData = () => {

    const [tickerData, setTickerData] = useState({} as TickerData)
    const [ticker24Data, setTicker24Data] = useState({} as Ticker24hData)
    const [tradesData, setTradesData] = useState<Trade[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getMarketData = useCallback((currencyPair: string) => {
        setLoading(true)
        Promise.all([
            fetch(`${BASE_URL}ticker?symbol=${currencyPair}`),
            fetch(`${BASE_URL}ticker/24hr?symbol=${currencyPair}`),
            fetch(`${BASE_URL}trades?symbol=${currencyPair}`)
        ])
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(data => {
                setTickerData(data[0])
                setTicker24Data(data[1]);
                setTradesData(data[2])
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => setLoading(false))

    }, [])

    return { tickerData, ticker24Data, tradesData, loading, getMarketData }
};

export default useMarketData;