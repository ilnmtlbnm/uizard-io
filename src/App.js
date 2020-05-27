import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Artboard1Jpg from './containers/Artboard1Jpg';
import Artboard2Jpg from './containers/Artboard2Jpg';
import Artboard3Jpg from './containers/Artboard3Jpg';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Artboard1Jpg} />
			<Route path="/2-jpg" component={Artboard2Jpg} />
			<Route path="/3-jpg" component={Artboard3Jpg} />
		</Switch>
	</BrowserRouter>
);

export default App;
