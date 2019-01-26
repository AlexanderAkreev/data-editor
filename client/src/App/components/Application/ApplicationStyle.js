import styled from 'styled-components'


const padding = 20;

const ApplicationStyle = styled.div `

	width: 100%;

	.application-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: AGAvalancheC-Regular;
		padding: 20px ${padding}px;
		background-color: #F4F5FC;
		.icon.cancel { 
			cursor: pointer;
		}
		.title {
			font-size: 21px;
		}
		
	}

	.application-main {
		background-color: white;
		display: flex;
		width: 100%;
		padding: 20px ${padding}px;
		min-height: ${({minHeight})=>minHeight ? minHeight : 0}px;

		.no-operation-type {
			font-family: AGAvalancheC-Regular;
			color: rgba(66, 70, 82, 0.5);
			font-size: 25px;
			flex-grow: 2;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		

		.part {
			border-right: 1px solid rgba(45, 48, 59, 0.2);
			flex-basis: calc(100% / 3);
			padding: 0 35px;

			.title {
				font-family: AGAvalancheC-Regular;
				font-size: 17px;
				font-weight: bold;
				color: rgba(66, 70, 82, 0.5);
				margin: 0 0 22px 0;
			}

			.input-wrapper {
				margin: 0 0 18px 0;
				.label {
					margin: 0 0 10px 0;
				}
			}

			.input-wrapper-wrapper {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.passport-num-serial {
					flex-grow: 2;
				}
				.passport-receive-date {
					flex-grow: 1;
					margin-left: 25px;
				}
			}

			&.first {
				padding-left: 0px;
			}

			&.last {
				border: none;
				padding-right: 0px;
			}
			
			.warn-message {
				font-family: AGAvalancheC-Regular;
				.title {
					color: #DB3030;
				}

				.text {
					color: #424652;
				}
			}
			.print-button {
				width: 230px;
				height: 50px;
			    margin: 20px 0;
			}
		}

	}

	.application-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px ${padding}px;
		background-color: #F4F5FC;

		.right {
			display: flex;
			align-items: center;
			font-family: AGAvalancheC-Regular;
			.text {
				margin-right: 25px;
				.sup {
					color: #DB3030;
				}
			}
		}

	}




`

export default ApplicationStyle