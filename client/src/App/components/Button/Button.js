import styled from 'styled-components'

export const GeneralButton = styled.div `	
	background-color: #3C4255;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'AGAvalancheC-Regular';
	border-radius: 4px;
	height: 40px;
	color: white;
	min-width: 100px;
	padding: 0 15px;
	
	:after,
	:before {
		content: '';
		display: inline-block;                    
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
	}
`

export const SimpleButton = styled.div `	
	background-color: transparent;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	color: #E35205;
`

export const OrangeButton = styled(GeneralButton)`
	background-color: #E35205;
`


export const LogoutButton = styled(GeneralButton)`
	background-color: #B5BBCB;
	:after {
	     background-image: url(assets/img/icons/exit.svg);
	     width: 15px;
	     height: 15px;
	}
`

export const LoginButton = styled(OrangeButton)`
	
`

export const AddButton = styled(OrangeButton)`
	:after {
	     background-image: url(assets/img/icons/add.svg);
	     width: 15px;
	     height: 15px;
	}
`

export const CancelButton = styled(GeneralButton)`
	:after {
	     background-image: url(assets/img/icons/cancel.svg);
	     width: 15px;
	     height: 15px;
	}
`

export const PrintButton = styled(GeneralButton)`
	:before {
	     background-image: url(assets/img/icons/print.svg);
	     width: 32px;
	     height: 24px;
	     margin: 0 10px 0 0;
	}
	border: 1px solid #E35205;
	background-color: white;
	color: #424652;
`


	 


