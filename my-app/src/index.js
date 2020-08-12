import React from 'react';
	import ReactDOM from 'react-dom';
	import App from './App';
    import Profile from './profile/Profile'
    // variables
	let fullName = ' mr Hyde'
	let bio ='created a secret potion that he uses on himself'
	let img = <img src='myImage.jpg' alt='photo' height='240' width='240'/>
	let style = {
	  margin : '5px'
	}
	let profession = 'chemist/wrecker'

	ReactDOM.render(
	  <React.StrictMode>
	    <App />
	    <Profile fullName={fullName} style={style} bio={bio} profession={profession}  >
	        {img}
	      </Profile>
    </React.StrictMode>,
	  document.getElementById('root')
	);
	
