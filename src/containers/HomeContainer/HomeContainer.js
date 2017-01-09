import React from 'react';
import Home from '../../components/Home/Home.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/user.js';

class HomeContainer extends React.Component {
	static get propTypes() {
		return {
			state: React.PropTypes.object,
			actions: React.PropTypes.object,
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			name: 'John',
		};
	}
	componentDidMount() {
	}
	addUser() {
		const { actions } = this.props;
		const state = this.state;
		actions.addUserAsync({name: state.name});
	}
	handNameChange(e) {
		this.setState({
			name: e.target.value,
		});
	}
	render() {
		/*
		* The user is one of the datas stored in Redux and is stored in props, check the reducers
		* and the function mapStateToProps() and mapDispatchToProps() below.
		*/
		const { user } = this.props.state;
		const state = this.state;
		const style = require('./HomeContainer.scss');
		return (
			<div>
				<h1 className={style.h1Title}>Hello World ! Add Some Names !</h1>
				<input onChange={this.handNameChange.bind(this)} value={state.name}/>
				<button type="button" onClick={this.addUser.bind(this)}>Add</button>
				<Home users={user.users} />
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		state: state,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch),
	};
}

/**
* Connect Redux with this Component. (If you want to why this is called container, google 'redux container')
*/
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
