import styled from "styled-components";
import Coins from "./Coins";

const Header = styled.header`
    height: 8vh;
    width: 100vw;
    background-color: #000000;
`;
const Footer = styled.footer`
    height: 6vh;
    width: 100vw;
    background-color: #3d80c2;
`;
const MainArea = styled.div`
    height: 85vh;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr;
    background-color: #ed1a4d;
`;
const Main = styled.div`
    background-color: #604099;
`;
const SideList = styled.div`
    max-height: 84vh;
    overflow-y: scroll;
    background-color: #f3a549;
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

function Test() {
    return (
        <>
            <Header>Header</Header>
            <MainArea>
                <Main>Main</Main>
                <SideList>
                    <Coins />
                </SideList>
            </MainArea>
            <Footer>Footer</Footer>
        </>
    );
}

export default Test;
