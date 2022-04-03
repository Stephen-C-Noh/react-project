import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";
import { PriceProps, TickersData } from "../interfaces";

function Price({ coinId }: PriceProps) {
    const { isLoading, data } = useQuery<TickersData[]>(
        ["price", coinId],
        () => fetchCoinTickers(coinId),
        { refetchInterval: 10000 }
    );
    return <h1>Price</h1>;
}

export default Price;
