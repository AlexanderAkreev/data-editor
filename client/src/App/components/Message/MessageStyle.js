import styled from 'styled-components'

const MessageStyle = styled.div `
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 1000;
	background: rgba(60, 66, 85, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	font-family: 'AGAvalancheC-Regular';

	.message-box {
		background-color: white;
		padding: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		.title {
			font-size: 20px;
		}
		.text {
			margin: 15px 0;
		}
		.buttons {
			display: flex;
			justify-content: center;
			align-items: center;
			.button {
				padding: 0 15px;
			}
		}
	}

`

export default MessageStyle