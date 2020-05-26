import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchExampleJpg from './containers/SearchExampleJpg';
import TravelExampleJpg from './containers/TravelExampleJpg';
import CheckoutExampleJpg from './containers/CheckoutExampleJpg';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={SearchExampleJpg} />
			<Route path="/travel-example-jpg" component={TravelExampleJpg} />
			<Route path="/checkout-example-jpg" component={CheckoutExampleJpg} />
		</Switch>
	</BrowserRouter>
);

export default App;
