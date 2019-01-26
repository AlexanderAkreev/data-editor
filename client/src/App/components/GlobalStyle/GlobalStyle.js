import React from 'react'
import { createGlobalStyle } from 'styled-components'

 

const GlobalStyle  = createGlobalStyle`
	@font-face {
	  font-family: 'Roboto-Regular';
	  src:  url('assets/fonts/Roboto-Regular/Roboto-Regular.eot') format('embedded-opentype'),  
	        url('assets/fonts/Roboto-Regular/Roboto-Regular.woff') format('woff'), 
	        url('assets/fonts/Roboto-Regular/Roboto-Regular.ttf')  format('truetype'), 
	        url('assets/fonts/Roboto-Regular/Roboto-Regular.svg#Roboto-Regular') format('svg');
	}
	@font-face {
	  font-family: 'Roboto-Bold';
	  src:  url('assets/fonts/Roboto-Bold/Roboto-Bold.eot') format('embedded-opentype'),  
	        url('assets/fonts/Roboto-Bold/Roboto-Bold.woff') format('woff'), 
	        url('assets/fonts/Roboto-Bold/Roboto-Bold.ttf')  format('truetype'), 
	        url('assets/fonts/Roboto-Bold/Roboto-Bold.svg#Roboto-Bold') format('svg');
	}

	@font-face {
	  font-family: 'AGAvalancheC-Regular';
	  src:  url('assets/fonts/AGAvalancheC-Regular/AGAvalancheC-Regular.otf');	
	}

	* {
		box-sizing: border-box;
	}

	body {
		background: #E5E5E5;
		min-height: 100vh;
	}

`

export default GlobalStyle