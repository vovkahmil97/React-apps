import React from 'react';
import ReactDOM from 'react-dom'
import Header from './Components/header.js';
import News from './Components/news.js';
import Home from './Components/home.js';
import About from './Components/about.js';
import Users from './Components/Users/users.js';
import Message from './Components/Message/message.js';
import state from './Components/Redux/state.js'
import { BrowserRouter, Route } from 'react-router-dom'





const App = () => {
	return (
		<BrowserRouter>
			<Header state = {state} />
			<Route path="/news" component={News} />
			<Route path="/about" component={About} />
			<Route path="/home" component={Home} />
			<Route path="/message" render={ () => <Message />  } />
			<Route path="/users" render={ () => <Users state = {state} />  } />
		</BrowserRouter>
	)
}





// ReactDOM.render(<App/>, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))