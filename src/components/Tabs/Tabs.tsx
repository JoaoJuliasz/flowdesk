import { ListContainer, ListItem } from './Tabs.styles'
type Props = {
    selectedData: string
    setSelectedData: React.Dispatch<React.SetStateAction<string>>
}

const Tabs = ({ selectedData, setSelectedData }: Props) => {
    return (
        <ListContainer>
            <ListItem onClick={() => setSelectedData('ticker')} $selectedData={selectedData === 'ticker'}>Ticker</ListItem>
            <ListItem onClick={() => setSelectedData('24ticker')} $selectedData={selectedData === '24ticker'}> 24h Ticker</ListItem >
            <ListItem onClick={() => setSelectedData('trades')} $selectedData={selectedData === 'trades'}> Recent Trades</ListItem >
        </ListContainer >
    );
};

export default Tabs;