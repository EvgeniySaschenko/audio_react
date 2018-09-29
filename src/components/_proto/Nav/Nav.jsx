import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		let url= location.pathname;
		this.props.init(url)
	}

	activeItem(){
		let id= arguments[0];
		this.props.activeItem(id);
	}

	render(){
		let { nav } = this.props.data;
		let templateNav= nav.map( (e, i) => {
			return(
				<li className={ `Nav__list-item ${ !e.status ? '' : 'Nav__list-item_active' }`} key={ i }>
					<Link className={ `Nav__list-link ${ !e.status ? '' : 'Nav__list-link_active' }`}
						to={ e.link }
						onClick={ this.activeItem.bind(this, e.id) }>
						{ e.name }
					 </Link>
				</li>
			)
		});

		return(
			<nav className={ `Nav Nav_${ this.props.clsMod }` }>
				<ul className="Nav__list">
					{ templateNav }
				</ul>
			</nav>
		)
	}
}

export default Nav;