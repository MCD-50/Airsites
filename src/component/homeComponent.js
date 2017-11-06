
//from system
import React, { Component } from 'react';
import { extendObservable } from "mobx";
import { observer, } from "mobx-react";
import PropTypes from 'prop-types';

//from antd
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

//from app

class HomeComponent extends Component {
	constructor(params) {
		super(params);

		this.state = {
			isSiderCollapsed: false
		}

		this.toggleSider = this.toggleSider.bind(this);
	}

	toggleSider() {
		this.setState({ isSiderCollapsed: !this.state.isSiderCollapsed });
	}

	render() {
		const { isSiderCollapsed } = this.state;
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={isSiderCollapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>nav 3</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', paddingLeft: 18 }}>
						<Icon className="trigger" type={isSiderCollapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggleSider}/>
					</Header>
					<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: '100vh' }}>
						Content
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default HomeComponent;