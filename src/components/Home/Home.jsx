import React from 'react';

class Home extends React.Component {
	render () {
		const { users } = this.props;
		const style = require('./Home.scss');
		return (
			<div>
				{
					users.map( (item, index) => {
						return (
							<div key={index} className={style.box}>
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




