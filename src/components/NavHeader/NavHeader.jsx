import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../_proto/Nav/Nav.jsx';

class NavHeader extends Nav{
	constructor(props){
		super(props);
	}
}

export default connect(
	store => {
		return{
			data: store
		}
	},
	dispatch => {
		return{

			init: ( url )=>{
				axios.get(window.srcData + 'ctr/index.php?ctr=nav&action=GET_NAV_ALL')
				.then( (res)=>{
					dispatch({
						type: 'INIT_NAV',
						data: res.data,
						url: url
					})
				} )
				.catch( (err) => console.log( err) )
			},

			activeItem: (id) => {
				dispatch({
					type: 'ACTIVE_ITEM_NAV',
					id: id
				})
			}
			
		}
	}
)(NavHeader);