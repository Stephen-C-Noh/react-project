import Coins from "./Coins";
import styled from "styled-components";
import bgImg from "../Images/bgImg.jpg";

const MainWrapper = styled.div`
    font-weight: bold;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: -1;
    display: flex;
    justify-content: center;
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

function Home() {
    return (
        <>
            <MainWrapper>
                <BgImgContainer>
                    <BgImg />
                    {/* <Coins /> */}
                </BgImgContainer>
            </MainWrapper>
        </>
    );
}
export default Home;
