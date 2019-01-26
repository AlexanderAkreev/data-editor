import styled from 'styled-components'



const GeneralInputStyle = styled.div `
	
	background-color: #EFEEF8;
	font-family: Roboto-Regular;
	padding: 10px 20px;
	border-radius: 4px;
	height: 40px;
	display: flex;
	align-items: center;

	.default-value {
		color: ${(props)=>props.error ? '#DB3030' : 'rgba(66, 70, 82, 0.5)'};
	}
	
	

`

export default GeneralInputStyle