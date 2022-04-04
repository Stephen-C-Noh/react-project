import Coins from "./Coins";
import styled from "styled-components";
import bgImg from "../Images/bgImg.jpg";
import { Link } from "react-router-dom";

const MainWrapper = styled.div`
    font-weight: bold;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: -1;
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

const NavBar = styled.div`
    width: 100%;
    height: 7vh;
    top: 0;
    position: fixed;
    background-color: #d6b2b2;
`;

const HomeBtn = styled.div`
    width: 80px;
    height: 50px;
    margin: 8px 10px;
    display: block;
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

const AboutApi = styled.div``;

function Home() {
    return (
        <>
            <MainWrapper>
                <NavBar>
                    <HomeBtn>
                        <Link to={"/"}>🏠</Link>
                    </HomeBtn>
                </NavBar>
                <BgImgContainer>
                    <BgImg />
                </BgImgContainer>
                <Coins />
            </MainWrapper>
        </>
    );
}
export default Home;
