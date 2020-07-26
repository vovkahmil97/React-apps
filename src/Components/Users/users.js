import React from 'react';
import Form from './form.js';
import "./users.css"

const Users = (props) => {
	let users = props.state.users.map(u=> <div className="user_items">
			<span className="user_name">{u.name}</span><br/>
			<span>Surname: {u.surname}</span><br/>
			<span>Age: {u.age}</span><br/>
			<span>City: {u.City}</span>
		</div>	
	)
	return (
		<div className = "user_page">
			<div className = "top_section">
			<h2 className = "user_title">MY USERS </h2>
			<input type = "button" value = "CREATE NEW USER" />
			</div>
			<input type = 'search' value = "Find your user by name" className ="search_field"/>
			<div className = "User_cards">
			{users}
			</div>
		</div>
		
	)
}

export default Users;