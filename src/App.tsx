// When you import a package not made in Typescript(which means it does not have typescript declaration),
// A)
// try: npm i --save-dev @types/PACKAGENAME
// for example npm -i --save-dev @types/react-query
// B)
// look up the package in DefinitelyTyped repository on Github.
// the packages on DefinitelyTyped are explainations for Typescripts to understand what you have imported.

import Router from "./Router";

function App() {
    return <Router />;
}

export default App;
