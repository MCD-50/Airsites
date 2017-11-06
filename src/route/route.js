//from system
import React from 'react';
import { Route, Switch } from 'react-router-dom';


//form app
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';


/* containers */
import AppContainer from '../container/appContainer';

/* components */
import HomeComponent from '../component/homeComponent';


export default (
	<LocaleProvider locale={enUS}>
		<AppContainer>
			<Switch>
				<Route exact path="/" component={HomeComponent} />
			</Switch>
		</AppContainer>
	</LocaleProvider>
);