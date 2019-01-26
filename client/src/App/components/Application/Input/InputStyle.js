import styled from 'styled-components'
import GeneralInputStyle from './GeneralInputStyle'



export const InputStyle = styled(GeneralInputStyle) `
	
	box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.15);
	cursor: text;
	.input {
		color: #424652;
		background-color: transparent;
		border: none;
		width: 100%;
		outline: none;
	}
	

`

export const DateInputStyle = styled(InputStyle) `

	justify-content: space-between;
	position: relative;
	
	.calendar {
		position: absolute;
		top: 100%;
		left: 0;
	}

	.react-calendar__tile--active,
	.react-calendar__tile--active:enabled:hover, 
	.react-calendar__tile--active:enabled:focus {
		background: #FF5800;
	}

	.date-icon {
		cursor: pointer;
		width: 18px;
		height: 18px;
	}
	



`

