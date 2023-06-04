type TickerData = {
    symbol: string
    priceChange: string
    priceChangePercent: string
    weightedAvgPrice: string
    openPrice: string
    highPrice: string
    lowPrice: string
    lastPrice: string
    volume: string
    quoteVolume: string
    openTime: number
    closeTime: number
    firstId: number
    lastId: number
    count: number
}

type Ticker24hData = {
    symbol: string
    priceChange: string
    priceChangePercent: string
    weightedAvgPrice: string
    prevClosePrice: string
    lastPrice: string
    lastQty: string
    bidPrice: string
    bidQty: string
    askPrice: string
    askQty: string
    openPrice: string
    highPrice: string
    lowPrice: string
    volume: string
    quoteVolume: string
    openTime: number
    closeTime: number
    firstId: number
    lastId: number
    count: number
}

type Trade = {
    id: number
    price: string
    qty: string
    quoteQty: string
    time: number
    isBuyerMaker: boolean
    isBestMatch: boolean
}

type DataRow = Omit<Trade, 'isBuyerMaker' | 'isBestMatch'>