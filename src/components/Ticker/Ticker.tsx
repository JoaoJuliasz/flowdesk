import { getParsedTime } from "../../utils/getParsedTime";
import { TickerContainer, TickerItem, TickerKey, TickerValue } from "./Ticker.styles";

type Props = {
    trickerValues: { [key: string]: string | number }
}

const Ticker = ({ trickerValues }: Props) => {
    return (
        <TickerContainer>
            {Object.keys(trickerValues).map(value => {
                return (
                    <TickerItem>
                        <TickerKey>{value}:</TickerKey>
                        <TickerValue>
                            {value.toLowerCase().includes('time') ?
                                getParsedTime(trickerValues[value] as number)
                                : trickerValues[value]}
                        </TickerValue>
                    </TickerItem>
                )
            })
            }
        </TickerContainer>
    );
};

export default Ticker;