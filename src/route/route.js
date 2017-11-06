//from system
import React from 'react';
import { Route, Switch } from 'react-router-dom';


//form app
/* containers */
import AppContainer from '../container/appContainer';

/* components */
import HomeComponent from '../component/homeComponent';


export default (
	<AppContainer>
		<Switch>
			<Route exact path="/" component={HomeComponent} />
		</Switch>
	</AppContainer>
);