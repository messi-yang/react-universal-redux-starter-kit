import React from 'react';

class Home extends React.Component {
	static get propTypes() {
		return {
			users: React.PropTypes.array,
		};
	}
	render() {
		const { users } = this.props;
		const style = require('./Home.scss');
		// In this place, funyee represents the file path.
		const funyee = require('./funyee.png');
		return (
			<div>
				{
					users.map( (item, index) => {
						return (
							<div key={index} className={style.box}>
								<img className={style.image} src={funyee} />
								<span className={style.name}>{item.name}</span>
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default Home;
