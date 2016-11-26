import React from 'react';
import Home from '../../components/Home/Home.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/user.js';

class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "John",
		};
	}
	componentDidMount() {
	}
	addUser() {
		const { actions } = this.props;
		const state = this.state;
		actions.addUserOptimistic({name: state.name});
	}
	handNameChange(e) {
		this.setState({
			name: e.target.value,
		});
	}
	render () {
		const { user } = this.props.state;
		const state = this.state;
		const style = require('./HomeContainer.scss');
		return (
			<div>
				<h1 className={style.h1Title}>Hello orld ! Add Some Names !</h1>
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
* Connect Redux with this Component. (Container is on of the design pattern of React-Redux) 
*/
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
