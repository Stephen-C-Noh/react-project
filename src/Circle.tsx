import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
    //  == borderColor: string | undifined;
}
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: ${(props) => props.bgColor};
    border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}
function Circle({ bgColor, borderColor, text = "defauuuuuult" }: CircleProps) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
}

export default Circle;

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) =>
    `Hello ${playerObj.name}. You are ${playerObj.age} years old.`;
