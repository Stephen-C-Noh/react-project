import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchAllTickers, fetchOverview } from "../api";
import MarketReport from "../components/MarketReport";
import { IOverView, TickersData } from "../interfaces";

const MainContainer = styled.div`
    width: inherit;
    height: inherit;
    margin: 10px 10px;
`;

const News = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    padding: 10px 20px;
    border-radius: 10px;
`;
const NewsItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span:first-child {
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;
const Loader = styled.span`
    text-align: center;
    display: block;
`;
// const Tabs = styled.div`
//     display: grid;
//     grid-template-columns: repeat() (3, 1fr);
//     margin: 25px 0px;
//     gap: 10px;
// `;

// const Tab = styled.span<{ isActive: boolean }>`
//     text-align: center;
//     text-transform: uppercase;
//     font-size: 12px;
//     font-weight: 400;
//     background-color: rgba(0, 0, 0, 0.5);
//     padding: 7px 0px;
//     border-radius: 10px;
//     color: ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
//     a {
//         display: block;
//     }
// `;

function Todays() {
    const { isLoading: TickersLoading, data: allTickersData } = useQuery<TickersData[]>(
        "allTickers",
        fetchAllTickers
    );
    const TickersData = allTickersData?.slice(0, 100);
    console.log(TickersData);
    const { isLoading: OverviewLoading, data: OverviewData } = useQuery<IOverView>(
        "Overview",
        fetchOverview
    );
    const loading = TickersLoading || OverviewLoading;
    return (
        <>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <MainContainer>
                    <News>
                        <NewsItem>
                            <MarketReport />
                        </NewsItem>
                    </News>
                </MainContainer>
            )}
        </>
    );
}

export default Todays;
