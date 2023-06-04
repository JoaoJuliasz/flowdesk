import { useState } from 'react'
import Select from 'react-select'

import { CurrencyContainer, SelectContainer, SubmitBtn } from './CurrencySelector.styles'


type Props = {
    loading: boolean
    currencies: { value: string, label: string }[]
    getMarketData: (currencyPair: string) => void
}

const CurrencySelector = ({ loading, currencies, getMarketData }: Props) => {

    const [currency, setCurrency] = useState<string>("")

    return (
        <CurrencyContainer>
            <SelectContainer>
                <Select options={currencies} placeholder="Select currency pair" isDisabled={loading} isLoading={loading}
                    onChange={(value) => setCurrency((value?.value as string))} />
            </SelectContainer>
            <SubmitBtn onClick={() => getMarketData(currency)}>Submit</SubmitBtn>
        </CurrencyContainer>
    );
};

export default CurrencySelector;