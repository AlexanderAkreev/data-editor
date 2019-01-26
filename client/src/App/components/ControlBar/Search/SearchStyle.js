import styled from 'styled-components'



const SearchStyle = styled.div `
	height: 100%;
	.search {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FFFFFF;
		box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.15);
		border-radius: 4px;
		padding: 0 10px;
		margin: 0 0 0 30px;

		.input {
		    height: 100%;
		    background-color: transparent;
		    border: none;
		    outline: none;
		}
		.search-button {
			width: 15px;
			height: 15px;		
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			background-image: url(assets/img/icons/search.svg);
			cursor: pointer;
		}

	}


`

export default SearchStyle