import styled from "styled-components";

const MainContainer = styled.div`
    width: inherit;
    height: inherit;
    margin: 10px 10px;
`;

const News = styled.div`
    display: flex;
    justify-content: space-between;
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

function Todays() {
    return (
        <MainContainer>
            <News>
                <NewsItem>
                    <span>Todays-Currency</span>
                    <span>Hmm</span>
                </NewsItem>
                <NewsItem>
                    <span>Max-Rise</span>
                    <span>3.83%</span>
                </NewsItem>
                <NewsItem>
                    <span>Max-Fall</span>
                    <span>4.1%</span>
                </NewsItem>
            </News>
        </MainContainer>
    );
}

export default Todays;
