//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { extendObservable } from "mobx";
import { observer, } from "mobx-react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


//from app
import * as appAction from '../store/action/appAction';


const propTypes = {
	children: PropTypes.object.isRequired,
	appReducer: PropTypes.object.isRequired,
	appAction: PropTypes.object.isRequired,
};

//pure component
class AppContainer extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	appReducer: state.appReducer
});

const mapDispatchToProps = dispatch => ({
	appAction: bindActionCreators(appAction, dispatch)
});

AppContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps, null, {
	pure: false
})(AppContainer);