import { useState } from "react";
import CurrencySelector from "../../components/CurrencySelector/CurrencySelector";
import useFetchCurrencies from "../../hooks/useFetchCurrencies";
import useMarketData from "../../hooks/useMarketData";
import Table from "../../components/Table/Table";
import Ticker from "../../components/Ticker/Ticker";
import Tabs from "../../components/Tabs/Tabs";
import { CurrencySection, HomeContainer } from "./Home.styles";

const Home = () => {

    const [selectedData, setSelectedData] = useState<string>("ticker")

    const { currenciesLoading, currencies } = useFetchCurrencies()
    const { tickerData, ticker24Data, tradesData, loading, getMarketData } = useMarketData()

    return (
        <HomeContainer>
            <CurrencySection>
                <CurrencySelector loading={currenciesLoading} getMarketData={getMarketData} currencies={currencies} />
            </CurrencySection>
            {
                loading ? 'Getting market data...' :
                    (Object.keys(tickerData).length > 0 ?
                        <section>
                            <Tabs selectedData={selectedData} setSelectedData={setSelectedData} />
                            {selectedData === 'ticker' ? <Ticker trickerValues={tickerData} /> : null}
                            {selectedData === '24ticker' ? <Ticker trickerValues={ticker24Data} /> : null}
                            {selectedData === 'trades' ? <Table data={tradesData} /> : null}
                        </section>
                        : null
                    )
            }
        </HomeContainer>
    );
};

export default Home;