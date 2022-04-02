import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}
interface ChartProps {
    coinId: string;
}

function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(coinId),
        { refetchInterval: 10000 }
    );
    return (
        <div>
            {isLoading ? (
                "Loading Chart..."
            ) : (
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: "Price",
                            data: data?.map((price) => price.close) as number[],
                        },
                    ]}
                    options={{
                        chart: {
                            background: "trnasparent",
                            height: 500,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                        },
                        grid: { show: false },
                        yaxis: { show: false },

                        xaxis: {
                            categories: data?.map((date) => date.time_close) as string[],
                            labels: { trim: true, format: "dd/MMM", show: false },
                            type: "datetime",
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                        },
                        theme: {
                            mode: "dark",
                        },
                        stroke: {
                            width: 3,
                        },
                        tooltip: {
                            y: {
                                formatter: (value) => `$ ${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
