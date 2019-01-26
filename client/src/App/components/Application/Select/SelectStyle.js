import styled from 'styled-components'
import GeneralInputStyle from '../Input/GeneralInputStyle'


const SelectStyle = styled(GeneralInputStyle) `
	


	
	justify-content: space-between;
	position: relative;
	cursor: pointer;
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
	
	


	&::after {
		content: '';
		display: inline-block;                    
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		transform: rotate(-90deg);		
		background-image: url(assets/img/icons/left.svg);
		width: 8px;
		height: 8px;
		margin: 0 0 0 10px; 
	}



	.options {
		display: none;
		background-color: white;
		position: absolute;
		top: 100%;
		left: 0;		
		width: 100%;
		z-index: 10;
		box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
		border-radius: 4px;
		.option {
			padding: 10px 20px;
			&:hover {
				background-color: #EFEEF8;
			}
		}
		
	}

	&.open {
		&::after {
			transform: rotate(90deg);
		}
		.options {
			display: block;
		}
	}


`

export default SelectStyle