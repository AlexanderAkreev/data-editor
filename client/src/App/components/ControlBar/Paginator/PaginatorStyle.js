import styled from 'styled-components'



const PaginatorStyle = styled.div `
	height: 100%;
	.paginator {
		display: flex;
		align-items: center;
		height: 100%;
		margin: 0 0 0 30px;

		.label {
			color: rgba(66, 70, 82, 0.5);
		}

		.items-on-page-wrapper {
			display: flex;
			align-items: center;
			height: 100%;

			.items-on-page {
				cursor: pointer;
				position: relative;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 55px;
				height: 100%;
				padding: 0 11px;
				background: white;
				box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
				border-radius: 4px;
				margin: 0 0 0 10px;

				&::after {
					content: '';
					display: inline-block;
					width: 8px;
					height: 8px;
					transform: rotate(-90deg);		
					background-repeat: no-repeat;
					background-size: contain;
					background-position: center;
					background-image: url(assets/img/icons/left.svg);
				}
				.option {
					color: #424652;							
					&:not(.active) {
						padding: 0 11px;
					}
					&:not(.active):hover {
						background-color: #F6F5FC;
					}
				}

				.options {
					display: none;
					position: absolute;
					top: 100%;
					background: white;
					left: 0;
					width: 100%;
				}

				&.open {
					.options {
						display: block;
					}
				}

			}

		}		

		.page-num-wrapper {
			display: flex;
			align-items: center;
			height: 100%;
			margin: 0 0 0 20px;

			.page-total,
			.input{
				color: #424652;
			}

			.page-num {
				height: 100%;
				display: flex;
				align-items: center;
				margin: 0 10px;
					
				.button {
					width: 17px;
					height: 17px;
					background-repeat: no-repeat;
					background-size: contain;
					background-position: center;
					background-image: url(assets/img/icons/left.svg);
					cursor: pointer;
				}

				.button.next-page {
					transform: rotate(180deg);	
				}

				.input-wrapper {
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 40px;
					background: white;
					box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.15);
					border-radius: 4px;
					margin: 0 8px;

					.input {
						background-color: transparent;
						border: none;
						outline: none;
						width: 30px;
						text-align: center;
					}
				}
				
			}

		}

		&.bottom {
			.items-on-page {
				.options {
					bottom: 100%;
					top: auto;
				}
			}
			
		}

	}


`

export default PaginatorStyle