import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchOverview } from "../api";
import { IOverView } from "../interfaces";

const Container = styled.div`
    padding: 0px 20px;
    width: inherit;
    height: 80vh;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
    font-size: 30px;
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Overview = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
`;
const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span:first-child {
        font-size: 16px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;
const Changes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background-color: grey;
    color: #a8fdbd;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 20px;
`;

const Description = styled.p`
    margin: 20px 0px;
    padding: 0px 5px;
`;

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 7px 0px;
    border-radius: 10px;
    color: ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
    a {
        display: block;
    }
`;

function MarketReport() {
    const { isLoading: OverviewLoading, data: OverviewData } = useQuery<IOverView>(
        "Overview",
        fetchOverview
    );

    return (
        <>
            <Container>
                <Header>
                    <Title>Today's Overview</Title>
                </Header>
                {OverviewLoading ? (
                    <Loader>Loading...</Loader>
                ) : (
                    <>
                        <Overview>
                            <OverviewItem>
                                <span>market cap</span>
                                <span>${OverviewData?.market_cap_usd}</span>
                            </OverviewItem>
                            <Changes>{OverviewData?.market_cap_change_24h}%</Changes>
                            <OverviewItem>
                                <span>volume</span>
                                <span>{OverviewData?.volume_24h_usd}</span>
                            </OverviewItem>
                            <Changes>{OverviewData?.volume_24h_change_24h}%</Changes>
                        </Overview>
                        <Overview>
                            <OverviewItem></OverviewItem>
                        </Overview>
                    </>
                )}
            </Container>
        </>
    );
}

export default MarketReport;
