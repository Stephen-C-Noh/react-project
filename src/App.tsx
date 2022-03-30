// When you import a package not made in Typescript(which means it does not have typescript declaration),
// A)
// try: npm i --save-dev @types/PACKAGENAME
// for example npm -i --save-dev @types/react-query
// B)
// look up the package in DefinitelyTyped repository on Github.
// the packages on DefinitelyTyped are explainations for Typescripts to understand what you have imported.

import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

function App() {
    return (
        <Container>
            <H1>Theme</H1>
        </Container>
    );
}

export default App;
