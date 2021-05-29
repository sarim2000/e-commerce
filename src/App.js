import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./component/header/header-component";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<div>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shops" component={Shop} />
				</div>
			</Switch>
		</div>
	);
}

export default App;
