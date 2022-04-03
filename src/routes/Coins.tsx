import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { ICoin } from "../interfaces";
import { Helmet } from "react-helmet";
import { isPropertySignature } from "typescript";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a {
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in-out;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
    font-size: 48px;
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const CoinImg = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

// const GoBackBtn = styled.div`
//     height: 70px;
//     background-color: white;
//     color: ${(props) => props.theme.bgColor};
//     margin-bottom: 10px;
//     border-radius: 15px;
//     a {
//         display: flex;
//         align-items: center;
//         padding: 20px;
//         transition: color 0.2s ease-in-out;
//     }
//     &:hover {
//         a {
//             color: ${(props) => props.theme.accentColor};
//         }
//     }
// `;

function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

    return (
        <Container>
            <Helmet>
                <title>코인</title>
            </Helmet>
            <Header>
                <Title>코인</Title>
            </Header>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    {/* <GoBackBtn>
                        <Link to="/">Home</Link>
                    </GoBackBtn> */}
                    <CoinsList>
                        {data?.slice(0, 100).map((coin) => (
                            <Coin key={coin.id}>
                                <Link
                                    to={{
                                        pathname: `/${coin.id}`,
                                        state: { name: coin.name },
                                    }}
                                >
                                    <CoinImg
                                        src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                                    />
                                    {coin.name} &rarr;
                                </Link>
                            </Coin>
                        ))}
                    </CoinsList>
                </>
            )}
        </Container>
    );
}
export default Coins;
