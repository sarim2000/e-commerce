import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
function App() {
	return (
		<Switch>
			<div>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shops" component={Shop} />
			</div>
		</Switch>
	);
}

export default App;
