import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Home from "./routes/Home";
import Test from "./routes/Test";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin />
                </Route>
                <Route exact path="/">
                    <Home />
                    {/* <Test /> */}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;
