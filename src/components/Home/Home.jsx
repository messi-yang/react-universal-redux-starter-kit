import React from 'react';

class Home extends React.Component {
	render () {
		const { users } = this.props;
		return (
			<div>
				{
					users.map( (item, index) => {
						return (
							<p key={index}>{item.name}</p>
						);
					})
				}
			</div>
		);
	}
}

export default Home;




