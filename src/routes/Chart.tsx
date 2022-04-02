import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

export interface IohlcvData {
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
    const { isLoading, data } = useQuery<IohlcvData[]>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(coinId),
        { refetchInterval: 10000 }
    );
    const mappedOhlcvData = data?.map((data: IohlcvData) => ({
        x: data.time_open,
        y: [data.open.toFixed(2), data.high.toFixed(2), data.low.toFixed(2), data.close.toFixed(2)],
    }));
    return (
        <div>
            {isLoading ? (
                "Loading Chart..."
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[{ data: mappedOhlcvData }]}
                    height={400}
                    options={{
                        chart: {
                            type: "candlestick",
                            toolbar: {
                                show: true,
                                tools: {
                                    download: true,
                                    pan: false,
                                    reset: false,
                                    zoom: false,
                                    zoomin: false,
                                    zoomout: false,
                                },
                            },
                        },

                        title: {
                            text: "CandleStick Chart",
                            align: "center",
                        },
                        xaxis: { type: "datetime" },
                        yaxis: {
                            labels: { formatter: (value: number) => `$${value.toFixed(2)}` },
                            axisBorder: { show: true },
                            axisTicks: { show: true },
                            tooltip: { enabled: true },
                        },
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
