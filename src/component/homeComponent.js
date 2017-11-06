
//from system
import React, { Component } from 'react';
import { extendObservable } from "mobx";
import { observer, } from "mobx-react";
import PropTypes from 'prop-types';

//from app



class HomeComponent extends Component {
	render() {
		return (
			<div>
				<h3>Home component</h3>
			</div>
		);
	}
}

export default HomeComponent;