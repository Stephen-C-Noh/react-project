import Coins from "./Coins";
import styled from "styled-components";
import bgImg from "../Images/bgImg.jpg";
import { Link } from "react-router-dom";
import Todays from "./Todays";

const MainWrapper = styled.div`
    font-weight: bold;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    /* background-image: url(${bgImg}); */
`;
const BgImgContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const BgImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    opacity: 20%;
`;
BgImg.defaultProps = { src: bgImg };

const Header = styled.header`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr;
    height: 8vh;
    width: 100vw;
    /* background-color: #000000; */
`;
const HomeBtn = styled.div`
    width: 80px;
    height: 50px;
    margin: 8px 10px;
    display: block;
    position: relative;
    justify-content: center;
    text-align: center;
    font-size: 36px;
    border-radius: 10px;
    a {
        display: flex;
        align-items: center;
        padding: 10px;
    }
`;

const MainArea = styled.div`
    height: 85vh;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr;
    /* background-color: #ed1a4d; */
`;
const Main = styled.div`
    /* background-color: #604099; */
`;
const SideList = styled.div`
    max-height: 84vh;
    overflow-y: scroll;
    /* background-color: #f3a549; */
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

const Footer = styled.footer`
    height: 6vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Copyright = styled.div``;
const AboutApi = styled.div`
    color: green;
    display: flex;
    width: 25vw;
    height: inherit;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

function Home() {
    return (
        <>
            <MainWrapper>
                <BgImgContainer>
                    <BgImg />
                    <Header>
                        <HomeBtn>
                            <Link to="/">Crypto_Tracker🔗</Link>
                        </HomeBtn>
                    </Header>
                    <MainArea>
                        <Main>
                            <Todays />
                        </Main>
                        <SideList>
                            <Coins />
                        </SideList>
                    </MainArea>
                    <Footer>
                        Footer
                        <Copyright></Copyright>
                        <AboutApi>API...</AboutApi>
                    </Footer>
                </BgImgContainer>
            </MainWrapper>
        </>
    );
}
export default Home;
