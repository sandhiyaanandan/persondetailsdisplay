import React from 'react';

import './App.css';

class Header extends React.Component
{
	render()
	{
		return(<div>
			<div className="headerItem">{this.props.selectedName}</div>
		</div>)
	}
}

export default Header;	