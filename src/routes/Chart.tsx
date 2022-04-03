import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { ChartProps, IohlcvData } from "../interfaces";
import ApexChart from "react-apexcharts";

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
                    series={[{ data: mappedOhlcvData }] as unknown as number[]}
                    height={350}
                    width={450}
                    options={{
                        theme: {
                            mode: "dark",
                            palette: "palette1",
                            monochrome: {
                                enabled: false,
                                color: "#255aee",
                                shadeTo: "light",
                                shadeIntensity: 0.65,
                            },
                        },
                        grid: {
                            show: false,
                        },
                        chart: {
                            type: "candlestick",
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },

                        title: {
                            text: "Price in last 2 weeks",
                            align: "center",
                        },
                        xaxis: {
                            type: "datetime",
                            labels: { show: false },
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                        },
                        yaxis: {
                            show: false,
                            labels: { formatter: (value: number) => `$${value.toFixed(2)}` },
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                            tooltip: { enabled: true },
                        },
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
