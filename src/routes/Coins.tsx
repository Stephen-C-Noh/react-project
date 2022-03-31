import styled from "styled-components";

const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
`;

function Coin() {
    return <Title>코인</Title>;
}
export default Coin;
